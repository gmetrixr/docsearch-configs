new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://baidu.github.io/san/tutorial/start/",
    "https://baidu.github.io/",
    "https://baidu.github.io/san/practice/",
    "https://baidu.github.io/san/doc/api/",
    "https://baidu.github.io/san/doc/main-members/",
  ],
  renderJavaScript: true,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://baidu.github.io/**"],
  schedule: "at 15:00 on Friday",
  actions: [
    {
      indexName: "san",
      pathsToMatch: ["https://baidu.github.io/san/tutorial/start/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".article-inner h2",
            content: ".article-inner p, .article-inner li",
            lvl0: {
              selectors: ".article-inner h1",
            },
            lvl2: ".article-inner h3",
            lvl3: ".article-inner h4",
            lvl4: ".article-inner h5",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "san",
      pathsToMatch: ["https://baidu.github.io/san/practice/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".article-inner h2",
            content: ".article-inner p, .article-inner li",
            lvl0: {
              selectors: ".article-inner h1",
            },
            lvl2: ".article-inner h3",
            lvl3: ".article-inner h4",
            lvl4: ".article-inner h5",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "san",
      pathsToMatch: ["https://baidu.github.io/san/doc/api/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".article-inner h2",
            content: ".article-inner p, .article-inner li",
            lvl0: {
              selectors: ".article-inner h1",
            },
            lvl2: ".article-inner h3",
            lvl3: ".article-inner h4",
            lvl4: ".article-inner h5",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "san",
      pathsToMatch: ["https://baidu.github.io/san/doc/main-members/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".article-inner h2",
            content: ".article-inner p, .article-inner li",
            lvl0: {
              selectors: ".article-inner h1",
            },
            lvl2: ".article-inner h3",
            lvl3: ".article-inner h4",
            lvl4: ".article-inner h5",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    san: {
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