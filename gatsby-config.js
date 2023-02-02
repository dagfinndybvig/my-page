/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [{
    resolve: `gatsby-plugin-s3`,
    options: {
      bucketName: "thedagfinn.net",
    },
  },],
}
