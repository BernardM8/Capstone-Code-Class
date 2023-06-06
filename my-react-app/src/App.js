import React, { useState } from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getDatabase, ref } from "firebase/database";
import { getFirestore } from 'firebase/firestore';
//import logo from './logo.svg';
import './App.css';
import {Login} from "./Login";
import {Register} from "./Register";
import {Home} from "./Home";
import {About} from "./About";
import {Session} from "./Session";
import {RoomPage} from "./Room";


var firebaseConfig = {
  apiKey: "AIzaSyD3M9j2pGKraAnDOHOx0JdZOvblyj-84x4",
  authDomain: "capstone-ide.firebaseapp.com",
  databaseURL: "https://capstone-ide-default-rtdb.firebaseio.com",
  projectId: "capstone-ide",
  storageBucket: "capstone-ide.appspot.com",
  messagingSenderId: "402917015039",
  appId: "1:402917015039:web:98a9c4b13ea95de44fbbca",
  measurementId: "G-Z3ECK6ZW3K"
};

// Initialize Firebase & variables
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const database = getDatabase(app)
export const firestore = getFirestore(app);

/*export const isAuthenticated = () => {
  return auth.currentUser !== null;
}*/

function App() {
  const [currentForm, setCurrentForm] = useState(`login`);
  const toggleForm = (formName) =>{
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={currentForm === "login" ? <Login onFormSwitch={toggleForm}/>: <Register onFormSwitch={toggleForm}/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Session" element={<Session/>}/>
          <Route path="/Room/:roomId" Component={RoomPage}/>
        </Routes>       
      </BrowserRouter>
      {/*currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>*/}
    </div>
  );
}

export default App;
