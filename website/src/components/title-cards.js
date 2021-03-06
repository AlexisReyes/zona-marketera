import React from "react";

import brandingImg  from "../images/service-1.jpg";
import marketingImg from "../images/service-2.jpg";
import webDesignImg from "../images/service-3.jpg";

function TitleCards() {

  return (
    <section className="bg-white py-8 sm:pb-16 pb-12 font-myriad-pro">
      
      <div className="container mx-auto flex flex-wrap pt-4 lg:pb-12">
      
        <h3 className="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800 font-roboto-slab">SERVICIOS</h3>
        <div className="w-full mb-4">   
          <p className="uppercase text-gray-800 text-center text-lg">
           Diseñamos y desarrollamos estrategias creativas para cada proyecto
          </p>
        </div>

        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow ">
            <div className="flex flex-wrap bg-lime h-full">
              <img className="w-full h-64" src={brandingImg} />
              <div className="w-full font-bold text-2xl px-4 my-2">Branding</div>
              <div className="p-4 text-xl">
                Creamos conceptos unicos que CONECTEN con tu negocio.
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <div className="flex flex-wrap bg-lime h-full">
              <img className="w-full h-64" src={marketingImg} />
              <div className="w-full font-bold text-2xl px-4 m-2">Marketing Digital</div>
              <div className="p-4 text-xl">
                ¡DEJA QUE TE ENCUENTREN! estar en medios digitales ya es una necesidad.
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow ">
            <div className="flex flex-wrap bg-lime h-full">
              <img className="w-full h-64" src={webDesignImg} />
              <div className="w-full font-bold text-2xl px-4 my-2">Diseño Web</div>
              <div className="p-4 text-xl">
                Brinda credibilidad a tu marca y hazte visible en los principales buscadores.
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden pby-8">
        <div className="flex items-center justify-center">
          <button className="mx-auto lg:mx-0 hover:underline bg-lime text-white font-bold rounded-full my-6 py-4 px-8 uppercase tracking-widest">Conoce mas</button>
        </div>
      </div>
    </section>
  );
}

export default TitleCards;