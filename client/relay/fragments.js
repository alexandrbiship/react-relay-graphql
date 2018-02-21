import { graphql } from 'react-relay';

const stationFields = graphql`
fragment fragments_stationFields on Station {
  name
  listenLiveUrl
  squareLogoSmall
  marketByMarketId {
    displayName
  }
  stationGenresByStationId {
    nodes {
      genreByGenreId {
        name
      }
    }
  }
}`;

const localStations = graphql`
fragment fragments_localStations on Query {
  localStationsData: popularStationsByMarketId(id: $marketId, first: 4) {
    nodes {
      ...fragments_stationFields @relay(mask: false)
    }
  }
}`;

const recStations = graphql`
fragment fragments_recStations on Query {
  recStationsData: recommendedStationsByMarketId(id: $marketId, first: 4) {
    nodes {
      ...fragments_stationFields @relay(mask: false)
    }
  }
}`;