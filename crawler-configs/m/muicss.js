new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: ["https://www.muicss.com/docs/v1", "https://www.muicss.com/"],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [
    "**/**?**",
    "**/**?**/**",
    "**/examples/**",
    "**/feedback/**",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://www.muicss.com/**"],
  schedule: "at 10:40 on Thursday",
  actions: [
    {
      indexName: "muicss",
      pathsToMatch: ["https://www.muicss.com/docs/v1**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mui-panel";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#content-wrapper .mui-row h1",
            content:
              "#content-wrapper .mui-row p, #content-wrapper .mui-row li",
            lvl0: {
              selectors: "[class='appbar-brand']",
              defaultValue: "Documentation",
            },
            lvl2: "#content-wrapper .mui-row h2",
            lvl3: "#content-wrapper .mui-row h3",
            lvl4: "#content-wrapper .mui-row h4",
            lvl5: "#content-wrapper .mui-row h5",
            lvl6: "#content-wrapper .mui-row h6",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    muicss: {
      attributesForFaceting: ["type", "lang"],
      attributesToRetrieve: ["hierarchy", "content", "anchor", "url"],
      attributesToHighlight: ["hierarchy", "hierarchy_camel", "content"],
      attributesToSnippet: ["content:10"],
      camelCaseAttributes: ["hierarchy", "hierarchy_radio", "content"],
      searchableAttributes: [
        "unordered(hierarchy_radio_camel.lvl0)",
        "unordered(hierarchy_radio.lvl0)",
        "unordered(hierarchy_radio_camel.lvl1)",
        "unordered(hierarchy_radio.lvl1)",
        "unordered(hierarchy_radio_camel.lvl2)",
        "unordered(hierarchy_radio.lvl2)",
        "unordered(hierarchy_radio_camel.lvl3)",
        "unordered(hierarchy_radio.lvl3)",
        "unordered(hierarchy_radio_camel.lvl4)",
        "unordered(hierarchy_radio.lvl4)",
        "unordered(hierarchy_radio_camel.lvl5)",
        "unordered(hierarchy_radio.lvl5)",
        "unordered(hierarchy_radio_camel.lvl6)",
        "unordered(hierarchy_radio.lvl6)",
        "unordered(hierarchy_camel.lvl0)",
        "unordered(hierarchy.lvl0)",
        "unordered(hierarchy_camel.lvl1)",
        "unordered(hierarchy.lvl1)",
        "unordered(hierarchy_camel.lvl2)",
        "unordered(hierarchy.lvl2)",
        "unordered(hierarchy_camel.lvl3)",
        "unordered(hierarchy.lvl3)",
        "unordered(hierarchy_camel.lvl4)",
        "unordered(hierarchy.lvl4)",
        "unordered(hierarchy_camel.lvl5)",
        "unordered(hierarchy.lvl5)",
        "unordered(hierarchy_camel.lvl6)",
        "unordered(hierarchy.lvl6)",
        "content",
      ],
      distinct: true,
      attributeForDistinct: "url",
      customRanking: [
        "desc(weight.page_rank)",
        "desc(weight.level)",
        "asc(weight.position)",
      ],
      ranking: [
        "words",
        "filters",
        "typo",
        "attribute",
        "proximity",
        "exact",
        "custom",
      ],
      highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
      highlightPostTag: "</span>",
      minWordSizefor1Typo: 3,
      minWordSizefor2Typos: 7,
      allowTyposOnNumericTokens: false,
      minProximity: 1,
      ignorePlurals: true,
      advancedSyntax: true,
      attributeCriteriaComputedByMinProximity: true,
      removeWordsIfNoResults: "allOptional",
    },
  },
});