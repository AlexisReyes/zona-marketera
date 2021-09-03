import React from "react";

import webLarge from "../images/web-1080.jpg";
import webMedium from "../images/web-720.jpg";
import webSmall from "../images/web-480.jpg";
import vloggerLarge from "../images/vlogger-1080.jpg";
import vloggerMedium from "../images/vlogger-720.jpg";
import vloggerSmall from "../images/vlogger-480.jpg";

function Features() {
    return (
      <section className="bg-stone border-b font-myriad-pro">
        <div className="container max-w-5xl mx-auto">

          <div className="flex flex-wrap">
            <div className="md:w-1/2 w-full">
              <img className="w-full h-full"
                srcSet={`${webSmall} 280w, ${webMedium} 768w, ${webLarge} 1280w`}
                sizes="(min-width: 1080px) 464px, (min-width: 640px) calc(45.71vw - 21px), calc(100vw - 48px)"
                src={webSmall}/>
            </div>
            <div className="w-full h-full md:w-1/2 p px-8 pt-8">
              <h3 className="text-4xl font-bold leading-none mb-3">Fotografia Comercial</h3>
              <h3 className="text-4xl font-bold leading-none mb-3">Fotografia Ecommerce</h3>
              <p className="md:mb-8 text-xl">Creamos contenido unico para comunicar de la mejor manera tu producto o servicio<br/><br/></p>
              <div className="flex-none mt-auto rounded-b rounded-t-none overflow-hidden pby-8">
                <div className="flex items-center justify-center">
                  <button className="mx-auto lg:mx-0 hover:underline bg-white text-stone font-bold rounded-full sm:my-2 my-6 py-4 px-8 tracking-widest">CONOCE MAS</button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-full h-full md:w-1/2 p px-8 pt-8">
              <h3 className="text-4xl font-bold leading-none mb-3">Video Corporativo</h3>
              <h3 className="text-4xl font-bold leading-none mb-3">Video Comercial</h3>
              <p className="md:mb-8 text-xl">Captura la escencia de tu marca y atrapa la atencion de tu cliente atravéz de contenido RELEVANTE<br /><br /></p>
              <div className="flex-none mt-auto rounded-b rounded-t-none overflow-hidden pby-8">
                <div className="flex items-center justify-center">
                  <button className="mx-auto lg:mx-0 hover:underline bg-white text-stone font-bold rounded-full sm:my-2 my-6 py-4 px-8 tracking-widest">CONOCE MAS</button>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <img className="w-full h-full"
                srcSet={`${vloggerSmall} 300w, ${vloggerMedium} 768w, ${vloggerLarge} 1280w`}
                sizes="(min-width: 1080px) 464px, (min-width: 640px) calc(45.71vw - 21px), calc(100vw - 48px)"
                src={vloggerSmall}/>
            </div>

          </div>
        </div>
      </section>
    );
}

export default Features;