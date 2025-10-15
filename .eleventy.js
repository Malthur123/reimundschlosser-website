module.exports = function(eleventyConfig) {
  // Passthrough static files
  eleventyConfig.addPassthroughCopy("reimundschlosser.com/css");
  eleventyConfig.addPassthroughCopy("reimundschlosser.com/images");
  eleventyConfig.addPassthroughCopy("reimundschlosser.com/js");
  eleventyConfig.addPassthroughCopy("reimundschlosser.com/admin");
  eleventyConfig.addPassthroughCopy("reimundschlosser.com/favicon.ico");
  eleventyConfig.addPassthroughCopy("reimundschlosser.com/apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy("reimundschlosser.com/favicon-16x16.png");
  eleventyConfig.addPassthroughCopy("reimundschlosser.com/favicon-32x32.png");
  eleventyConfig.addPassthroughCopy("reimundschlosser.com/site.webmanifest");

  return {
    dir: {
      input: "reimundschlosser.com",
      output: "reimundschlosser.com/_site",
    }
  };
};