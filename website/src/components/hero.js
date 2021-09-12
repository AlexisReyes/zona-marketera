import React from "react";
import { Link } from "gatsby";

function Hero(props) {

  return (
    <div className="pt-24">

      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="w-full object-cover text-center relative cover-texture-1">

          <img className="w-full h-full z-50 cover-texture-1"
            srcSet={`${props.images.small} 480w, ${props.images.medium} 760w, ${props.images.large} 1280w`}
            sizes="(min-width: 1540px) 1536px, (min-width: 1280px) 1280px, (min-width: 1040px) 1024px, (min-width: 780px) 768px, (min-width: 680px) 640px, calc(94.44vw + 17px)"
            src={props.images.small}/>

          <div className="absolute xl:left-28 xl:bottom-48 lg:left-16 lg:bottom-32 md:left-10 md:bottom-24 left-1.5 bottom-12">
            <Link to={props.button.to} className="bg-white lg:text-lg lg:py-2 lg:px-4 md:py-2.5 md:px-5 text-sm py-1 px-2 font-semibold text-gray-800 rounded-full shadow">
              {props.button.text}
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Hero;