import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Awais Isane`,
    siteUrl: `https://awaisisane.github.io/`,
    description: `Awais Isane Personal Website`,
    twitterUsername: `@6001k1d`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image",
    "gatsby-plugin-sharp"]
};

export default config;
