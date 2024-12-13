// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDTzygjxYY1zlrAUwaj5RPxQ4tVganlL7Y",
    authDomain: "grievance-d003d.firebaseapp.com",
    projectId: "grievance-d003d",
    storageBucket: "grievance-d003d.appspot.com",
    messagingSenderId: "430389578295",
    appId: "1:430389578295:web:400846e5b04d6675338db2",
    measurementId: "G-HDXC4YHZLS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const database = getFirestore(app);