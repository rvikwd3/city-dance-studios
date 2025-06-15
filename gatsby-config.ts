import type { GatsbyConfig } from "gatsby";
import dotenv from "dotenv";

// Load environment variables
dotenv.config({
  path: `env/.env.${process.env.NODE_ENV}`,
});

// Log environment variables for debugging
console.log("API_BASE_URL:", process.env.GATSBY_API_BASE_URL);

const config: GatsbyConfig = {
  siteMetadata: {
    title: `City Dance Studios`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss"],
};

export default config;
