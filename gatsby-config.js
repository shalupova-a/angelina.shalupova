/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  flags: {
    DEV_SSR: true
  },
  plugins: [`@iostindex/gatsby-plugin-material-ui`],
}
