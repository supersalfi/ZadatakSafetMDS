const { defineConfig } = require("cypress");
const webpack = require('@cypress/webpack-preprocessor');

module.exports = defineConfig({
  watchForFileChanges: false,
  resolve: {
    extensions: ['.js', '.json'], // Ensure that Webpack resolves JS and JSON files
  },
  e2e: {
    baseUrl: 'https://demo.netbox.dev/',
    fixturesFolder: "cypress/fixtures",
  },
});
