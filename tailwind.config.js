module.exports = {
  content: [
    './app/views/**/*.html.erb',  // All ERB files in the views folder
    './app/helpers/**/*.rb',      // Any helper methods that generate classes
    './app/javascript/**/*.js',  // Any JavaScript files using Tailwind classes
    './app/assets/stylesheets/**/*.css', // CSS files with Tailwind directives
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};