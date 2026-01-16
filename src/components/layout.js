import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styles from "../styles/layout.module.css";
import { StaticImage } from "gatsby-plugin-image";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulMenuItem(sort: { order: ASC }) {
        nodes {
          label
          order
          page {
            slug
          }
        }
      }
    }
  `);
  const menuItems = data.allContentfulMenuItem.nodes;
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-stone-100 fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center space-x-4">
            <StaticImage
              src=""
              placeholder="blurred"
              layout="constrained"
              width={80}
              className="rounded-full"
            />
            <Link
              to="/"
              className="hover:text-emerald-600 transition-colors text-xl font-bold"
            >
              My Portfolio.<span class="blinking-caret"> I</span>
            </Link>
          </div>

          <nav>
            <ol className="flex space-x-6 text-gray-700 font-medium">
              {menuItems.map((item) => (
                <li key={item.order}>
                  <Link
                    className="hover:text-emerald-500 transition-colors"
                    to={item.page.slug === "/" ? "/" : `/${item.page.slug}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </header>

      <div className="bg-stone-100 h-20"></div>

      <main className="bg-stone-100 flex-1 flex justify-center py-8">
        <div className="justify-center">{children}</div>
      </main>

      <footer className="bg-stone-100 text-center py-4 mt-auto">
        <p>&copy; {new Date().getFullYear()} My Portfolio</p>
      </footer>
    </div>
  );
};

export default Layout;
