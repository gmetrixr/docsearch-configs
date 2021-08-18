new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://developer.wepay.com/docs/",
    "https://developer.wepay.com/",
    "https://developer.wepay.com/api/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://developer.wepay.com/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://developer.wepay.com/**"],
  schedule: "at 10:00 on Saturday",
  actions: [
    {
      indexName: "wepay_developer",
      pathsToMatch: ["https://developer.wepay.com/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "h1 + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".post-content section h1",
            content: ".post-content section p, .post-content section li",
            lvl0: {
              selectors: "#side-nav .expanded",
              defaultValue: "Documentation",
            },
            lvl2: ".post-content section h2",
            lvl3: ".post-content section h3",
            lvl4: ".post-content section h4",
            lvl5: ".post-content section h5",
            lvl6: ".post-content section h6",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "wepay_developer",
      pathsToMatch: ["https://developer.wepay.com/api/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "h1 + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".post-content section h1",
            content: ".post-content section p, .post-content section li",
            lvl0: {
              selectors: "#side-nav .expanded",
              defaultValue: "Documentation",
            },
            lvl2: ".post-content section h2",
            lvl3: ".post-content section h3",
            lvl4: ".post-content section h4",
            lvl5: ".post-content section h5",
            lvl6: ".post-content section h6",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    wepay_developer: {
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
      separatorsToIndex: "_",
    },
  },
});