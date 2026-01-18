import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";

const IndexPage = () => {
  return <Layout></Layout>;
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
