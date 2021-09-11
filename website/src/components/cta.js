import React from "react";

import shopingCartLarge from "../images/shoping-cart-1280.png";
import shopingCartMedium from "../images/shoping-cart-760.png";
import zmLogo from "../images/zm-logo.png";


function CTA() {

  return (
    <section className="pt-12 mb-12 zm-background">

      <div className="w-full">
        <img className="w-full h-full"
          srcSet={`${shopingCartMedium} 768w, ${shopingCartLarge} 1280w`}
          sizes="(min-width: 1080px) 464px, (min-width: 640px)"
          src={shopingCartMedium}/>
      </div>

      <div className="mt-10 pt-10 flex flex-col text-center">

        <div className="self-center mx-6">
          <img className="mb-10" src={zmLogo}/>
        </div>

        <div className="mb-16 md:px-28 px-6">
          <h2 className="mb-8 text-gray-800 text-4xl">¡UN LUGAR PARA CRECER!</h2>

          <p className="text-gray-700 text-2xl font-myriad-pro">
            En <span className="font-extrabold">Zona Marketera</span> somos un equipo de profesionales creativos y 
            comprometidos en dar lo maximo para que tu puedas cumplir tus objetivos. 
            Dejamos tu MARCA en la ZONA.
          </p>
        </div>
      </div>

{/*      <form action="">
        <button type="submit"
          className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">Action!</button>
      </form>*/}

    </section>
  );
}


export default CTA;