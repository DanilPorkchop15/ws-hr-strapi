const CracoEnvPlugin = require("craco-plugin-env");
const { resolve } = require('node:path');

module.exports = {
  plugins: [
    {
      plugin: CracoEnvPlugin,
      options: {
        variables: {},
      },
    },
  ],
  webpack: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  },
  babel: {
    plugins: ["babel-plugin-transform-typescript-metadata"],
  },
  postcss: {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
    ],
  },
};
