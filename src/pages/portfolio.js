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
          image {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 300
              placeholder: BLURRED
            )
          }
          description {
            raw
          }
        }
      }
    }
  `);
  const items = data.allContentfulPortfolioItem.nodes;
  return (
    <Layout>
      <div className="p-10 min-w-screen flex flex-col items-center background-primary">
        <h1 className="text-4xl font-bold accent-primary text-left mb-12">
          Portfolio Page
        </h1>

        <ul className="w-full max-w-3xl space-y-12">
          {items.map((item) => (
            <li
              key={item.slug}
              className="relative page-content rounded-3xl p-8 mb-8 flex flex-col md:flex-row gap-10 items-center group"
            >
              {item.image && (
                <div className="w-full md:w-1/3 shrink-0 overflow-hidden rounded-2xl">
                  <GatsbyImage
                    image={item.image?.gatsbyImageData}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500"
                  />
                </div>
              )}

              <div className="flex-1">
                <Link
                  to={`/portfolio/${item.slug}`}
                  className="absolute inset-0 z-20"
                  aria-label={`View ${item.title}`}
                />

                <h2 className="text-3xl font-bold accent-primary mb-4 text-left group-hover:text-accent transition-colors">
                  {item.title}
                </h2>

                {item.description && (
                  <div className="prose prose-slate max-w-none text-left text-primary">
                    {renderRichText(item.description)}
                  </div>
                )}

                <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-primary transition-colors">
                  Visa →
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default PortfolioPage;

export const Head = () => <title>Portfolio</title>;
