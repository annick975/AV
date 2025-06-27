 import React from "react";
 import Link from "next/link";

 export default function Footer() {
   return (
     <footer className="w-full bg-white border-t border-green-100 py-6 mt-16">
       <div className="max-w-6xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center text-sm text-green-800">
         <div>
           <span className="font-bold">AirVolt</span> &copy;{" "}
           {new Date().getFullYear()}
           <span className="mx-2">·</span>
           <span>
             Empowering Africa with clean, youth-led energy innovation.
           </span>
         </div>
         <div className="flex gap-4 justify-center">
           <Link href="#" className="hover:underline text-blue-500">
             GitHub
           </Link>
           <Link href="#" className="hover:underline text-blue-500">
             LinkedIn
           </Link>
         </div>
       </div>
     </footer>
   );
 }
