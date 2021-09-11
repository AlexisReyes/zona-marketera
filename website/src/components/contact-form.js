import React, { useCallback, useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function ContactForm() {

  const [validCaptcha, setValidCaptcha] = useState(false);
  const [expired, setExpired]           = useState(false);
  const inputStyle = "col-span-3 text-gray-600 rounded-md p-2 focus:ring-4 focus:ring-lime focus:ring-opacity-50 outline-none";

  const onChange = (value) => {
    setValidCaptcha(value);
    if (value === null) setExpired(!value);
  }

  const submitForm = () => {

  }

  return (
    <form onSubmit={submitForm}>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-y-4 text-2xl font-myriad-pro mx-6">

        <label className="pr-6 md:text-right text-left self-center text-gray-800 text-xl">Nombre:</label>
        <input type="text" className={inputStyle} placeholder="Nombre" required/>

        <label className="pr-6 md:text-right text-left self-center text-gray-800 text-xl">Correo:</label>
        <input type="text" className={inputStyle} placeholder="Correo" required/>

        <label className="pr-6 md:text-right text-left self-center text-gray-800 text-xl">Telefono:</label>
        <input type="text" className={inputStyle} placeholder="Telefono" required/>

        <label className="pr-6 md:text-right text-left self-center text-gray-800 text-xl" >Comentarios:</label>
        <textarea className={`${inputStyle} resize-none`} rows="6" required></textarea>

        <div className="self-center mb-4 lg:col-span-2 col-span-2">
          <ReCAPTCHA
            sitekey="6LcwGV4cAAAAADaFkWfPgB6jVyo1ktF2juXueZxa"
            onChange={onChange}>
          </ReCAPTCHA>
        </div>

        <button type="submit" disabled={!validCaptcha} className="col-span-2 shadow-md bg-white disabled:cursor-not-allowed hover:opacity-80 disabled:opacity-60 text-gray-800 font-bold rounded-full my-6 py-4 px-8">Enviar</button>
      </div>
    </form>
  );
}

export default ContactForm;
