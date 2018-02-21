import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logRecent from 'client/helpers/logRecent';
import styles from '../Search/search.scss';

class StationSearchResult extends Component {

  handleClick = () => {
    const { node, clearSearch } = this.props;
    logRecent({
      title: node.name,
      description: node.marketByMarketId.displayName,
      rhText: node.format,
      image: node.squareLogoSmall,
      url: node.listenLiveUrl,
    });
    clearSearch();
  };

  render() {
    const { node, index, focusTabs } = this.props;
    return (
      <a href={node.listenLiveUrl}
        onClick={this.handleClick}
        id={`li-tab-${(index + 1).toString()}`}
        tabIndex={index + 1}
        onKeyDown={focusTabs}
        className={styles.listItem}>
        <div className={styles.itemLeft}>{node.name}</div>
        <div className={styles.itemRight}>{node.marketByMarketId.displayName}{node.marketByMarketId.displayName ? ' - ' : ''}{node.format} ></div>
      </a>
    )
  }
}

StationSearchResult.propTypes = {
  node: PropTypes.object,
  index: PropTypes.number,
  focusTabs: PropTypes.func,
  clearSearch: PropTypes.func,
}

StationSearchResult.defaultProps = {
  node: {},
  index: 0,
  focusTabs: () => null,
  clearSearch: () => null,
}

export default StationSearchResult;