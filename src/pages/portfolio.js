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
        }
      }
    }
  `);
  const items = data.allContentfulPortfolioItem.nodes;
  return (
    <Layout>
      <div className="p-10 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-emerald-600 text-center mb-12">
          Portfolio Page
        </h1>

        <ul className="w-full max-w-3xl space-y-12">
          {items.map((item) => (
            <li key={item.slug} className="bg-white rounded-3xl p-10">
              <Link to={`/portfolio/${item.slug}`}>
                <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">
                  {item.title}
                </h2>
                {item.description && (
                  <div className="prose prose-slate max-w-none text-center mx-auto">
                    {renderRichText(item.description)}
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default PortfolioPage;

export const Head = () => <title>Portfolio</title>;
