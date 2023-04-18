/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `mythical.fish`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    { resolve: "gatsby-plugin-mdx" },
    { resolve: "gatsby-transformer-remark" },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/favicon.png",
      },
    },
    { resolve: `gatsby-plugin-postcss` },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/content`,
        name: "content",
      },
      __key: "content",
    },
  ],
};
