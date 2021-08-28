import React from "react";

function TitleCards() {

  return (
    <section className="bg-white border-b py-8">
      
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
      
        <h3 className="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800">Servicios</h3>
        <div className="w-full mb-4">   
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow ">
            <div className="flex flex-wrap no-underline hover:no-underline">

              <div className="w-full font-bold text-2xl text-center text-gray-800 my-4">Diseño</div>
              <ul className="px-4 py-8 text-xl text-gray-700">
                <li>- Logotipo</li>
                <li>- Manual de identidad</li>
                <li>- Documentos corporativos</li>
                <li>- Animación de</li>
              </ul>
            </div>
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div className="flex items-center justify-start">
              <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">Action</button>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <div className="flex flex-wrap no-underline hover:no-underline">

              <div className="w-full font-bold text-2xl text-center text-gray-800 my-4 mx-2">Estrategias de marketing digital</div>
              <ul className="px-4 py-8 text-xl text-gray-700">
                <li>- Logotipo</li>
                <li>- Manual de identidad</li>
                <li>- Documentos corporativos</li>
                <li>- Animación de</li>
              </ul>
            </div>
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div className="flex items-center justify-center">
              <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">Action</button>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow ">
            <div className="flex flex-wrap no-underline hover:no-underline">

              <div className="w-full font-bold text-2xl text-center text-gray-800 my-4">Diseño</div>
              <ul className="px-4 py-8 text-xl text-gray-700">
                <li>- Logotipo</li>
                <li>- Manual de identidad</li>
                <li>- Documentos corporativos</li>
                <li>- Animación de</li>
              </ul>
            </div>
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div className="flex items-center justify-end">
              <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">Action</button>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}

export default TitleCards;