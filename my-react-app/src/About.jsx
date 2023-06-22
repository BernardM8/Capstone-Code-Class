import React, {useState} from "react";
import HomeCSS from "./home.module.css";

export const About = (props) => {
    
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
                <p className={HomeCSS.p1}>About </p>
                <p className={HomeCSS.aboutp2}>
                    Code-Class is a online platform designed to share the coding experience with multiple users in a classroom environment. 
                The platform consists of session/rooms where goups of individuals can join a coding session, and code on our online IDE.
                Individuals can collaborate, assign problems, or solve coding problems.
                </p>
                <button className="link-btn" onClick={handleClickRegister}>Don`t have an account? Register here</button>
            </div>
            <div className={HomeCSS.lowercontainer}></div>
        </div>
    )
}