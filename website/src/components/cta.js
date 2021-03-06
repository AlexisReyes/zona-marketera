import React from "react";
import ContactForm from "../components/contact-form";


import zmLogo from "../images/zm-logo.png";


function CTA() {

  return (
    <section className="grid pt-12 mb-12 zm-background">

      <div className="mt-10 pt-10 flex flex-col text-center place-self-center">

        <div className="self-center mx-6">
          <img className="mb-10" src={zmLogo}/>
        </div>

        <div className="mb-16 md:px-28 px-6">
          <h2 className="mb-8 text-gray-800 text-4xl">¡UN LUGAR PARA CRECER!</h2>

          <p className="text-gray-700 text-2xl font-myriad-pro">
            En <span className="font-extrabold">Zona Marketera</span> somos un equipo de profesionales creativos y 
            comprometidos en dar lo maximo para que tu puedas cumplir tus objetivos. 
            Dejamos tu MARCA en la ZONA.
          </p>
        </div>
      </div>

      <div id="contact" className="xl:w-3/4 w-full lg:px-28 md:px-6 place-self-center">
        <ContactForm></ContactForm>
      </div>

    </section>
  );
}

export default CTA;