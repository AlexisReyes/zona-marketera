import React from "react";
import heroLarge from "../images/portada-lg.png";
import heroMedium from "../images/portada-md.png";
import heroSmall from "../images/portada-sm.png";

import upperTexture from "../images/textura-portada-1.png";
import lowerTexture from "../images/textura-portada-2.png";

function Hero() {

  return (
    <div className="pt-24">


      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="w-full object-cover text-center relative cover-texture-1">

          <img className="w-full h-full z-50 cover-texture-1"
            srcSet={`${heroSmall} 480w, ${heroMedium} 760w, ${heroLarge} 1280w`}
            sizes="(min-width: 1540px) 1536px, (min-width: 1280px) 1280px, (min-width: 1040px) 1024px, (min-width: 780px) 768px, (min-width: 680px) 640px, calc(94.44vw + 17px)"
            src={heroSmall}/>

          <div className="absolute xl:left-28 xl:bottom-48 lg:left-16 lg:bottom-32 md:left-10 md:bottom-24 left-1.5 bottom-12">
            <button type="submit" className="bg-white lg:text-lg lg:py-2 lg:px-4 md:py-2.5 md:px-5 text-sm py-1 px-2 font-semibold text-gray-800 rounded-full shadow">Comienza hoy</button>
          </div>

        </div>
      </div>

    </div>
  );
}
export default Hero;