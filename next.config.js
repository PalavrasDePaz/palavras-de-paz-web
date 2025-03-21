/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  // webpack: (config, options) => {
  //   config.module.rules.push({
  //     test: /\.mp4$/,
  //     use: [
  //       {
  //         loader: 'file-loader',
  //         options: {
  //           name: "[name].[ext]",
  //           outputPath: "video"
  //       }
  //       },
  //     ],
  //   });

  //   return config;
  // },
};

module.exports = nextConfig;