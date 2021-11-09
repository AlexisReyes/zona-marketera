import React, { useCallback, useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from 'emailjs-com';

function ContactForm() {

  const [validCaptcha, setValidCaptcha] = useState(false);
  const [expired, setExpired]           = useState(false);

  const [name, setName]           = useState('');
  const [email, setEmail]         = useState('');
  const [telephone, setTelephone] = useState('');
  const [comments, setComments]   = useState('');
  const inputStyle = "col-span-3 text-gray-600 rounded-md p-2 focus:ring-4 focus:ring-lime focus:ring-opacity-50 outline-none";

  emailjs.init(`${process.env.GATSBY_EMAILJS_USERID}`);

  const onChange = (value) => {
    setValidCaptcha(value);
    if (value === null) setExpired(!value);
  }

  const submitForm = event => {

    event.preventDefault();

    const templateParams = {
      from_name: name,
      to_name: `${process.env.GATSBY_EMAILJS_TO_NAME}`,
      message: comments,
      email: email,
      telephone: telephone
    };

    emailjs.send(`${process.env.GATSBY_EMAILJS_SERVICEID}`, `${process.env.GATSBY_EMAILJS_TEMPLATEID}`, templateParams)
      .then((result) => {
          alert("Hemos recibido tus comentarios, nuestro equipo se pondrá en contacto contigo.");
          setName('');
          setEmail('');
          setTelephone('');
          setComments('');
      }, (error) => {
         console.error('FAILED...', error);
      });
  }

  return (
    <form onSubmit={submitForm}>

      <div className="grid md:grid-cols-4 grid-cols-1 gap-y-4 text-2xl font-myriad-pro mx-6">

        <label className="pr-6 md:text-right text-left self-center text-gray-800 text-xl">Nombre:</label>
        <input type="text" className={inputStyle} value={name} onChange={(event) => setName(event.target.value)} placeholder="Nombre" required/>

        <label className="pr-6 md:text-right text-left self-center text-gray-800 text-xl">Correo:</label>
        <input type="email" className={inputStyle} value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Correo" required/>

        <label className="pr-6 md:text-right text-left self-center text-gray-800 text-xl">Telefono:</label>
        <input type="number" className={inputStyle} value={telephone} onChange={(event) => setTelephone(event.target.value)} placeholder="Telefono" required/>

        <label className="pr-6 md:text-right text-left self-center text-gray-800 text-xl" >Comentarios:</label>
        <textarea className={`${inputStyle} resize-none`} rows="6" value={comments} onChange={(event) => setComments(event.target.value)} required></textarea>

        <div className="self-center mb-4 lg:col-span-2 col-span-2">
          <ReCAPTCHA
            sitekey={`${process.env.GATSBY_RECAPTCHA_KEY}`}
            onChange={onChange}>
          </ReCAPTCHA>
        </div>

        <button type="submit" disabled={!validCaptcha} className="col-span-2 shadow-md bg-white disabled:cursor-not-allowed hover:opacity-80 disabled:opacity-60 text-gray-800 font-bold rounded-full my-6 py-4 px-8">Enviar</button>
      </div>
    </form>
  );
}

export default ContactForm;
