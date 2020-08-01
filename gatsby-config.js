module.exports = {
  siteMetadata: {
    title: "Horizon",
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Artists",
        link: "/artists",
      },
      {
        name: "Live",
        link: "/live",
      },
      {
        name: "Label",
        link: "/label",
      },
      {
        name: "Publishing",
        link: "/publishing",
      },
      {
        name: "Management",
        link: "/management",
      },
      {
        name: "Agenda",
        link: "/agenda",
      },
      {
        name: "Vidéos",
        link: "/videos",
      },
      {
        name: "Contact",
        link: "/contact",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./artists/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./focus/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./agenda/`,
      },
    },
  ],
}
