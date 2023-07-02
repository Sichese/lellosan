// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'The most beautiful in the world'; // Update the site name here
      args[0].meta = {
        'og:title': {
          property: 'og:title',
          content: 'The most beautiful in the world' // Update the OG title here
        }
      };
      return args;
    });
  },
  publicPath: ''
};
