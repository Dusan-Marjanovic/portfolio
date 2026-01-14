import * as React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Layout from "../components/layout";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage } from "gatsby-plugin-image";

const PortfolioItemPage = ({ data }) => {
  const item = data.contentfulPortfolioItem;
  return (
    <Layout>
      <div className="p-10">
        <h1 className="text-4xl font-bold">{item.title}</h1>
        <p>{item.slug}</p>
        <GatsbyImage
          image={item.image.gatsbyImageData}
          alt={item.title}
          layout={item.image.layout}
        />
        {item.description && <div>{renderRichText(item.description)}</div>}
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
        gatsbyImageData(layout: CONSTRAINED, width: 1000, placeholder: BLURRED)
      }
    }
  }
`;

export const Head = ({ data }) => (
  <title>{data.contentfulPortfolioItem.title}</title>
);

export default PortfolioItemPage;
