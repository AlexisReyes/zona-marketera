import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

function Layout({ children }) {

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title,
              facebook,
              twitter,
              whatsap,
              instagram
            }
          }
        }
      `}
      render={data => (
        <div className="leading-normal tracking-normal text-white font-roboto-slab">

            <Navigation></Navigation>

            {children}

            <Footer links={data.site.siteMetadata}></Footer>

        </div>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
