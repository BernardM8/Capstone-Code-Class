import React, {useState} from "react";
import {onAuthStateChanged,getAuth} from "firebase/auth";
import {auth, database } from "./App";
import HomeCSS from "./home.module.css";

export const Home = (props) => {
    
    const handleSubmit = (e) => {
        e.preventDefault();

        var user = auth.currentUser;
        //var userIDStr = "";
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in.
                //console.log("user = " + user);
                //console.log("user.uid = " + user.uid);
                
            }
            else {
                // User is not signed in.
                //console.log("user not signed in!");
                //console.log("user = " + user);
                window.location.href = "/"
            }
        }).catch((error) => {
            var error_code = error.code
            var error_message = error.message
            alert(error_message)
        })
    }

    function handleClickLogin(){
        window.location.href = `/Login`;
    }

    function handleClickRegister(){
        window.location.href = `/Register`;
    }

    return (
        <div className={HomeCSS.mainContainer}>
            <h3 className={HomeCSS.h3}>CODE-CLASS</h3>
            <div className={HomeCSS.topnav} href = "Topnav.css">
                <a className ={HomeCSS.a1} href="/">Home</a>
                <a className ={HomeCSS.a2} href="/About">About</a>
                <button className={HomeCSS.logInBtn} onClick={handleClickLogin}>Log In</button>
                <button className={HomeCSS.logInBtn} onClick={handleClickRegister}>Register</button>
            </div>
            <div className={HomeCSS.innercontainer}>
                <p className={HomeCSS.p1}>Welcome to CODE-CLASS </p>
                <p className={HomeCSS.p2}>
                The online platform to share your coding experience.
                </p>
                <button className="link-btn" onClick={handleClickRegister}>Don`t have an account? Register here</button>
            </div>
        </div>
    )
}