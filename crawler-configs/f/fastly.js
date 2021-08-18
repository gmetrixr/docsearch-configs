new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: ["https://docs.fastly.com/ja/", "https://docs.fastly.com/"],
  renderJavaScript: false,
  sitemaps: ["https://docs.fastly.com/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docs.fastly.com/**"],
  schedule: "at 01:00 on Wednesday",
  actions: [
    {
      indexName: "fastly",
      pathsToMatch: ["https://docs.fastly.com/ja/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".breadcrumb, #toc, #right_column [data-swiftype-index=false]";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".fastly-primary h4 b",
            content: "#right_column p, #right_column li",
            lvl0: {
              selectors: ".fastly-active.list-group-item h4",
              defaultValue: "Documentation",
            },
            lvl2: "#right_column h1",
            lvl3: "#right_column h2",
            lvl4: "#right_column h3",
            lvl5: "#right_column h4",
            lang: {
              defaultValue: ["ja"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "fastly",
      pathsToMatch: ["https://docs.fastly.com/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".breadcrumb, #toc, #right_column [data-swiftype-index=false]";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".fastly-primary h4 b",
            content: "#right_column p, #right_column li",
            lvl0: {
              selectors: ".fastly-active.list-group-item h4",
              defaultValue: "Documentation",
            },
            lvl2: "#right_column h1",
            lvl3: "#right_column h2",
            lvl4: "#right_column h3",
            lvl5: "#right_column h4",
            lang: {
              defaultValue: ["en"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    fastly: {
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