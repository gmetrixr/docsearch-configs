new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: ["https://arrow-kt.io/"],
  renderJavaScript: false,
  sitemaps: ["https://arrow-kt.io/sitemap.xml"],
  exclusionPatterns: [
    "https://arrow-kt.io/docs/[0-9]**",
    "https://arrow-kt.io/docs/[0-9]**/**",
    "https://arrow-kt.io/docs/next**",
    "https://arrow-kt.io/docs/next**/**",
    "**/**.*(?<!index.html)",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://arrow-kt.io/**"],
  schedule: "at 01:40 on Tuesday",
  actions: [
    {
      indexName: "arrow",
      pathsToMatch: ["https://arrow-kt.io**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".header-link, .doc-content td:last-child a, .doc-content td:last-child code, .doc-content p:first-child";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".doc-content h1",
            content:
              ".doc-content p, .doc-content li, .doc-content tr > td:first-child",
            lvl0: {
              selectors: ".brand-title",
              defaultValue: "Documentation",
            },
            lvl2: ".doc-content h2",
            lvl3: ".doc-content h3",
            lvl4: ".doc-content h4",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    arrow: {
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