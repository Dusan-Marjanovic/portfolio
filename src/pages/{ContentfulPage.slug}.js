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
      <div className="p-10 ">
        <h1 className="text-center text-4xl font-bold text-emerald-600">
          {page.title}
        </h1>
        {page.body && <div>{renderRichText(page.body)}</div>}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      slug
      pageImage {
        gatsbyImageData(layout: CONSTRAINED, width: 1200, placeholder: BLURRED)
      }
      body {
        raw
      }
    }
  }
`;

export const Head = ({ data }) => {
  if (data.contentfulPage.slug === "portfolio") {
    return <title>Portfolio Page</title>;
  }
  return <title>{data.contentfulPage.title}</title>;
};

export default Page;
