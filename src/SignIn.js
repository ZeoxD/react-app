import React from 'react'
import firebase from './firebase'
import { FaGoogle } from 'react-icons/fa' 

function SignIn(props) {

    /*const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);

    }*/

    return (
        <div className="signin-division">
            <button className="btn-sign-in" onClick={()=>props.setUser(!props.user)}><span className="btn-signin-icon"><FaGoogle/></span>Sign In with Google</button>
            <h3>Click to Authenticate with your Google Account.</h3>
        </div>
    )
}

export default SignIn
