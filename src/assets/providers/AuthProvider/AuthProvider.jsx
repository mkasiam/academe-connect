import { GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";
import axios from "axios";



export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const createUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    } 
    const signInUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }
    const signInWithGithub = () =>{
        setLoading(true);
        return signInWithPopup(auth,githubProvider);
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            // If user exist then issue a token
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email : userEmail};

            if(currentUser){
                axios.post("http://localhost:5000/jwt",loggedUser,{withCredentials:true})
                .then(res => {
                    console.log(res.data);
                })

            }
            else{
                axios.post("http://localhost:5000/logout",loggedUser,{withCredentials:true})
                .then(res => {
                    console.log(res.data);
                })
            }
            setUser(currentUser);
            setLoading(false);
        }) 
        return ()=>{
            unSubscribe();
        }
    },[])
    const authInfo = {user,loading,createUser,signInUser,signInWithGoogle,signInWithGithub,logOut};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children:PropTypes.node
}
export default AuthProvider;