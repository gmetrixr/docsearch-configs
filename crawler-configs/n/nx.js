new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://nx.dev/latest/react/",
    "https://nx.dev/",
    "https://nx.dev/latest/angular/",
    "https://nx.dev/latest/node/",
    "https://nx.dev/previous/react/",
    "https://nx.dev/previous/angular/",
    "https://nx.dev/previous/node/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://nx.dev/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://nx.dev/**"],
  schedule: "at 15:50 on Thursday",
  actions: [
    {
      indexName: "nx",
      pathsToMatch: ["https://nx.dev/latest/react/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#content-wrapper h1",
            content:
              "#content-wrapper p, #content-wrapper ul li, #content-wrapper td:not(:first-child)",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "#content-wrapper h2",
            lvl3: "#content-wrapper h3",
            lvl4: "#content-wrapper h4, #content-wrapper td:first-child",
            lvl5: "#content-wrapper h5",
            framework: {
              defaultValue: ["react"],
            },
            version: {
              defaultValue: ["latest"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "nx",
      pathsToMatch: ["https://nx.dev/latest/angular/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#content-wrapper h1",
            content:
              "#content-wrapper p, #content-wrapper ul li, #content-wrapper td:not(:first-child)",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "#content-wrapper h2",
            lvl3: "#content-wrapper h3",
            lvl4: "#content-wrapper h4, #content-wrapper td:first-child",
            lvl5: "#content-wrapper h5",
            framework: {
              defaultValue: ["angular"],
            },
            version: {
              defaultValue: ["latest"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "nx",
      pathsToMatch: ["https://nx.dev/latest/node/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#content-wrapper h1",
            content:
              "#content-wrapper p, #content-wrapper ul li, #content-wrapper td:not(:first-child)",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "#content-wrapper h2",
            lvl3: "#content-wrapper h3",
            lvl4: "#content-wrapper h4, #content-wrapper td:first-child",
            lvl5: "#content-wrapper h5",
            framework: {
              defaultValue: ["node"],
            },
            version: {
              defaultValue: ["latest"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "nx",
      pathsToMatch: ["https://nx.dev/previous/react/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#content-wrapper h1",
            content:
              "#content-wrapper p, #content-wrapper ul li, #content-wrapper td:not(:first-child)",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "#content-wrapper h2",
            lvl3: "#content-wrapper h3",
            lvl4: "#content-wrapper h4, #content-wrapper td:first-child",
            lvl5: "#content-wrapper h5",
            framework: {
              defaultValue: ["react"],
            },
            version: {
              defaultValue: ["previous"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "nx",
      pathsToMatch: ["https://nx.dev/previous/angular/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#content-wrapper h1",
            content:
              "#content-wrapper p, #content-wrapper ul li, #content-wrapper td:not(:first-child)",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "#content-wrapper h2",
            lvl3: "#content-wrapper h3",
            lvl4: "#content-wrapper h4, #content-wrapper td:first-child",
            lvl5: "#content-wrapper h5",
            framework: {
              defaultValue: ["angular"],
            },
            version: {
              defaultValue: ["previous"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "nx",
      pathsToMatch: ["https://nx.dev/previous/node/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#content-wrapper h1",
            content:
              "#content-wrapper p, #content-wrapper ul li, #content-wrapper td:not(:first-child)",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "#content-wrapper h2",
            lvl3: "#content-wrapper h3",
            lvl4: "#content-wrapper h4, #content-wrapper td:first-child",
            lvl5: "#content-wrapper h5",
            framework: {
              defaultValue: ["node"],
            },
            version: {
              defaultValue: ["previous"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    nx: {
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