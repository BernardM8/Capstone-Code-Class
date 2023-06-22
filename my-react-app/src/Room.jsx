import React, {useEffect, useState, useRef} from "react";
import { useParams } from "react-router-dom";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth, firestore, database} from "./App";
import SessionCSS from "./session.module.css";
import {arrayRemove, collection, deleteDoc, doc, getDoc, onSnapshot, updateDoc} from "firebase/firestore"
import {ref, get} from "firebase/database";
import RoomCSS from "./room.module.css";
import {compileCode} from "./Compile";
import {updateEditorToFirebase, updateCompilerToFirebase, updateEditor, updateEditor2} from "./Ide.mjs"
import ReactAce from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-fortran";
import "ace-builds/src-noconflict/mode-perl";
import "ace-builds/src-noconflict/mode-php";
import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/mode-haskell";
import "ace-builds/src-noconflict/mode-scala";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/mode-prolog";
import "ace-builds/src-noconflict/mode-r";
import "ace-builds/src-noconflict/mode-kotlin";
import "ace-builds/src-noconflict/theme-monokai";


export const RoomPage = (props) => {
    const {roomId}= useParams();
    const [roomData, setRoomData] = useState(null);
    const [userID, setUserID] = useState ("");
    const [userName, setUserName] = useState ("");
    const [selectedUser, setSelectedUser] = useState("");
    const [activeUserData, setActiveUserData] = useState([]);
    const [textData, setTextData] = useState(``);
    const [textInput, setTextInput] = useState(``);
    const [code, setCode] = useState(``);
    const [code2, setCode2] = useState(``);
    const [compiled1, setCompiled1] = useState(``);
    const [compiled2, setCompiled2] = useState(``);
    const [selectedLanguage, setselectedLanguage] = useState("java");
    const code2EditorRef = useRef(null);
    const user = auth.currentUser;

    //check if user is authenticated
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                // User is not signed in.              
                alert("You need to sign in to access this page");
                //navigate(`/`);
                window.location.href = "/";
            }else{
                setUserID(user.uid);
                const usersDataRef = ref(database, `users/`+user.uid+`/full_name/`);
                get(usersDataRef).then((snapshot)=>{
                    const userNameObj = snapshot.val();
                    setUserName(userNameObj);
                }).catch((error) =>{
                    console.error(error);
                });
            }
        },[]); //to only run effect on initial render
    })    


    const handleTextInput = (event) => {
        setTextInput(event.target.value);
    };


    useEffect(() => {
        const roomRef = collection(firestore,`rooms`);
        const roomDocRef = doc(roomRef, roomId);
        //console.log("roomId="+ roomId);
        const unsubscribe = onSnapshot(roomDocRef, (doc) => {
            //console.log("doc="+ doc);
            if (doc.exists) {
                setRoomData(doc.data());
                //console.log("room found")
            } else{
                alert("room not found");
            }
        });
        return () => {
            unsubscribe();
        };
    },[roomId]);


    useEffect(() => {
        const cleanup = (userClean) => {
            if (userClean) {
                const userRef = doc(firestore, `rooms`, roomId, `participants`, userClean.uid);
                deleteDoc(userRef)
                .then(() => {
                    console.log(`User removed from list`);
                }).catch((error) =>{
                    console.log(`Error moving user from list:`, error);
                });
            }
        };
    


    // Handle the signout event
    const unsubscribe = onAuthStateChanged(auth, (userClean) => {
        if (!userClean){
            cleanup(userClean);
        }
    });


    //Handle window unload event
    const handleWindowUnload = () =>{
        cleanup(user);
    };
    window.addEventListener(`beforeunload`, handleWindowUnload);
    
    //Clean up the event listeners when the component unmounts
    return () => {
        unsubscribe();
        window.removeEventListener(`beforeunload`, handleWindowUnload);
    };
    }, [roomId]);


    const removeParticipant = async () => {
        const user = auth.currentUser;
        if (user) {
            try{
                const roomRef = doc(firestore,`rooms`, roomId);
                const usersDataRef = ref(database, `users/`+user.uid+`/full_name/`)
                const userNameObj = await get(usersDataRef);
                const userName = userNameObj.exists() ? userNameObj.val(): ``;
                await updateDoc(roomRef,{
                    participants: arrayRemove(user.uid),
                    userNames: arrayRemove(userName)
                })
                .then(()=> {
                    console.log(`Participants removed`)
                })
            }catch(error){
                    console.log(`Error removing Participant:`, error);
            };
        }
    } 


    //Signout on button click event
    const handleSignOut = async () => {
        await removeParticipant()
        //auth.signOut()
        .then(() => {
            console.log("User signed out per handleSignOut()" );
            window.location.href = `/Session`;
        })
        .catch((error) => {
            console.error(`Error signing out:`, error);
        });
    };

   
    //_______________Chat-box______________
    useEffect(() => {
        const updateChatInitial = async () =>{
            const roomDef = doc(firestore, "rooms" , roomId); 
            const docSnap = await getDoc(roomDef);
            if (docSnap.exists) {
                const obj= docSnap.data();
                setTextData(obj.messages);
            } else{
                alert("docSnap.messages not found");
            }
        } 
        updateChatInitial();
    }, );
    
    const handleChatChange = async () =>{
        const newMessage = textInput
        const updatedMessage = textData +`\n`+ userName+":"+newMessage + `\n`;
        setTextData(updatedMessage);
        setTextInput("");
        const roomDef = doc(firestore, "rooms" , roomId); 
        await updateDoc(roomDef,{messages:updatedMessage} )
    };

    const handleChatClear = async () =>{
        setTextData(" ");
        setTextInput(" ");
        const roomDef = doc(firestore, "rooms" , roomId); 
        await updateDoc(roomDef,{messages:" "} )
    };


    useEffect(() => {
        const getUserList = () => {
            const roomRef = doc(firestore,`rooms`, roomId);
            onSnapshot(roomRef,(snapshot) => {
                const obj = snapshot.data();
                const listNames=obj.userNames
                setActiveUserData(listNames);
            });
        };
        getUserList();
    }, []); 


    //Change language
    const changeLanguage = (event) =>{
        setselectedLanguage(event.target.value)
    }


    //________Change Active User_________
    const changeUserUp = (newCode) =>{
        var arr = activeUserData;
        let currentIndex = arr.lastIndexOf(selectedUser);
        let userIndex = arr.lastIndexOf(userName);
        if (userIndex==0 && arr.length==1){
            //don`t do anything
        }else if (currentIndex-1==userIndex && currentIndex-2>=0){
            setSelectedUser(arr[currentIndex-2]);
        }else if (currentIndex<=0 && userIndex==arr.length-1 && arr.length-2>=0){
            setSelectedUser(arr[arr.length-2]);    
        }else if (currentIndex<=0){
            setSelectedUser(arr[arr.length-1]);             
        } else {
            setSelectedUser(arr[currentIndex-1]);
        } 
    };

    const changeUserDown = (newCode) =>{
        var arr = activeUserData;
        let currentIndex = arr.lastIndexOf(selectedUser);
        let userIndex = arr.lastIndexOf(userName);

        if (userIndex==0 && arr.length==1){
            //don`t do anything
        }else if (currentIndex==arr.length-1){
            setSelectedUser(arr[0]);
        }else if (currentIndex+1==userIndex && currentIndex+2>=arr.length){
            setSelectedUser(arr[0]);
        }else if (currentIndex+1==userIndex && arr[currentIndex+2]!=null){
                setSelectedUser(arr[currentIndex+2]);
        }else if (currentIndex+1>=arr.length && userIndex==0){
                setSelectedUser(arr[1]);        
        } else {
            setSelectedUser(arr[currentIndex+1]);
        } 
    };

    //____________Editor1____________
    //update editor1 editor
    useEffect(() => {
        if (userName){
            const firebasePath=userName+"/codeEditor/";
            updateEditor(setCode,firebasePath);
        }
    }, [userName]); //wait for userName before running

    //set change into firebase from editor1
    const handleCodeChange = (newCode) =>{
        setCode(newCode);
        const path = userName;
        updateEditorToFirebase(newCode,path);
    };
    
    //update editor1 compiler
    useEffect(() => {
        if (userName){
            const firebasePath1=userName+"/codeCompiler/";
            updateEditor(setCompiled1,firebasePath1);
        }
    }, [userName]);

    /*const handleCompileChange1 = (newCompiled) =>{
        setCompiled1(newCompiled);
        const path = userName+`/codeCompiler/`
        updateCompilerToFirebase(newCompiled,path);
    };*/

    const executeCode = () =>{
        var message="under construction due to credits"
        console.log(message)
        setCompiled1(message);
        /*compileCode(code, selectedLanguage)
        .then(output => {
            console.log("output:", output);
            setCompiled1(output);
        })
        .catch(error=>{
            console.error(`Error:`, error);
        });*/
    };

    //____________Editor2____________
    //update editor2 editor
    useEffect(() => {
        if (selectedUser){
            const firebasePath2=selectedUser+"/codeEditor/";
            updateEditor2(setCode2,firebasePath2);
        }
    }, [selectedUser]);

    //update editor2 compiler
    useEffect(() => {
        if (selectedUser){
            const firebasePath2=selectedUser+"/codeCompiler/";
            updateEditor2(setCompiled2,firebasePath2);
        }
    }, [selectedUser]);



    return (
        <div className={SessionCSS.mainContainer}>       
            <div className={RoomCSS.header}>Code-Class</div>
            
            {/*<!-- Menu bar -->*/}
            <div className={RoomCSS.dropdown}>
                {/*<span className={RoomCSS.span}>Menu</span>
                <span className={RoomCSS.span}>Edit</span>
                <span className={RoomCSS.span}>View</span>
                <span className={RoomCSS.span}>Help</span>*/}
                <button className={RoomCSS.Logout} onClick={handleSignOut}>Exit room</button> 
                <div className={RoomCSS.dropdown.content}>   
                    <p>
                
                    </p>
                </div>
            </div>

            {/*<!--Main Container section-->*/}
            <div className={RoomCSS.MainContainer_class}>  

                {/*<!--Left Sidebar section-->*/}
                <div className={RoomCSS.LeftSidebar.container}>
                    {/*<!--chat message section-->*/}
                    <div className={RoomCSS.chatBox}>Chat-box  
                        {textData ? (
                            <textarea className={RoomCSS.chatArea}readOnly 
                                value={String(textData)}
                                //rows={30}
                                //cols={32}
                            />
                        ) : (
                            <p>Loading data...</p>
                        )}
                        <textarea className={RoomCSS.chatInput} value={textInput} onChange={handleTextInput}></textarea>      
                        <button onClick={handleChatChange}>Post</button>
                        <button onClick={handleChatClear}>Clear</button>
                    </div>   
                    <div className={RoomCSS.ActiveUsers}>
                        <div className={RoomCSS.bodyText}> Active Users</div>   
                        {activeUserData ? (
                            <textarea className={RoomCSS.userList} readOnly
                                value={`•   `+ String(activeUserData)
                                .replace(/,/g, `\n•   `)
                                .replace(/^\s*[\r\n]/gm, ``)}
                                rows={30}
                                cols={32}
                            />
                        ) : (
                            <p>Loading data...</p>
                        )}
                    </div>
                </div>
                
                {/*<!--editor1 sections to enter code-->*/}
                <div className={RoomCSS.EditorContainer}>  
                    <div className={RoomCSS.innerEditor1Container}> 
                        <div className={RoomCSS.EditorHeaderInstructor}>{userName}</div>
                        <ReactAce 
                            mode = {selectedLanguage} 
                            theme = "monokai" 
                            value = {code}
                            onChange = {handleCodeChange}
                            setOptions={{
                                enableBasicAutocompletion: true,
                                enableLiveAutocompletion: true,
                                enableSnippets: true,
                                showLineNumbers: true,
                            }}
                        className={RoomCSS.editor}/> 
                        
                        {/*<!--Language change section-->*/}
                        <div className={RoomCSS.controlPanel}>&nbsp;&nbsp;Language &nbsp; &nbsp;
                            <select className={RoomCSS.languages}  value={selectedLanguage} onChange={changeLanguage}>
                                <option value = "java"> Java </option>
                                <option value = "python"> Python </option>
                                <option value = "node"> Node JS </option>
                                <option value = "c_cpp"> c/c++ </option>
                                <option value = "Perl"> Perl </option>
                                <option value = "PHP"> php </option>
                                <option value = "Ruby"> ruby </option>
                                <option value = "Haskell"> Haskell </option>
                                <option value = "Scala"> scala </option>
                                <option value = "SQL"> sql </option>
                                <option value = "Prolog"> prolog </option>
                                <option value = "R Language"> R Language </option>
                                <option value = "Fortran"> Fortran </option>
                                <option value = "Kotlin"> Kotlin </option>
                            </select>      
                            {/*<!--Run button-->*/}
                            <div className={RoomCSS.button.container}>
                                <button className={RoomCSS.btn} onClick={executeCode}> Run </button>
                            </div>
                        </div>
                        {/*<!--Output section for compiler1-->*/}
                        <div className={RoomCSS.output} /*onChange = {handleCompileChange1}*/>{compiled1}</div>                 
                    </div>


                    {/*<!--editor2 sections to enter code-->*/}
                    <div className={RoomCSS.innerEditor2Container}>    
                        <div className={RoomCSS.EditorHeaderStudent}>{selectedUser}</div>
                        <ReactAce 
                            mode = {selectedLanguage} 
                            theme = "monokai" 
                            value = {code2}
                           //onChange = {handleCodeChange2}
                            ref = {code2EditorRef}
                            setOptions={{
                                enableBasicAutocompletion: true,
                                enableLiveAutocompletion: true,
                                enableSnippets: true,
                                showLineNumbers: true,
                            }}
                            readOnly
                            className={RoomCSS.editor2}/> 
                        <div className={RoomCSS.togglebuttonContainer}>&nbsp;Switch User:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     
                            <button className={RoomCSS.togDown} onClick={changeUserDown}> &#8681; </button>
                            <button className={RoomCSS.togUp} onClick={changeUserUp}> &#8679; </button>
                        </div>
                        {/*<!--Output section for compiler2-->*/}
                        <div className={RoomCSS.output2} >{compiled2}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

