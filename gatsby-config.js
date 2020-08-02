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
        name: "Focus",
        link: "#",
        submenu: [
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
        ],
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
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/static/assets/`,
      },
    },
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
