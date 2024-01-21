'use client'
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app"
import GoogleButton from "react-google-button";

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
const provider = new GoogleAuthProvider();

const handleSignInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // Handle the authentication success
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      // You can also navigate to another page or update the UI here
    })
    .catch((error) => {
      // Handle the authentication error
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      // You can display an error message to the user or log it
    });
};

export default function Home()
{
  return (
    <main className = "flex min-h-screen flex-col items-center justify-between p-24 bg-gray-200">
      <div className="grid z-10 max-w-5xl w-full items-center justify between font-mono text-sm lg:flex">
        <div className="content-center mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <h1 className="text-lg text-center font-semibold">
              Sign in with one of the following services:
          </h1>
        </div>
        <div className="py-4 object-center">
          <GoogleButton onClick={handleSignInWithGoogle}>Sign in with Google</GoogleButton>
        </div> 
      </div>
    </main>
  )
}
