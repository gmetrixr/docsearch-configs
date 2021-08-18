new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://developer.skedulo.com/docs/",
    "https://developer.skedulo.com/",
    "https://developer.skedulo.com/skedulo-api/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://developer.skedulo.com/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://developer.skedulo.com/**"],
  schedule: "at 15:20 on Friday",
  actions: [
    {
      indexName: "skedulo_developer",
      pathsToMatch: ["https://developer.skedulo.com/skedulo-api/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".api-content h2",
            content: ".redoc-markdown p, .redoc-markdown li",
            lvl0: {
              selectors: ".api-content h1",
            },
            lvl2: ".api-content h3",
            lvl3: ".api-content h4",
            lvl4: ".api-content h5",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "skedulo_developer",
      pathsToMatch: ["https://developer.skedulo.com/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".td-content h2",
            content: ".td-content p, .td-content li",
            lvl0: {
              selectors: ".td-content h1",
            },
            lvl2: ".td-content h3",
            lvl3: ".td-content h4",
            lvl4: ".td-content h5",
            lvl5: ".td-content h6",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    skedulo_developer: {
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