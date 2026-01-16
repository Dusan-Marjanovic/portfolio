import * as React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Layout from "../components/layout";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage } from "gatsby-plugin-image";

const PortfolioItemPage = ({ data }) => {
  const item = data.contentfulPortfolioItem;
  return (
    <Layout>
      <div className="flex justify-center py-16">
        <div className="w-[95%] max-w-4xl bg-white rounded-3xl p-12 sm:p-16">
          <h1 className="text-5xl font-bold text-emerald-600 mb-8 text-center">
            {item.title}
          </h1>

          {item.image && (
            <div className="mb-12">
              <GatsbyImage
                image={item.image.gatsbyImageData}
                alt={item.title}
                className="w-full rounded-2xl"
              />
            </div>
          )}

          {item.description && (
            <div className="prose prose-emerald max-w-none text-gray-700 mx-auto">
              {renderRichText(item.description)}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    contentfulPortfolioItem(slug: { eq: $slug }) {
      title
      slug
      description {
        raw
      }
    }
  }
`;

export const Head = ({ data }) => (
  <title>{data.contentfulPortfolioItem.title}</title>
);

export default PortfolioItemPage;
