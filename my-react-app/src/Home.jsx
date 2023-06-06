import React, {useState} from "react";
import {browserSessionPersistence, setPersistence,onAuthStateChanged,getAuth} from "firebase/auth";
import {ref, update} from "firebase/database";
import {auth, database } from "./App";
import HomeCSS from "./home.module.css";

export const Home = (props) => {
    
    const handleSubmit = (e) => {
        e.preventDefault();

        var user = auth.currentUser;
        var userIDStr = "";
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in.
                console.log("user = " + user);
                console.log("user.uid = " + user.uid);
                userIDStr = user.uid;
            }
            else {
                // User is not signed in.
                console.log("user not signed in!");
                console.log("user = " + user);
                window.location.href = "/"
            }
        }).catch((error) => {
            var error_code = error.code
            var error_message = error.message
            alert(error_message)
        })
    }

    function handleClick(){
        window.location.href = `/`;
    }

    return (
        <div className={HomeCSS.mainContainer}>
            <h3 className={HomeCSS.h3}>CODE-CLASS</h3>
            <div class={HomeCSS.topnav} href = "Topnav.css">
                <a class="active" href="/Home">Home</a>
                <a href="/About">About</a>
                <a href="/Session">Session</a>
                <button className={HomeCSS.logoutBtn} onClick={handleClick}>Log out</button>
            </div>
            <p1 className={HomeCSS.p1}>Welcome to CODE-CLASS </p1>
            <p2 className={HomeCSS.p2}>
            The online platform to share your coding experience.
            </p2>
        </div>
    )
}