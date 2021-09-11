import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>

      <SEO
        title="Zona marketera"
        keywords={[`marketing`, `negocios`, `branding`, `zona`]}
      />

    </Layout>
  );
}

export default IndexPage;
