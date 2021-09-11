import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Navigation from "../components/navigation";
import Features from "../components/features";
import Hero from "../components/hero";
import TitleCards from "../components/title-cards";
import CTA from "../components/cta";
import Footer from "../components/footer";

function Layout({ children }) {

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title,
              github,
              blog
            }
          }
        }
      `}
      render={data => (

        <div className="leading-normal tracking-normal text-white font-roboto-slab">

            {children}

            {/* Navigation */}
            <Navigation></Navigation>

            {/* Hero */}
            <Hero></Hero>

            {/* Title cards */}
            <TitleCards></TitleCards>

            {/* Alternate features */}
            <Features></Features>

            {/* Waves SVG */}

            {/* CTA block */}
            <CTA></CTA>

            {/* Footer */}
            <Footer></Footer>

        </div>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
