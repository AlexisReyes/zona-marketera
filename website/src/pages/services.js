import React from "react";

import CTA from "../components/cta";
import Hero from "../components/hero";
import Layout from "../components/layout";
import SEO from "../components/seo";

import heroLarge from "../images/portada-services-lg.png";
import heroMedium from "../images/portada-services-md.png";
import heroSmall from "../images/portada-services-sm.png";

import imageMedium from "../images/image-760.jpg";

import brandingText from "../images/branding-text.png";
import photographyText from "../images/photography-text.png";
import videoText from "../images/video-text.png";
import webDesignText from "../images/web-design-text.png";

function ServicesPage() {

  const servicesHeroImages = {
    small: heroSmall,
    medium: heroMedium,
    large: heroLarge
  }

  return (
    <Layout>

      <SEO
        title="Zona marketera"
        keywords={[`marketing`, `negocios`, `branding`, `diseño`]}
      />

      <Hero images={servicesHeroImages} button={{to: '#contact', text: 'EMPECEMOS!!'}}></Hero>

      <img src={heroLarge} />

      <section className="bg-stone border-b font-myriad-pro">
        <div className="container max-w-5xl mx-auto">

          <div className="flex flex-wrap">
            <div className="md:w-1/2 w-full">
              <img className="w-full h-full"
                srcSet={`${imageMedium} 760w, ${imageMedium} 1280w`}
                sizes="(min-width: 1100px) 512px, (min-width: 780px) calc(40.67vw + 73px), 100vw"
                src={imageMedium}/>
            </div>
            <div className="w-full h-full md:w-1/2 px-8 pt-8">
              <img className="mb-4" src={brandingText} />
              <h3 className="text-4xl font-bold leading-none mb-3 text-center">Creamos conceptos unicos que CONECTEN con tu negocio.</h3>
              <p className="md:mb-2 text-xl">Branding Corporativo (Logotipos, presentaciones, papeleria y manual de marca).</p>
              <p className="md:mb-2 text-xl">Diseño Editorial: (Trípticos, dípticos, volantes).</p>
              <p className="md:mb-2 text-xl">Diseño Digital: (Desarrollo de nanners, graficos para redes sociale sy paginas web).</p>
              <p className="md:mb-2 text-xl">Copy´s: (Textos creativos y correccion de estilo).</p>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-full h-full md:w-1/2 px-8 pt-8">
              <img className="mb-4" src={webDesignText} />
              <h3 className="text-4xl font-bold leading-none mb-3 text-center">Hablemos de negocios. Crea confianza y aparece en los principales buscadores.</h3>
              <p className="md:mb-2 text-xl">Sitio Web Corporativo</p>
              <p className="md:mb-2 text-xl">Landing Pages</p>
              <p className="md:mb-2 text-xl">Tiendas online</p>
              <p className="md:mb-2 text-xl">Posicionamiento orgánico y pagado en Google.</p>
            </div>
            <div className="md:w-1/2 w-full">
              <img className="w-full h-full"
                srcSet={`${imageMedium} 760w, ${imageMedium} 1280w`}
                sizes="(min-width: 1100px) 512px, (min-width: 780px) calc(40.67vw + 73px), 100vw"
                src={imageMedium}/>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="md:w-1/2 w-full">
              <img className="w-full h-full"
                srcSet={`${imageMedium} 760w, ${imageMedium} 1280w`}
                sizes="(min-width: 1100px) 512px, (min-width: 780px) calc(40.67vw + 73px), 100vw"
                src={imageMedium}/>
            </div>
            <div className="w-full h-full md:w-1/2 px-8 pt-8">
              <img className="mb-4" src={photographyText} />
              <h3 className="text-4xl font-bold leading-none mb-3 text-center">Creamos contenido unico para comunicar de la mejor maneta tu producto o servicio.</h3>
              <p className="md:mb-2 text-xl">Fotografía de producto.</p>
              <p className="md:mb-2 text-xl">Fotografía E-commerce.</p>
              <p className="md:mb-2 text-xl">Fotografía corporativa.</p>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-full h-full md:w-1/2 px-8 pt-8">
              <img className="mb-4" src={videoText} />
              <h3 className="text-4xl font-bold leading-none mb-3 text-center">Creamos contenidos que te permitan capturar la esencia de tu marca y dejarla en la zona.</h3>
              <p className="md:mb-2 text-xl">Video e-commerce.</p>
              <p className="md:mb-2 text-xl">Animación de logotipo.</p>
              <p className="md:mb-2 text-xl">Video comercial.</p>
            </div>
            <div className="md:w-1/2 w-full">
              <img className="w-full h-full"
                srcSet={`${imageMedium} 760w, ${imageMedium} 1280w`}
                sizes="(min-width: 1100px) 512px, (min-width: 780px) calc(40.67vw + 73px), 100vw"
                src={imageMedium}/>
            </div>
          </div>
        </div>
        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden pby-8">
          <div className="flex items-center justify-center">
            <button className="mx-auto lg:mx-0 hover:underline bg-lime text-white font-bold rounded-full my-6 py-4 px-8 uppercase tracking-widest">COTIZA YA!!</button>
          </div>
        </div>
      </section>


      <CTA></CTA>

    </Layout>
  );
}

export default ServicesPage;