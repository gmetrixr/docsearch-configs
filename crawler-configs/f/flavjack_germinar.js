new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://flavjack.github.io/GerminaR/index.html",
    "https://flavjack.github.io/",
    "https://flavjack.github.io/GerminaR/reference",
    "https://flavjack.github.io/GerminaR/articles",
  ],
  renderJavaScript: false,
  sitemaps: ["https://flavjack.github.io/GerminaR/sitemap.xml"],
  exclusionPatterns: [
    "**/reference/",
    "**/reference/index.html",
    "**/articles/",
    "**/articles/index.html",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://flavjack.github.io/**"],
  schedule: "at 01:20 on Wednesday",
  actions: [
    {
      indexName: "flavjack_germinar",
      pathsToMatch: ["https://flavjack.github.io/GerminaR/index.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".contents h2",
            content: ".contents p, .contents li, .contents .pre",
            lvl0: {
              selectors: ".contents h1",
              defaultValue: "pkgdown Home page",
            },
            lvl2: ".contents h3",
            lvl3: ".ref-arguments td, .ref-description",
            tags: {
              defaultValue: ["homepage"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "flavjack_germinar",
      pathsToMatch: ["https://flavjack.github.io/GerminaR/reference**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".contents .name",
            content: ".contents p, .contents li",
            lvl0: {
              selectors: ".contents h1",
            },
            lvl2: ".ref-arguments th",
            lvl3: ".ref-arguments td, .ref-description",
            tags: {
              defaultValue: ["reference"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "flavjack_germinar",
      pathsToMatch: ["https://flavjack.github.io/GerminaR/articles**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".contents .name",
            content: ".contents p, .contents li",
            lvl0: {
              selectors: ".contents h1",
            },
            lvl2: ".contents h2, .contents h3",
            tags: {
              defaultValue: ["articles"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    flavjack_germinar: {
      attributesForFaceting: ["type", "lang"],
      attributesToRetrieve: [
        "hierarchy",
        "content",
        "anchor",
        "url",
        "url_without_anchor",
      ],
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