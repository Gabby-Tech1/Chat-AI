import {createContext, useContext, useEffect, useState} from 'react'
import {auth, provider} from "../Firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, onAuthStateChanged } from 'firebase/auth'


const AuthContext = createContext()

export function AuthContextProvider({children}){

    const [user, setUser] = useState({})

    function signUp(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
        
    }

    function logIn(email,password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut(){
        return signOut(auth)
    }

    function googleSign(){
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })

        return () => {
            unsubscribe()
        }
    })

    return(
        <AuthContext.Provider value={{signUp, logIn, logOut, googleSign, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth(){
    return useContext(AuthContext)
}