/* eslint import/extensions: 0 */

import React from 'react';
import PodcastSearchResult from './PodcastSearchResult.jsx';
import StationSearchResult from './StationSearchResult.jsx';
import { propTypes, defaultProps } from './SearchLayoutProps';
import styles from './search.scss';

const PLACEHOLDER = 'Search: Find a station or podcast.';
const searchIcon = 'assets/images/icons/search_icon.png';

const SearchLayout = ({
  isHidden,
  noResults,
  stationsResults,
  podcastsResults,
  inputSearch,
  focusTabs,
  clearSearch,
}) =>
  <div className={styles.search}>
    <img alt="search" src={searchIcon} className={styles.mag} />
    <input
      id="li-tab-0"
      type="text"
      className={styles.searchInput}
      onChange={inputSearch}
      onKeyDown={focusTabs}
      tabIndex="0"
      placeholder={PLACEHOLDER} />
    <div id="search-list" className={styles.list} {...isHidden ? {hidden: 'true'} : {}}>
    {
      noResults
      ? <div className={styles.listItem} >
          <div className={styles.noItemsMessage}>
            No matches
          </div>
        </div>
      : stationsResults.searchStations.nodes.map((node, i) =>
        <StationSearchResult
          key={node.nodeId}
          node={node}
          index={i}
          focusTabs={focusTabs}
          clearSearch={clearSearch}
        />
      )
    }
    {
      podcastsResults.searchPodcasts.nodes.map((node, i) =>
        <PodcastSearchResult
          key={node.nodeId}
          node={node}
          index={i}
          focusTabs={focusTabs}
          stationsResultsLength={stationsResults.searchStations.nodes.length}
          clearSearch={clearSearch}
        />
      )
    }
    </div>
  </div>

SearchLayout.propTypes = propTypes;
SearchLayout.defaultProps = defaultProps;

export default SearchLayout;
