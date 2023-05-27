import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const authContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('Current User', currentUser);
            setLoading(false)
            if (currentUser && currentUser.email) {
                const jwtUser = {
                    email: currentUser.email,
                }
                fetch(`http://localhost:7000/jwt`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(jwtUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log("JWT is Running Baby: ", data);
                        // set in localstorage second best
                        localStorage.setItem("jwt-token", data.token)
                    })
            }
            else {
                localStorage.removeItem("jwt-token")
            }

        })
        return () => {
            return unsubcribe;
        }
    }, [])

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        user,
        logOut,
        loading,
        createUser,
        logIn
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;