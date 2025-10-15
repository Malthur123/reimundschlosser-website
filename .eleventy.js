const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

  // Create a custom filter for readable dates
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat("dd LLL yyyy");
  });

  // START: New code for custom collection
  // Create a custom collection for blog posts, sorted by date (newest first)
  eleventyConfig.addCollection("postsReversed", function(collectionApi) {
    return collectionApi.getFilteredByTag("post").sort(function(a, b) {
      return b.date - a.date; // Sort by date in descending order
    });
  });
  // END: New code for custom collection

  // Passthrough static files from the root
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy("favicon-16x16.png");
  eleventyConfig.addPassthroughCopy("favicon-32x32.png");
  eleventyConfig.addPassthroughCopy("site.webmanifest");

  return {
    dir: {
      input: ".",
      output: "_site",
    }
  };
};