// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,getAuth, signInWithPopup} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAsoxNb_M4N5-KOkl61OXJuKr4WNvBQHrY",
    authDomain: "react-js-blog-website-a28ec.firebaseapp.com",
    projectId: "react-js-blog-website-a28ec",
    storageBucket: "react-js-blog-website-a28ec.appspot.com",
    messagingSenderId: "1038117731523",
    appId: "1:1038117731523:web:1803b03dbffd34a7d8b676"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//google auth
const provider= new GoogleAuthProvider();

const auth=getAuth();

export const authWithGoogle=async()=>{
    let user=null;
    await signInWithPopup(auth,provider)
    .then((result)=>{
        user=result.user
    })
    .catch((err)=>{
        console.log(err);
    })
}