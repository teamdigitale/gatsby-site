module.exports = {
  siteMetadata: {
    name: "CHANGEME",
    hostname: "CHANGEME.example.org",
    siteUrl: "https://CHANGEME/",
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-jss",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "contents",
        path: `${__dirname}/contents`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-attr",
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 740,
            },
          },
        ],
      },
    },
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          formats: ["auto", "webp", "avif"],
          placeholder: "blurred",
        }
      },
    },
    {
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: "CHANGEME",
        matomoUrl: `https://ingestion.webanalytics.italia.it/`,
        siteUrl: "https://CHANGEME",
        matomoPhpScript: "matomo.php",
        matomoJsScript: "matomo.js",
        localScript: "/assets/matomo.js",
        enableJSErrorTracking: true,
      },
    },
  ],
};
