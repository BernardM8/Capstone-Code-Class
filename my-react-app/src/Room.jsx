import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {browserSessionPersistence, setPersistence,onAuthStateChanged,getAuth, signOut} from "firebase/auth";
import {auth, firestore, database} from "./App";
import SessionCSS from "./session.module.css";
import {arrayRemove, collection, deleteDoc, doc, onSnapshot, updateDoc} from "firebase/firestore"
import { onValue, ref ,update, set, get} from "firebase/database";
import { async } from "@firebase/util";


export const RoomPage = (props) => {
    const {roomId}= useParams();
    const [roomData, setRoomData] = useState(null);
    const user = auth.currentUser;

    //check if user is authenticated
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                // User is not signed in.              
                alert("You need to sign in to access this page");
                //navigate(`/`);
                window.location.href = "/"
            }
        });
    })    


    useEffect(() => {
        const roomRef = collection(firestore,`rooms`);
        const roomDocRef = doc(roomRef, roomId);
        console.log("roomId="+ roomId);
        const unsubscribe = onSnapshot(roomDocRef, (doc) => {
            console.log("doc="+ doc);
            if (doc.exists) {
                setRoomData(doc.data());
                console.log("room found")
            } else{
                alert("room not found");
            }
        });
        return () => {
            unsubscribe();
        };
    },[roomId]);


    useEffect(() => {
        const cleanup = () => {
            const user = auth.currentUser;
            if (user) {
                const userRef = doc(firestore, `rooms`, roomId, `participants`, user.uid);
                deleteDoc(userRef)
                .then(() => {
                    console.log(`User removed from list`);
                }).catch((error) =>{
                    console.log(`Error moving user from list:`, error);
                });
            }
        };



    // Handle the signout event
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (!user){
            cleanup();
        }
    });


    //Handle window unload event
    const handleWindowUnload = () =>{
        cleanup();
    };
    window.addEventListener(`beforeunload`, handleWindowUnload);
    
    return () => {
        unsubscribe();
        //removeParticipant();
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


    return (
        <div className={SessionCSS.mainContainer}>
            <h3 className={SessionCSS.h3}>Room-page under construction</h3>
            <button onClick={handleSignOut}>Signout</button>
            
            
        </div>
    );
};

