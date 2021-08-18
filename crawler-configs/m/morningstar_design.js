new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "http://designsystem.morningstar.com/legacy/",
    "http://designsystem.morningstar.com/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [
    "**/**?**",
    "**/**?**/**",
    "**/**v/**",
    "**/**.sketch**",
    "**/**.sketch**/**",
    "**/**.ait**",
    "**/**.ait**/**",
    "**/**path/**",
    "**/**test/**",
    "**/**sink-pages/**",
    "**/release-history.html",
    "**/**morningstar.com/legacy/index.html",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["http://designsystem.morningstar.com/**"],
  schedule: "at 10:30 on Thursday",
  actions: [
    {
      indexName: "morningstar_design",
      pathsToMatch: ["http://designsystem.morningstar.com/legacy/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".mds-doc-page-nav, .mds-doc-component-status-header-tag, .mds-doc-do-dont, .mds-doc-footer";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".mds-doc__content-wrap h1",
            content: ".mds-doc__content-wrap p, .mds-page-shell__content li",
            lvl0: {
              selectors: ".mds-site-navigation__list-item--active",
              defaultValue: "Documentation",
            },
            lvl2: ".mds-doc__content-wrap h2",
            lvl3: ".mds-doc__content-wrap h3",
            lvl4: ".mds-doc__content-wrap h4",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    morningstar_design: {
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