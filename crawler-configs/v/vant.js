new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://youzan.github.io/vant/#/en-US/",
    "https://youzan.github.io/",
    "https://youzan.github.io/vant/#/zh-CN/",
    "https://youzan.github.io/vant/v2/#/en-US/",
    "https://youzan.github.io/vant/v2/#/zh-CN/",
    "https://youzan.github.io/vant/v3/#/en-US/",
    "https://youzan.github.io/vant/v3/#/zh-CN/",
    "https://youzan.github.io/vant/next/#/en-US/",
    "https://youzan.github.io/vant/next/#/zh-CN/",
  ],
  renderJavaScript: true,
  sitemaps: [],
  exclusionPatterns: ["**/changelog**", "**/changelog**/**"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://youzan.github.io/**"],
  schedule: "at 05:00 on Saturday",
  actions: [
    {
      indexName: "vant",
      pathsToMatch: ["https://youzan.github.io/vant/#/en-US/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "section h1",
            content: "section p, section li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "section h2",
            lvl3: "section h3",
            lvl4: "section h4",
            lvl5: "section h5",
            lang: {
              defaultValue: ["en-US"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "vant",
      pathsToMatch: ["https://youzan.github.io/vant/#/zh-CN/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "section h1",
            content: "section p, section li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "section h2",
            lvl3: "section h3",
            lvl4: "section h4",
            lvl5: "section h5",
            lang: {
              defaultValue: ["zh-CN"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "vant",
      pathsToMatch: ["https://youzan.github.io/vant/v2/#/en-US/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "section h1",
            content: "section p, section li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "section h2",
            lvl3: "section h3",
            lvl4: "section h4",
            lvl5: "section h5",
            lang: {
              defaultValue: ["en-US"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "vant",
      pathsToMatch: ["https://youzan.github.io/vant/v2/#/zh-CN/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "section h1",
            content: "section p, section li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "section h2",
            lvl3: "section h3",
            lvl4: "section h4",
            lvl5: "section h5",
            lang: {
              defaultValue: ["zh-CN"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "vant",
      pathsToMatch: ["https://youzan.github.io/vant/v3/#/en-US/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "section h1",
            content: "section p, section li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "section h2",
            lvl3: "section h3",
            lvl4: "section h4",
            lvl5: "section h5",
            lang: {
              defaultValue: ["en-US"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "vant",
      pathsToMatch: ["https://youzan.github.io/vant/v3/#/zh-CN/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "section h1",
            content: "section p, section li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "section h2",
            lvl3: "section h3",
            lvl4: "section h4",
            lvl5: "section h5",
            lang: {
              defaultValue: ["zh-CN"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "vant",
      pathsToMatch: ["https://youzan.github.io/vant/next/#/en-US/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "section h1",
            content: "section p, section li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "section h2",
            lvl3: "section h3",
            lvl4: "section h4",
            lvl5: "section h5",
            lang: {
              defaultValue: ["en-US"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "vant",
      pathsToMatch: ["https://youzan.github.io/vant/next/#/zh-CN/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "section h1",
            content: "section p, section li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "section h2",
            lvl3: "section h3",
            lvl4: "section h4",
            lvl5: "section h5",
            lang: {
              defaultValue: ["zh-CN"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    vant: {
      attributesForFaceting: ["type", "lang", "version"],
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