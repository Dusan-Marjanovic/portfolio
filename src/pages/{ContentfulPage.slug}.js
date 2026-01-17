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
      {page.pageImage && (
        <div className="absolute inset-0 -z-10 hero-image">
          <GatsbyImage
            image={page.pageImage.gatsbyImageData}
            alt={page.title}
            className="h-full w-full"
            imgStyle={{ objectFit: "cover" }}
          />
        </div>
      )}

      <div className="absolute inset-0 min-h-screen flex flex-col items-center justify-start pt-30">
        <div className="relative z-10 p-10 max-w-4xl  ">
          <h1 className="text-left text-5xl font-bold accent-primary pb-5">
            {page.title}
          </h1>

          {page.body && (
            <div className="prose prose-emerald mx-auto text-primary max-w-none text-left">
              {renderRichText(page.body)}
            </div>
          )}
        </div>
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
        gatsbyImageData(layout: CONSTRAINED, width: 1920, placeholder: BLURRED)
      }
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
