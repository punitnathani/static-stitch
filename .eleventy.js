module.exports = (function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/js');
  eleventyConfig.addPassthroughCopy('src/css');
  eleventyConfig.addPassthroughCopy('src/assets');

  return {
    dir: {
      output: 'dist',
      input: 'src',
      data: 'json_data',
      includes: 'partials_layouts'
    },
    templateFormats: ['njk',  'md']
  };
});
