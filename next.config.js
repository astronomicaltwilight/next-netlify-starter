const withPlugins = require('next-compose-plugins');
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// Create the plugin with any options (empty is fine)
const vanillaExtractPlugin = createVanillaExtractPlugin();

// Compose the plugin with your config
module.exports = withPlugins([vanillaExtractPlugin], nextConfig);