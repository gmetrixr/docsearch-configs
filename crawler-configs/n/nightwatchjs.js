new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: ["http://nightwatchjs.org/"],
  renderJavaScript: false,
  sitemaps: ["http://nightwatchjs.org/sitemap.xml"],
  exclusionPatterns: ["**/blog/**", "**/author/**", "**/blog/**"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["http://nightwatchjs.org/**"],
  schedule: "at 15:10 on Thursday",
  actions: [
    {
      indexName: "nightwatchjs",
      pathsToMatch: ["http://nightwatchjs.org**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          "[data-uri='/'] section:not([data-page-uri='/']), [data-uri='/guide'] section:not([data-page-uri='/guide']), [data-uri='/api'] section:not([data-page-uri='/api']), [data-uri='/blog'] section:not([data-page-uri='/blog']), [data-uri='/contact'] section:not([data-page-uri='/contact']), [data-uri='/cloud'] section:not([data-page-uri='/cloud']), [data-uri='/gettingstarted'] section:not([data-page-uri='/gettingstarted']), [data-uri='/cloud'] section:not([data-page-uri='/cloud']), [data-uri='/api/$method'] section:not([data-page-uri='/api/$method']), a[title]";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-section h2",
            content:
              ".docs-section p, .docs-section li, .docs-section table td:last-child",
            lvl0: {
              selectors: ".jumbotron h1",
            },
            lvl2: ".docs-section h3",
            lvl3: ".docs-section h4, .docs-section table td:first-of-type",
            lvl4: ".docs-section h5",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    nightwatchjs: {
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
      separatorsToIndex: "_",
    },
  },
});