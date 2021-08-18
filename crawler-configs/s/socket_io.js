new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://socket.io/docs/v2/",
    "https://socket.io/",
    "https://socket.io/docs/v3/",
    "https://socket.io/docs/v4/",
  ],
  renderJavaScript: true,
  sitemaps: ["https://socket.io/sitemap.xml"],
  exclusionPatterns: ["**/**.html"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://socket.io/**"],
  schedule: "at 15:30 on Friday",
  actions: [
    {
      indexName: "socket_io",
      pathsToMatch: ["https://socket.io/docs/v2/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li",
            lvl0: {
              selectors: "article h1",
              defaultValue: "Documentation",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            version: {
              defaultValue: ["v2"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "socket_io",
      pathsToMatch: ["https://socket.io/docs/v3/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li",
            lvl0: {
              selectors: "article h1",
              defaultValue: "Documentation",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            version: {
              defaultValue: ["v3"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "socket_io",
      pathsToMatch: ["https://socket.io/docs/v4/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li",
            lvl0: {
              selectors: "article h1",
              defaultValue: "Documentation",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            version: {
              defaultValue: ["v4"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    socket_io: {
      attributesForFaceting: ["type", "lang", "language", "version"],
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