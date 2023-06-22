import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {browserSessionPersistence, setPersistence,onAuthStateChanged,getAuth} from "firebase/auth";
import {auth, database, firestore, isAuthenticated} from "./App";
import SessionCSS from "./session.module.css";
import { onValue, ref ,update, set, get } from "firebase/database";
import { collection, addDoc, updateDoc, arrayUnion, doc } from "firebase/firestore";


export const Session = (props) => {

    const[data, setData] = useState([]);
    const [selectedOption, setSelectedOption] = useState(``);
    const user = auth.currentUser;
    const dataRefSession  = ref(database, 'SessionsList/list/');
    const navigate = useNavigate();
    
    
    //check if user is authenticated
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                // User is not signed in.              
                alert("You need to sign in to access this page");
                navigate(`/`);
                //window.location.href = "/"
            }
        });
    })


    function handleClick(){
        window.location.href = `/`;
    }


    const join = async () => {
        if (selectedOption && user.uid){
            console.log("selectedOption = "+selectedOption);
            console.log("user.uid = "+user.uid);
            try{
                const usersDataRef = ref(database, `users/`+user.uid+`/full_name/`)
                //const activeUsersDataRef = ref(database, selectedOption+`/activeUsers`)

                const userNameObj = await get(usersDataRef);
                //const activelistObj = await get(activeUsersDataRef);

                if (userNameObj.exists()){
                    //const activelist = activelistObj.val();
                    const userName = userNameObj.exists() ? userNameObj.val(): ``;
                    //console.log("activelist = "+activelist);
                    console.log("userName = "+userName);

                    //const combActiveList= activelist+","+userName;
                    //await set(activeUsersDataRef,combActiveList);

                    //const docRef = await addDoc(collection(firestore,`rooms`),{name: selectedOption});
                    //const docRef = await addDoc(firestore,`rooms`, selectedOption);
                    //const roomId = docRef.id;

                    const roomId = selectedOption;
                    console.log("roomId = "+roomId);

                    const roomRef = doc(firestore,`rooms`, roomId);
                    await updateDoc(roomRef, {
                        participants: arrayUnion(user.uid),
                        userNames: arrayUnion(userName)
                    });
                    navigate(`/room/${roomId}`)
                }

            } catch(error) {
                console.error("Error constructing database references:", error);
            }
        } else {
            console.warn("selectedOption is empty or undefined");
        }    
    };


    //------------SessionList-----------
    useEffect(() => {
        const fetchData = () => {
          onValue(dataRefSession, (snapshot) => {
            var listSession=snapshot.val();                    
            var array = listSession.split(',')          
            //console.log(array);
            setData(array);
          });
        };
        fetchData();
    }, []);
    
    

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };


    return (
        <div className={SessionCSS.mainContainer}>
            <h3 className={SessionCSS.h3}>CODE-CLASS</h3>
            <div className={SessionCSS.topnav} href = "Topnav.css">
                <a className={SessionCSS.a1} href="/">Home</a>
                <a className={SessionCSS.a2} href="/About">About</a>
                {/*<a href="/Session">Session</a>*/}
                <button className={SessionCSS.logoutBtn} onClick={handleClick}>Log out</button>
            </div>
            <p className={SessionCSS.p1}>Select a Session to join </p>
            <p className={SessionCSS.p2}>Open sessions: </p>
            <div>
                {data ? (
                    <textarea id="sessionList" className={SessionCSS.sessionList}
                        value={`• `+ String(data)
                        .replace(/,/g, `\n• `)
                        .replace(/^\s*[\r\n]/gm, ``)}
                        readOnly
                        rows={10}
                        cols={50}
                    />
                ) : (
                    <p>Loading data...</p>
                )}
            </div> 
            <div className={SessionCSS.selectContainer}>
                {data ? (
                <select 
                    value={selectedOption} 
                    className={SessionCSS.selectSession} 
                    onChange={handleOptionChange}
                >
                    <option value="">Select an option</option>
                    {Array.isArray(data) && data.map((option, index) => (
                        <option key={index} value={option.trim()}>
                    {option.trim()}
                        </option>
                    ))}
                </select>
                ):(
                    <p>Loading data...</p>
                )}
                <button className={SessionCSS.sessEnterBtn} onClick={join}>Enter</button>
            </div>
        </div>
    )
}