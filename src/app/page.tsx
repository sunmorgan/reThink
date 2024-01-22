import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-evenly font-mono text-sm lg:flex">  
      </div>

      <div className="invert relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2">
        <Image
          className=""
          src="/ched.png"
          alt="chedulr Logo"
          width={360}
          height={72}
          priority
        />
      </div>

      <div className="flex flex-row mtmb-34 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-center justify-evenly"> 
        <Link
          href=""
          className= "group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            What we do{" "} 
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about chedulr 
          </p>
        </Link>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "} 
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about the capabilities of chedulr!
          </p>
        </a>

        <Link
          href="/auth"        
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Sign Up/Log In{" "} 
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Sign up with chedulr using trusted services.
          </p>
        </Link>
      </div>
    </main>
  );
}
