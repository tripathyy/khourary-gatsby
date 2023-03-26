/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    defaultTitle: `Gatsby and WordPress Demo Starter`,
    defaultDescription: `Demo starter for combining Gatsby and WordPress. Created for the LinkedIn Learning course "Building a Headless WordPress Site with Gatsby" and based on Gatsby Default Starter by @gatsbyjs`,
    author: `@mor10`,
    logo: `/logo.png`,
    twitter: `@mor10`,
    title: `Khourary-gatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": "https://khouryassociates.webarrive.com/graphql"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp",
  "gatsby-plugin-react-helmet", "gatsby-plugin-postcss", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};