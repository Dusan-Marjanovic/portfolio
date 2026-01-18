import * as React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Layout from "../components/layout";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage } from "gatsby-plugin-image";

const PortfolioItemPage = ({ data }) => {
  const item = data.contentfulPortfolioItem;
  return (
    <Layout>
      <div
        className="flex flex-wrap justify-center
      min-w-screen min-h-screen bg-white pt-8"
      >
        <div className="w-[95%] max-w-4xl p-8 rounded-3xl">
          {item.image && (
            <div className="mb-12 flex justify-center">
              <GatsbyImage
                image={item.image.gatsbyImageData}
                alt={item.title}
                className="rounded-md"
              />
            </div>
          )}

          <h1
            className="text-5xl font-bold accent-primary mb-8 text-center"
            style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)" }}
          >
            {item.title}
          </h1>

          {item.description && (
            <div className="prose prose-emerald max-w-none text-primary mx-auto">
              {renderRichText(item.description)}
            </div>
          )}
        </div>
        {item.imageGallery && (
          <div className="mt-12 flex p-4 flex-wrap gap-6 justify-center">
            {item.imageGallery.map((image, index) => (
              <GatsbyImage
                key={index}
                image={image.gatsbyImageData}
                alt={item.title}
                className="border image border-gray-400 rounded-md"
              />
            ))}
          </div>
        )}
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
      image {
        gatsbyImageData(layout: CONSTRAINED, width: 350, placeholder: BLURRED)
        title
      }
      imageGallery {
        gatsbyImageData(layout: CONSTRAINED, width: 450, placeholder: BLURRED)
        title
      }
    }
  }
`;

export const Head = ({ data }) => (
  <title>{data.contentfulPortfolioItem.title}</title>
);

export default PortfolioItemPage;
