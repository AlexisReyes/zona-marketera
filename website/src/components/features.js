import React from "react";

import webLarge from "../images/web-1080.jpg";
import webMedium from "../images/web-720.jpg";
import webSmall from "../images/web-480.jpg";
import vloggerLarge from "../images/vlogger-1080.jpg";
import vloggerMedium from "../images/vlogger-720.jpg";
import vloggerSmall from "../images/vlogger-480.jpg";

function Features() {
    return (
      <section className="bg-white border-b py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Servicios digitales</h2>
          <div className="w-full mb-4">   
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
        
          <div className="flex flex-wrap font-myriad-pro">
            <div className="w-5/6 sm:w-1/2 p-6 font-myriad-pro">
              <h3 className="text-4xl text-gray-800 font-bold leading-none mb-3">Estrategia digital</h3>
              <p className="text-gray-600 mb-8">Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps.<br /><br />
              </p>
            </div>
            <div className="w-full sm:w-1/2 p-6">
              <img className="w-full sm:h-64 mx-auto"
                srcSet={`${webSmall} 280w, ${webMedium} 768w, ${webLarge} 1280w`}
                sizes="(min-width: 1080px) 464px, (min-width: 640px) calc(45.71vw - 21px), calc(100vw - 48px)"
                src={webSmall}/>
            </div>
          </div>

          <div className="flex flex-wrap flex-col-reverse sm:flex-row font-myriad-pro">   
            <div className="w-full sm:w-1/2 p-6">
              <img className="w-full sm:h-64 mx-auto"
                srcSet={`${vloggerSmall} 300w, ${vloggerMedium} 768w, ${vloggerLarge} 1280w`}
                sizes="(min-width: 1080px) 464px, (min-width: 640px) calc(45.71vw - 21px), calc(100vw - 48px)"
                src={vloggerSmall}/>
            </div>
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <div className="align-middle">
                <h3 className="text-4xl text-gray-800 font-bold leading-none mb-3">Creación de contenido</h3>
                <p className="text-gray-600 mb-8">
                  Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.<br /><br />
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
}

export default Features;