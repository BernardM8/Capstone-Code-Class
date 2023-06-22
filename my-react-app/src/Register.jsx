import React, {useState} from "react";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {ref, set} from "firebase/database";
import {auth, database } from "./App";

export const Register = (props) => {
    const [email, setEmail] = useState(``);
    const [pass, setPass] = useState(``);
    const [name, setName] = useState(``);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);

        // Move on with Auth
        createUserWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
            var user = userCredential.user;
        
            set(ref(database,'users/'+ user.uid ),{
                email : email, 
                full_name : name,
                last_login : Date.now(),
                //account_type : act_type
            }).then(()=>{
                set(ref(database,name),{
                    codeCompiler : "",
                    codeEditor : "", 
                    codeLanguage :"",
                    codeTrigger :"", 
                }).then(()=>{
                    alert('User Created!!');
                    window.location.href = "/Session";
                })
            }).catch((error) => {
                var error_code = error.code;
                var error_message = error.message
                alert(error_message);
            })
    })}

    function handleClickLogin(){
        window.location.href = `/Login`;
    }


    return (
        <div className="auth-form-container">
            <h2>Registration Form</h2>
            <p>Please fill out form</p>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor= "name">Full name</label>
            <input value ={name} onChange={(e)=> setName(e.target.value)}type="name" id="name" placeholder="full Name"/>     
            <label htmlFor= "email">email</label>
            <input value ={email} onChange={(e)=> setEmail(e.target.value)}type="email" id="email" placeholder="***@*****.com"/>
            <label htmlFor= "password">Password</label>
            <input value ={pass} onChange={(e)=> setPass(e.target.value)} type="password" id="password" placeholder="*******"/> 
                <button className="submit-btn" type = "submit">Register</button>
            </form> 
            <button className="link-btn" onClick={handleClickLogin}>Already have an account? Login here</button>
        </div>
    )
}