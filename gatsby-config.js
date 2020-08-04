module.exports = {
  siteMetadata: {
    title: "Horizon",
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Focus",
        link: "/focus",
        submenu: [
          {
            name: "Live",
            link: "/focus/live",
          },
          {
            name: "Label",
            link: "/focus/label",
          },
          {
            name: "Publishing",
            link: "/focus/publishing",
          },
          {
            name: "Management",
            link: "/focus/management",
          },
        ],
      },
      {
        name: "Agenda",
        link: "/agenda",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        stripMetadata: true,
        defaultQuality: 70,
      },
    },
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
