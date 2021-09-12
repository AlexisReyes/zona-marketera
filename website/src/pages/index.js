import React from "react";

import CTA from "../components/cta";
import Features from "../components/features";
import Hero from "../components/hero";
import Layout from "../components/layout";
import SEO from "../components/seo";
import TitleCards from "../components/title-cards";

import heroLarge from "../images/portada-lg.png";
import heroMedium from "../images/portada-md.png";
import heroSmall from "../images/portada-sm.png";

import shopingCartLarge from "../images/shoping-cart-1280.png";
import shopingCartMedium from "../images/shoping-cart-760.png";

function IndexPage() {

  const heroImages = {
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

      <Hero images={heroImages} button={{ to: '#contact', text: 'Comienza hoy' }} />

      <TitleCards></TitleCards>

      <Features></Features>

      <div className="w-full">
        <img className="w-full h-full"
          srcSet={`${shopingCartMedium} 760w, ${shopingCartLarge} 1280w`}
          sizes="100vw"
          src={shopingCartMedium}/>
      </div>

      <CTA></CTA>

    </Layout>
  );
}

export default IndexPage;
