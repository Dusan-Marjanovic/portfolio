import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const layout = ({ children }) => {
  //const data = useStaticQuery(graphql``);
  return (
    <div>
      <header>
        <h1>My Portfolio</h1>
      </header>
    </div>
  );
};
