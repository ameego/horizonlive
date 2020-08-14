module.exports = {
  siteMetadata: {
    title: "Horizon",
    titleTemplate: "%s · Produit des artistes libres",
    description:
      "Horizon produit des artistes libres et sans frontières. Horizon repère puis développe des artistes dès leurs tous premiers pas sur scène.",
    url: "https://www.doe.com",
    image: "",
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
        name: "Vidéos",
        link: "/videos",
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `artistsBanner`,
        path: `${__dirname}/static/assets/banner`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `artistsQuote`,
        path: `${__dirname}/static/assets/quote`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `artistsGallery`,
        path: `${__dirname}/static/assets/gallery`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `commonBanner`,
        path: `${__dirname}/static/assets/common/banner`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./collections/artists/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./collections/focus/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./collections/agenda/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./collections/news/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./collections/common/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./collections/pages/home/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./collections/videos/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
