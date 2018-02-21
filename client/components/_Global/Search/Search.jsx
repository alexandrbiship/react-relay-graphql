/* eslint import/extensions: 0 */

import React from 'react';
import {
  createRefetchContainer,
  graphql,
} from 'react-relay';

import debounce from 'helpers/debounce';
import { evalAnds } from 'helpers/logicReduce';
import SearchLayout from './SearchLayout.jsx';
import { propTypes, defaultProps } from './SearchProps';

// debouncing threshold in msec
const THRESHOLD = 125;

class Search extends React.Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  constructor() {
    super();
    this.state = {
      isHidden: true,
      noResults: true,
    };
  }

  componentDidMount() {
    window.addEventListener('click', this.hideResultsEvent, true);
    window.addEventListener('keydown', this.hideResultsEventEsc, true);
    this.hideSearchResults(true);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.hideResultsEvent, true);
    window.removeEventListener('keydown', this.hideResultsEventEsc, true);
  }

  hideSearchResults(isHidden) {
    this.setState({ isHidden });
  }

  clearSearch = () => {
    this.hideSearchResults(true);
    const searchBox = document.getElementById('li-tab-0');
    searchBox.value = '';
  }

  hideResultsEventEsc = e => {
    if (e.keyCode === 27) {
      this.setState({ isHidden: true });
    }
  }

  hideResultsEvent = e => {
    const searchBox = document.getElementById('li-tab-0');
    const resultsList = document.getElementById('search-list');
    const haveStations = this.props.stationsResults.searchStations.nodes.length;
    const havePodcasts =  this.props.podcastsResults.searchPodcasts.nodes.length;
    const hideConditions = [
      e.target !== searchBox,
      e.target !== resultsList,
    ];
    const showConditions = [
      e.target === searchBox,
      searchBox.value.length,
      (haveStations || havePodcasts),
    ];
    if (evalAnds(hideConditions)) {
      this.hideSearchResults(true);
    } else if (evalAnds(showConditions)) {
      this.hideSearchResults(false);
    }
  }

  fetchResults = search => {
    const refetchVariables = () => ({ search });
    this.props.relay.refetch(refetchVariables, null, () => {
      const stations = this.props.stationsResults.searchStations.nodes.length;
      const podcasts =  this.props.podcastsResults.searchPodcasts.nodes.length;
      const noResults = !(stations || podcasts);
      this.setState({
        isHidden: false,
        noResults,
      });
    });
  }

  debounceSearch = debounce(val => this.fetchResults(val), THRESHOLD);

  inputSearch = e => {
    const minInput = 3;
    const inputValue = e.target.value.trim();
    if (inputValue.length < minInput) {
      this.hideSearchResults(true);
    } else {
      this.debounceSearch(inputValue);
    }
  }

  focusTabs = e => {
    const key = e.key;
    const ix = e.target.tabIndex;
    const keyMap = {
      ArrowDown: 1,
      ArrowUp: -1,
    };
    const tabIx = ix + keyMap[key];
    if (tabIx >= 0 && keyMap[key] && document.getElementById(`li-tab-${tabIx}`)) {
      e.preventDefault();
      document.getElementById(`li-tab-${tabIx}`).focus();
    }
  }

  render() {
    const { isHidden, noResults } = this.state;
    return (
      <SearchLayout
        isHidden={isHidden}
        noResults={noResults}
        stationsResults={this.props.stationsResults}
        podcastsResults={this.props.podcastsResults}
        inputSearch={this.inputSearch}
        focusTabs={this.focusTabs}
        clearSearch={this.clearSearch}
      />
    );
  }
}

export default createRefetchContainer(Search,
  {
    stationsResults: graphql.experimental`
      fragment Search_stationsResults on Query
      @argumentDefinitions(
        search: {type: "String", defaultValue: ""},
        first: {type: "Int", defaultValue: "5"}
      ) {
        searchStations(search: $search, first: 5) {
          nodes {
            nodeId
            name
            format
            listenLiveUrl
            squareLogoSmall
            marketByMarketId {
              displayName
            }
          }
        }
      }
    `,
    podcastsResults: graphql.experimental`
      fragment Search_podcastsResults on Query
      @argumentDefinitions(
        search: {type: "String", defaultValue: ""},
        first: {type: "Int", defaultValue: "5"}
      ) {
        searchPodcasts(search: $search, first: 5) {
          nodes {
            nodeId
            title
            siteUrl
            image
            description
            podcastCategoriesByPodcastId {
              nodes {
                createdDate
                categoryByCategoryId{
                  name
                }
              }
            }
          }
        }
      }
    `
  },
  graphql.experimental`
    query SearchResultsRefetchQuery($search: String) {
      ...Search_stationsResults @arguments(search: $search)
      ...Search_podcastsResults @arguments(search: $search)
    }
  `,
);
