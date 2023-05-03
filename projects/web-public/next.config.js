const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  '@eduardofl/design-system',
  '@eduardofl/utils'
]);

/**
 * @type {import('next').NextConfig}
 */
module.exports = withPlugins([withTM], {
    trailingSlash: true,
});
