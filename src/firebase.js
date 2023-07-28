// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCcVlcmF2hqnV2ktECvtjoIHfMNg62fkg",
  authDomain: "linkedin-clone-7ce55.firebaseapp.com",
  projectId: "linkedin-clone-7ce55",
  storageBucket: "linkedin-clone-7ce55.appspot.com",
  messagingSenderId: "566329275903",
  appId: "1:566329275903:web:38057e930565585558a3ca",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
