import React, {useState} from "react";
import {browserSessionPersistence, setPersistence,signInWithEmailAndPassword} from "firebase/auth";
import {ref, update} from "firebase/database";
import {auth, database } from "./App";


export const Login = (props) => {
    const [email, setEmail] = useState(``);
    const [pass, setPass] = useState(``);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        //console.log(pass);

        setPersistence(auth, browserSessionPersistence)
        .then(() => {
            signInWithEmailAndPassword(auth, email, pass)
                .then((userCredential) => {
                    var user = userCredential.user;
                    //console.log(`userlogged in:`,user);
                        
                    update(ref(database,'users/' + user.uid),{
                        last_login : Date.now()
                    }).then(()=>{
                        //console.log(`userlogged in:`,user);
                        alert('Loggin in successful! ')
                        window.location.href = "/Home"
                    })})
        }).catch((error) => {
            var error_code = error.code
            var error_message = error.message
            alert(error_message)
        })
    }

    return (
        <div className="auth-form-container">
            <h2>LOGIN</h2>
            <p>Please enter your login and password</p>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor= "email">Email</label>
                <input value ={email} onChange={(e)=> setEmail(e.target.value)} type="email" id="email" placeholder="***@*****.com"/>
                <label htmlFor= "password">Password</label>
                <input value ={pass} onChange={(e)=> setPass(e.target.value)} type="password" id="password" placeholder="*******"/>
                <button className="submit-btn" type = "submit">Login</button>
            </form> 
            <button className="link-btn" onClick={()=> props.onFormSwitch(`register`)}>Don`t have an account? Register here</button>
        </div>
    )
}
