import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    // css for the navbar background colour
    <div className=" justify-center bg-black bg-cover bg-center relative h">
      
      <header>
        {/*css for the navbar container*/}
        <div className="container mx-auto flex flex-wrap p-0 flex-col md:flex-row items-center ">
          {/*css for the navbar logo text*/}
          <a className="flex title-font font-medium justify-center items-center mb-4 md:mb-0">
           {/*css for the home page image*/}
            <img
              src="/logo-01.jpg"
              alt="logo"
              className="w-10 h-10 rounded-full"
            />
            {/*css for the navbar logo text*/}
            <span className="ml-3 text-xl text-white font-bold">
              A.K FOOD MOMENT RESTAURANT
            </span>
          </a>
          

          {/*css for the navbar links*/}
          <nav
            className="flex flex-row justify-center gap-1
        md:mr-auto md:ml-96"
          >
            <Link
              href="/"
              className="ml-2 mr-5 text-white hover:underline hover:text-blue-600 font-bold"
            >
              home
            </Link>
            <br />
            <Link
              href="/about"
              className="mr-5 text-white hover:underline hover:text-blue-600 font-bold"
            >
              about
            </Link>
            <br />
            <Link
              href="/deals"
              className="mr-5 text-white hover:underline hover:text-blue-600 font-bold"
            >
              deals
            </Link>
            <br />
            <Link
              href="/contact-us"
              className="mr-5 text-white hover:underline hover:text-blue-600 font-bold"
            >
              contact
            </Link>
            <Link
              href="/order "
              className="mr-5 text-white hover:underline hover:text-blue-600 font-bold"
            >
              ordernow
            </Link>
          </nav>

{/*for button*/}

<div>
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-red-400 rounded text-base mt-4 md:mt-0"> 
                login
            </button>
          </div>
    </div>
    
      </header>
      </div>
  );
}

