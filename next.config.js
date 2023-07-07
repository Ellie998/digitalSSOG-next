module.exports = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,

    remotePatterns: [
      {
        protocol: "https",
        hostname: "ssog.pages.dev",
      },
      {
        hostname: "localhost",
        port: "3000",
      },
    ],
  },
};

// const { PHASE_PRODUCTION_BUILD, PHASE_DEVELOPMENT_SERVER } = require("next/constants");
// const nextEnv = require("next-env");
// const dotenvLoad = require("dotenv-load");

// dotenvLoad();

// const withEnv = nextEnv();

// module.exports = (phase, { defaultConfig }) => {
//   if (phase === PHASE_DEVELOPMENT_SERVER) {
//     console.log("I'm in dev mode")
//   }
//   return withEnv(defaultConfig)
// }
