new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://developers.messagebird.com/docs/",
    "https://developers.messagebird.com/",
    "https://developers.messagebird.com/quickstarts/",
  ],
  renderJavaScript: true,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://developers.messagebird.com/**"],
  schedule: "at 10:00 on Thursday",
  actions: [
    {
      indexName: "messagebird",
      pathsToMatch: ["https://developers.messagebird.com/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "[class^='Default__PageSection'] h1",
            content:
              "[class^='Default__PageSection'] p, [class^='Default__PageSection'] li, [class^='Default__PageSection'] table td:last-of-type",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "[class^='Default__PageSection'] h2",
            lvl3: "[class^='Default__PageSection'] h3",
            lvl4: "[class^='Default__PageSection'] h4",
            lvl5: "[class^='Default__PageSection'] table td:first-of-type",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "messagebird",
      pathsToMatch: ["https://developers.messagebird.com/quickstarts/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "[class^='Default__PageSection'] h1",
            content:
              "[class^='Default__PageSection'] p, [class^='Default__PageSection'] li, [class^='Default__PageSection'] table td:last-of-type",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "[class^='Default__PageSection'] h2",
            lvl3: "[class^='Default__PageSection'] h3",
            lvl4: "[class^='Default__PageSection'] h4",
            lvl5: "[class^='Default__PageSection'] table td:first-of-type",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    messagebird: {
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