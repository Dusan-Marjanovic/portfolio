import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <div className="p-10">
        <h1 className="text-4xl font-bold text-red-500">Home Page</h1>
        <Link to="/about">About</Link>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
