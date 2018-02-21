const config = {
  'dev': {
    GRAPHQL_URL: 'https://graph-stg.radio.com/graphql',
    GEO_URL: 'https://geo-stg.radio.com',
    NEWS_FEED_URL: 'https://apilegacy-stg.radio.com/feeds/latestMusicNews',
  },
  'stg': {
    GRAPHQL_URL: 'https://graph-stg.radio.com/graphql',
    GEO_URL: 'https://geo-stg.radio.com',
    NEWS_FEED_URL: 'https://apilegacy-stg.radio.com/feeds/latestMusicNews',
  },
  'prod': {
    GRAPHQL_URL: 'https://graph.radio.com/graphql',
    GEO_URL: 'https://geo.radio.com',
    NEWS_FEED_URL: 'https://apilegacy.radio.com/feeds/latestMusicNews',
  }
}

export default config[process.env.CONFIG];