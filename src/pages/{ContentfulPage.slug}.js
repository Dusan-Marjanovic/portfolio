import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import PortfolioPage from "./portfolio";
import IndexPage from ".";
import { GatsbyImage } from "gatsby-plugin-image";

const Page = ({ data }) => {
  const page = data.contentfulPage;

  if (page.slug === "portfolio") {
    return <PortfolioPage />;
  }

  /* if (page.slug === "/" || page.slug === "") {
    return <IndexPage />;
  } */

  return (
    <Layout>
      <div className="py-16 px-6 max-w-4xl mx-auto">
        <h1 className="text-center text-5xl font-bold text-emerald-600 mb-12">
          {page.title}
        </h1>

        {page.pageImage && (
          <div className="mb-12">
            <GatsbyImage
              image={page.pageImage.gatsbyImageData}
              alt={page.title}
              className="w-full rounded-2xl shadow-md"
            />
          </div>
        )}

        {page.body && (
          <div className="prose prose-emerald mx-auto text-gray-700 max-w-none">
            {renderRichText(page.body)}
          </div>
        )}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      slug

      body {
        raw
      }
    }
  }
`;
/* till query
pageImage {
    gatsbyImageData(layout: CONSTRAINED, width: 1000, placeholder: BLURRED)
} */

export const Head = ({ data }) => {
  if (data.contentfulPage.slug === "portfolio") {
    return <title>Portfolio Page</title>;
  }
  return <title>{data.contentfulPage.title}</title>;
};

export default Page;
