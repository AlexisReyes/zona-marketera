import React, { useState } from "react";
import { Link } from "gatsby";

import logo from "../images/logo-nav-zona-marketera.png";

function Navigation() {

  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav id="header" className="fixed w-full z-30 top-0 text-white bg-white">

      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">

        <div className="pl-4 flex items-center">
          <Link to="/" className="toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl text-gray-800"> 
            <img className="inline" src={logo} />
          </Link>
        </div>

        <div className="lg:hidden">
          <button onClick={() => toggleExpansion(!isExpanded)}>
            <svg xmlns="http://www.w3.org/2000/svg" className={`${ isExpanded ? `hidden` : `block` } h-8 w-8 m-2 text-gray-700`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className={`${ isExpanded ? `block` : `hidden` } h-8 w-8 m-2 text-gray-700`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className={`${ isExpanded ? `block` : `hidden` } w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 lg:bg-transparent text-black p-4 lg:p-0 z-20`}>
          <div className={`${ isExpanded ? `flex flex-col text-right` : `lg:flex justify-end flex-1 items-center`}`}>
            <Link className="mx-6 font-myriad-pro lg:mt-0 mt-4 tracking-widest" to="/">INICIO</Link>
            <Link className="mx-6 font-myriad-pro lg:mt-0 mt-4 tracking-widest" to="/services">SERVICIOS</Link>
            <Link className="mx-6 font-myriad-pro lg:mt-0 mt-4 tracking-widest" to="/">NOSOTROS</Link>
            <a className="mx-6 font-myriad-pro lg:mt-0 mt-4 tracking-widest" href="#contact">CONTACTANOS</a>
          </div>
        </div>
      </div>

    </nav>
  );
}

export default Navigation;