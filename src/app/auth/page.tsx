'use client'
import { getAuth, GoogleAuthProvider, signInWithPopup, OAuthProvider, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app"
import GoogleButton from "react-google-button";
import AppleLogin from 'react-apple-login'
import Image from "next/image";
import { useRouter } from "next/navigation";

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

const handleSignInWithApple = () => {
  const provider = new OAuthProvider('apple.com');
  
  // Single email
  provider.addScope('email');
  provider.addScope('name');

  signInWithPopup(auth, provider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;

    // Apple credential
    const credential = OAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
    const idToken = credential.idToken;

    // IdP data available using getAdditionalUserInfo(result)
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The credential that was used.
    const credential = OAuthProvider.credentialFromError(error);

    // ...
  });
}

export default function Home()
{
  const router = useRouter();
  const handleSignInWithGoogle = () => { 
    const provider = new GoogleAuthProvider();
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
    signedIn();
  };
 
  const signedIn = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      router.push('/user')
    } else {
      // User is signed out
      // ...
    }
  });
}

  return (
    <main className = "flex min-h-screen flex-col items-center justify-start p-24 bg-gray-100">
      <Image
          className="dark:invert"
          src="/ched.png"
          alt="chedulr Logo"
          width={360}
          height={72}
          priority
        />
      <div className="flex flex-col z-10 max-w-md w-full items-center justify between font-mono text-sm border-solid border-black border-2 rounded-md bg-white transition-colors hover:bg-gray-300"> 
        <div className="content-center mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
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
