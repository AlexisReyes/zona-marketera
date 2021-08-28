import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>

      <SEO
        title="Zona marketera"
        keywords={[`marketing`, `tailwind`, `react`, `tailwindcss`]}
      />

    </Layout>
  );
}

export default IndexPage;
