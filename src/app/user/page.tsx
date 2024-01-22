'use client'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import Image from "next/image";

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
    <main className="min-h-screen justify-start items-center">
        <div className="border-b border-black">
           <Image
                className="invert dark:invert-0" 
                src={"/ched.png"} 
                alt={"chedulr logo"}
                width = {120}
                height = {24}
                priority
           /> 
        </div> 
        <div className="dark:invert p-6">
            <h1>Welcome home, {user?.displayName}</h1>
        </div>
        <div className="grid p-20">
            <h1>h1</h1>
        </div> 
    </main> 
   )
}