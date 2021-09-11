import React from "react";

function ContactForm() {

  return (
    <form id="contact" action="">
      <div className="flex flex-col content-around text-2xl font-myriad-pro md:mx-12 mx-6">

        <div className="flex justify-evenly mb-4">
          <label className="self-center text-gray-800 w-1/4 text-xl">Nombre:</label>
          <input type="text" className="form-input text-gray-600 w-3/4 focus:ring-lime" placeholder="Nombre" />
        </div>

        <div className="flex justify-evenly mb-4">
          <label className="self-center text-gray-800 w-1/4 text-xl">Correo:</label>
          <input type="text" className="form-input text-gray-600 w-3/4 focus:ring-lime" placeholder="Correo" />        
        </div>

        <div className="flex justify-evenly mb-4">
          <label className="self-center text-gray-800 w-1/4 text-xl">Telefono:</label>
          <input type="text" className="form-input text-gray-600 w-3/4 focus:ring-lime" placeholder="Telefono" />
        </div>

        <div className="flex justify-evenly mb-4">
          <label className="self-center text-gray-800 w-1/4 text-xl">Comentarios:</label>
          <textarea className="form-textarea text-gray-600 w-3/4 focus:ring-lime" rows="6"></textarea>
        </div>

        <button type="submit" className="shadow-md bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8">Enviar</button>
      </div>
    </form>
  );
}

export default ContactForm;