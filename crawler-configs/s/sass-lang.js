new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://sass-lang.com/documentation/functions/css",
    "https://sass-lang.com/",
    "https://sass-lang.com/documentation/functions/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://sass-lang.com/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://sass-lang.com/**"],
  schedule: "at 15:00 on Friday",
  actions: [
    {
      indexName: "sass-lang",
      pathsToMatch: ["https://sass-lang.com/documentation/functions/css**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docSearch-content h2",
            content: ".docSearch-content p, .docSearch-content li",
            lvl0: {
              selectors: "main h1",
              defaultValue: "Documentation",
            },
            lvl2:
              ".docSearch-content :not(.code-example) > :not(aside) > h3, .docSearch-content > :not(aside) > h3, .docSearch-content > h3",
            lvl3: ".docSearch-content h4",
            lvl4: ".docSearch-content h5",
            lvl5: ".docSearch-content h6",
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "sass-lang",
      pathsToMatch: ["https://sass-lang.com/documentation/functions/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "[class*='docSearch-function']",
            content: ".docSearch-content p",
            lvl0: {
              selectors: "main h1",
              defaultValue: "Documentation",
            },
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "sass-lang",
      pathsToMatch: [
        "https://sass-lang.com/**",
        "!https://sass-lang.com/documentation/functions/css**/**",
        "!https://sass-lang.com/documentation/functions/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docSearch-content h2",
            content: ".docSearch-content p, .docSearch-content li",
            lvl0: {
              selectors: "main h1",
              defaultValue: "Documentation",
            },
            lvl2:
              ".docSearch-content :not(.code-example) > :not(aside) > h3, .docSearch-content > :not(aside) > h3, .docSearch-content > h3",
            lvl3: ".docSearch-content h4",
            lvl4: ".docSearch-content h5",
            lvl5: ".docSearch-content h6",
          },
          indexHeadings: false,
        });
      },
    },
  ],
  initialIndexSettings: {
    "sass-lang": {
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
      separatorsToIndex: "#_",
    },
  },
});