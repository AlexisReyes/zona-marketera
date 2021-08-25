import React from "react";
import heroImg from "../images/portada-zona-marketera.jpg";

function Hero() {

  return (
    <div className="pt-24">

      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">

        <div className="w-full object-cover py-6 text-center">
          <img className="w-full z-50" src={heroImg} />
        </div>
        <button type="submit" className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">Contacto</button>
      </div>
    </div>
  );
}
export default Hero;