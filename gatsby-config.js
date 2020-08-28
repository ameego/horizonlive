module.exports = {
  siteMetadata: {
    title: "Horizon",
    titleTemplate: "%s · Horizon Musiques produit des artistes libres",
    description:
      "Horizon produit des artistes libres et sans frontières. Horizon repère puis développe des artistes dès leurs tous premiers pas sur scène.",
    url: "https://www.horizon-musiques.fr",
    image: "",
    menuLinks: [
      {
        name: "Accueil",
        link: "/",
        data_testid: "nav-home",
      },
      {
        name: "Artistes",
        link: "/artistes",
        data_testid: "nav-artist",
      },
      {
        name: "Vidéos",
        link: "/videos",
        data_testid: "nav-video",
      },
      {
        name: "Activités",
        link: "/focus",
        data_testid: "nav-focus",
        submenu: [
          {
            name: "Live",
            link: "/focus/live",
            data_testid: "subnav-focus",
          },
          {
            name: "Label",
            link: "/focus/label",
            data_testid: "subnav-label",
          },
          {
            name: "Publishing",
            link: "/focus/publishing",
            data_testid: "subnav-publishing",
          },
          {
            name: "Management",
            link: "/focus/management",
            data_testid: "subnav-management",
          },
        ],
      },
      {
        name: "Agenda",
        link: "/agenda",
        data_testid: "nav-agenda",
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
        name: `artistMusic`,
        path: `${__dirname}/static/music`,
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
        path: `./collections/pages/home-page/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./collections/pages/activity-page/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./collections/pages/agenda-page/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./collections/pages/artists-page/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./collections/pages/contact-page/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./collections/pages/videos-page/`,
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
