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
              github,
              blog
            }
          }
        }
      `}
      render={data => (

        <div className="leading-normal tracking-normal text-white font-roboto-slab">

            {/* Navigation */}
            <Navigation></Navigation>

            {children}

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
