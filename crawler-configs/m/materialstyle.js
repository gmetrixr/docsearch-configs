new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://materialstyle.github.io/docs/2.0/",
    "https://materialstyle.github.io/",
    "https://materialstyle.github.io/docs/1.0/",
    "https://materialstyle.github.io/docs/1.1/",
    "https://materialstyle.github.io/docs/1.2/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://materialstyle.github.io/**"],
  schedule: "at 10:00 on Thursday",
  actions: [
    {
      indexName: "materialstyle",
      pathsToMatch: ["https://materialstyle.github.io/docs/2.0/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".component-showcase h2",
            content: ".component-showcase p, .component-showcase li",
            lvl0: {
              selectors: ".component-showcase h1",
            },
            lvl2: ".component-showcase h3",
            lvl3: ".component-showcase h4",
            lvl4: ".component-showcase h5",
            lvl5: ".component-showcase h6",
            version: {
              defaultValue: ["2.0"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "materialstyle",
      pathsToMatch: ["https://materialstyle.github.io/docs/1.0/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".component-showcase h2",
            content: ".component-showcase p, .component-showcase li",
            lvl0: {
              selectors: ".component-showcase h1",
            },
            lvl2: ".component-showcase h3",
            lvl3: ".component-showcase h4",
            lvl4: ".component-showcase h5",
            lvl5: ".component-showcase h6",
            version: {
              defaultValue: ["1.0"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "materialstyle",
      pathsToMatch: ["https://materialstyle.github.io/docs/1.1/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".component-showcase h2",
            content: ".component-showcase p, .component-showcase li",
            lvl0: {
              selectors: ".component-showcase h1",
            },
            lvl2: ".component-showcase h3",
            lvl3: ".component-showcase h4",
            lvl4: ".component-showcase h5",
            lvl5: ".component-showcase h6",
            version: {
              defaultValue: ["1.1"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "materialstyle",
      pathsToMatch: ["https://materialstyle.github.io/docs/1.2/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".component-showcase h2",
            content: ".component-showcase p, .component-showcase li",
            lvl0: {
              selectors: ".component-showcase h1",
            },
            lvl2: ".component-showcase h3",
            lvl3: ".component-showcase h4",
            lvl4: ".component-showcase h5",
            lvl5: ".component-showcase h6",
            version: {
              defaultValue: ["1.2"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    materialstyle: {
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