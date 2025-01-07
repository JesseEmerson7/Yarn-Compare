import Image from "next/image";
import Link from "next/link";

//Home will be a login page to login and register an account untill a splash screen is created
export default function Home() { 
  return (
   <div id="height100" className=" flex flex-col h-full items-center justify-center mt-36">
    <h2>Welcome to Yarn Compare</h2>
    <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
    <input type="text" placeholder="Password" className="input input-bordered w-full max-w-xs" />
    <button className="btn">Login</button>
   </div>
    
  );
}
