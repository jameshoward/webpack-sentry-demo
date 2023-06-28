const path = require('path');
const webpack = require('webpack');
const { sentryWebpackPlugin } = require("@sentry/webpack-plugin");

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/index.js',
  plugins: [
    sentryWebpackPlugin({
      org: "doesntmatter",
      project: "doesntmatter",
      authToken: process.env.SENTRY_AUTH_TOKEN,
      disable: true
    })
  ]
};