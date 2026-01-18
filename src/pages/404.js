import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="absolute inset-0 -z-10 bg-white" />

      <div className="absolute inset-0 min-h-screen flex flex-col items-center justify-center pt-20 px-6">
        <div className="relative z-10 max-w-4xl w-full">
          <h1 className="text-left text-5xl md:text-6xl font-bold text-primary pb-5">
            Page not found
          </h1>

          <div className="prose mx-auto text-primary max-w-none text-left">
            <p>Stay inside my portfolio.</p>
            <p>
              <Link
                to="/"
                className="accent-primary font-medium hover:underline transition-colors"
              >
                Go home
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
