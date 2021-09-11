import React, { useCallback, useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function ContactForm() {

  const [validCaptcha, setValidCaptcha] = useState(false);
  const [expired, setExpired]           = useState(false);

  const onChange = (value) => {
    setValidCaptcha(value);
    if (value === null) setExpired(!value);
  }

  const submitForm = () => {

  }

  return (
    <form onSubmit={submitForm}>
        <div className="flex flex-col content-around text-2xl font-myriad-pro md:mx-12 mx-6">

          <div className="flex justify-evenly mb-4">
            <label className="pr-6 text-right self-center text-gray-800 text-xl">Nombre:</label>
            <input type="text" className="text-gray-600 w-3/4 rounded-md p-2 focus:ring-4 focus:ring-lime focus:ring-opacity-50 outline-none" placeholder="Nombre" />
          </div>

          <div className="flex justify-evenly mb-4">
            <label className="pr-6 text-right self-center text-gray-800 text-xl">Correo:</label>
            <input type="text" className="text-gray-600 w-3/4 rounded-md p-2 focus:ring-4 focus:ring-lime focus:ring-opacity-50 outline-none" placeholder="Correo" />
          </div>

          <div className="flex justify-evenly mb-4">
            <label className="pr-6 text-right self-center text-gray-800 text-xl">Telefono:</label>
            <input type="text" className="text-gray-600 w-3/4 rounded-md p-2 focus:ring-4 focus:ring-lime focus:ring-opacity-50 outline-none" placeholder="Telefono" />
          </div>

          <div className="flex justify-evenly mb-4">
            <label className="pr-6 text-right self-center text-gray-800 text-xl">Comentarios:</label>
            <textarea className="text-gray-600 w-3/4 rounded-md p-2 focus:ring-4 focus:ring-lime focus:ring-opacity-50 outline-none" rows="6"></textarea>
          </div>

          <div className="flex justify-evenly mb-4">
            <ReCAPTCHA
              sitekey="6LcwGV4cAAAAADaFkWfPgB6jVyo1ktF2juXueZxa"
              onChange={onChange}>
            </ReCAPTCHA>
          </div>

          <button type="submit" disabled={!validCaptcha} className="shadow-md bg-white hover:opacity-80 disabled:opacity-60 text-gray-800 font-bold rounded-full my-6 py-4 px-8">Enviar</button>
        </div>
    </form>
  );
}

export default ContactForm;
