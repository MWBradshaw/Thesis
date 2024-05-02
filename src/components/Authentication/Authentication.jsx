import { auth, googleProvider, db } from "../../config/firebase.js";
import { createUserWithEmailAndPassword, signInWithRedirect, signOut } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import './Authentication.css'
import Logo from "../../../public/assets/icons/Logo.png";
        
const Authentification = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const profilesCollectionRef = collection(db, "profiles");

    useEffect(() => {
        const getProfileList = async () => {
            try {
            const data = await getDocs(profilesCollectionRef);
            const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
            console.log(filteredData);
            } catch(err) {
                console.error(err);
            }
        }
        getProfileList();
      }, [])
    


    const signIn = async () => {
        try {
        await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.error(err)
        }
    }

    // const signInWithGoogle = async () => {
    //     try {
    //     await signInWithRedirect(auth, googleProvider)
    //     } catch (err) {
    //         console.error(err)
    //     }
    // }

    // const logOut = async () => {
    //     try {
    //     await signOut(auth)
    //     } catch (err) {
    //         console.error(err)
    //     }
    // }

    return(
        <div id="authentication-container">
            <div id="logo-container">
                <img id="logo" src={Logo} alt="The Health Report Logo" /> 
                <h2 id="logo-text">The Health Report</h2>
            </div>

            <div id="authentication-input-container">
                <input className="authentication-input" placeholder="E-mail Address" onChange={(e) => setEmail(e.target.value)}></input>
                <input className="authentication-input" placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}></input>
                <button id="authentication-sign-in" onClick={signIn}>Sign In</button>
            </div>

            {/* <button onClick={logOut}>Log Out</button> */}
        </div>
    )
}

export default Authentification;