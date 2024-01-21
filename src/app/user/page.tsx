'use client'
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLxHL1vxPOHmJC93QpjVb_Bx1Y47mqha8",
  authDomain: "chedulr.firebaseapp.com",
  projectId: "chedulr",
  storageBucket: "chedulr.appspot.com",
  messagingSenderId: "854375173485",
  appId: "1:854375173485:web:ae6ed5741ed1635b3e5e64",
  measurementId: "G-0GLM1M3ZJV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const user = auth.currentUser;

export default function home()
{ 
    return (
    <main>
        <div>
            <h1>Welcome, {user?.displayName}</h1>
        </div>
    </main> 
   )
}