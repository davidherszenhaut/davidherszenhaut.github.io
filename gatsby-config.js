/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: "/portfolio",
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Portfolio",
        short_name: "portfolio",
        start_url: "/",
        background_color: "#2e3440",
        theme_color: "#2e3440",
        display: "standalone",
        icon: "src/images/icon.png",
        crossOrigin: `use-credentials`,
      },
    },
    'gatsby-plugin-react-helmet'
  ]
}
