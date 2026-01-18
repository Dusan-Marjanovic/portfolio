import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styles from "../styles/layout.module.css";

const Header = ({ menuItems }) => {
  const [open, setOpen] = React.useState(false);
};
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
      <header className="header sticky top-0 left-0 w-full z-50 background-primary">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-6">
          <div className="w-full flex justify-center md:justify-start mb-4 md:mb-0">
            <Link
              to="/"
              className="text-primary transition-colors text-xl font-bold logo link"
            >
              My Portfolio.<span className="blinking-caret"> I</span>
            </Link>
          </div>

          <nav className="w-full">
            <ol className="flex justify-center md:justify-end space-x-6 text-primary font-medium flex-wrap">
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

      <main className="flex-1 flex">
        <div className="">{children}</div>
      </main>

      <footer className=" text-center py-4 mt-auto footer text-primary">
        <p>&copy; {new Date().getFullYear()} My Portfolio</p>
      </footer>
    </div>
  );
};

export default Layout;
