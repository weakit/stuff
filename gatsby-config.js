module.exports = {
  siteMetadata: {
    title: "rosh.h4ck.me",
  },
  plugins: [
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-catch-links"
  ],
};
