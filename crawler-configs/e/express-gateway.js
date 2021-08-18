new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://www.express-gateway.io/docs/",
    "https://www.express-gateway.io/",
  ],
  renderJavaScript: false,
  sitemaps: ["http://www.express-gateway.io/sitemap.xml"],
  exclusionPatterns: [
    "**/blog/**",
    "**/about/**",
    "**/resources/**",
    "**/getting-started/**",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://www.express-gateway.io/**"],
  schedule: "at 20:50 on Tuesday",
  actions: [
    {
      indexName: "express-gateway",
      pathsToMatch: ["https://www.express-gateway.io/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".algoliaLv1",
            content: "section p, section li, article p",
            lvl0: {
              selectors: ".algoliaLv0",
            },
            lvl2: ".algoliaLv2",
            lvl3: "section h1",
            lvl4: "section h2",
            lvl5: "section h3",
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "express-gateway",
      pathsToMatch: ["https://www.express-gateway.io/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".algoliaLv1",
            content: "section p, section li, article p",
            lvl0: {
              selectors: ".algoliaLv0",
            },
            lvl2: ".algoliaLv2",
            lvl3: "section h1",
            lvl4: "section h2",
            lvl5: "section h3",
          },
          indexHeadings: false,
        });
      },
    },
  ],
  initialIndexSettings: {
    "express-gateway": {
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