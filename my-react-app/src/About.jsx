import React, {useState} from "react";
import HomeCSS from "./home.module.css";

export const About = (props) => {
    
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
            <p className={HomeCSS.p1}>About </p>
            <p className={HomeCSS.aboutp2}>
                Code-Class is a online platform designed to share the coding experience with multiple people. 
            The platform consists of session/rooms where goups of individuals can join a coding session, and code on our online IDE.
            Individuals can collaborate, assign problems, or solve coding problems using our platform.

            </p>
        </div>
    )
}