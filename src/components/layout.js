import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styles from "../styles/layout.module.css";

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
      <header className="background-primary fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="text-primary transition-colors text-xl font-bold logo link"
            >
              My Portfolio.<span class="blinking-caret"> I</span>
            </Link>
          </div>

          <nav>
            <ol className="flex space-x-6 text-primary font-medium">
              {menuItems.map((item) => (
                <li key={item.order}>
                  <Link
                    className="text-primary transition-colors link"
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

      <main className="flex-1 flex pt-10">
        <div className="">{children}</div>
      </main>

      <footer className=" text-center py-4 mt-auto footer text-primary">
        <p>&copy; {new Date().getFullYear()} My Portfolio</p>
      </footer>
    </div>
  );
};

export default Layout;
