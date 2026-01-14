import * as React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Layout from "../components/layout";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage } from "gatsby-plugin-image";

const PortfolioPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolioItem {
        nodes {
          title
          slug
          description {
            raw
          }
          image {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 500
              placeholder: BLURRED
            )
          }
        }
      }
    }
  `);
  const items = data.allContentfulPortfolioItem.nodes;
  return (
    <Layout>
      <h1 className="text-4xl font-bold text-emerald-600">Portfolio Page</h1>
      <ul>
        {items.map((item) => (
          <li key={item.slug}>
            <GatsbyImage
              image={item.image.gatsbyImageData}
              alt={item.title}
              layout={item.image.layout}
            />
            <Link to={`/portfolio/${item.slug}`}>
              <h2>{item.title}</h2>
            </Link>
            {item.description && <div>{renderRichText(item.description)}</div>}
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default PortfolioPage;

export const Head = () => <title>Portfolio</title>;
