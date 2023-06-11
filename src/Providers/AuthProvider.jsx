import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from '../firebase/firebase.config';

const provider = new GoogleAuthProvider();


export const AuthContext=createContext(null)

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    
    const [user, setUser]=useState(null)
    const [loading, setLoading]=useState(true)

    const signUp=(email, password)=>{
     return createUserWithEmailAndPassword(auth, email, password)
    }

    const login=(email,password)=>{
     return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin=()=>{
        return signInWithPopup(auth,provider)
    }

    //currently signIn user
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const logout=()=>{
        return signOut(auth)
    }

    const AuthInfo={
       user,
       loading,
       signUp,
       login,
       logout,
       googleLogin,

    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;