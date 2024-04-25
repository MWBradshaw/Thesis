import { auth, googleProvider, db } from "../../config/firebase.js";
import { createUserWithEmailAndPassword, signInWithRedirect, signOut } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";

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

    const signInWithGoogle = async () => {
        try {
        await signInWithRedirect(auth, googleProvider)
        } catch (err) {
            console.error(err)
        }
    }

    const logOut = async () => {
        try {
        await signOut(auth)
        } catch (err) {
            console.error(err)
        }
    }

    return(
        <div>
            <input placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}></input>
            <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}></input>
            <button onClick={signIn}>Sign In</button>

            <button onClick={signInWithGoogle}>Sign In With Google</button>
            <button onClick={logOut}>Log Out</button>
        </div>
    )
}

export default Authentification;