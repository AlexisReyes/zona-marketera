import React from "react";
import logo from "../images/logo-zona-marketera-50x50.png";

function Navigation() {

  return (
    <nav id="header" className="fixed w-full z-30 top-0 text-white bg-white shadow">

      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
          
        <div className="pl-4 flex items-center">
          <a className="toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl text-gray-800"  href="#"> 
            <img className="inline" src={logo} /> Zona Marketera
          </a>
        </div>

        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
          <div className="list-reset lg:flex justify-end flex-1 items-center">
            <button type="submit" id="navAction" className="mx-auto lg:mx-0 hover:underline font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 gradient text-white">
              Contacto
            </button>
          </div>
        </div>
      </div>
      
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
}

export default Navigation;