import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logRecent from 'client/helpers/logRecent';
import styles from '../Search/search.scss';

class PodcastSearchResult extends Component {
  static propTypes = {
    node: PropTypes.object,
    index: PropTypes.number,
    focusTabs: PropTypes.func,
    stationsResultsLength: PropTypes.number,
    clearSearch: PropTypes.func,
  }

  static defaultProps = {
    node: {},
    index: 0,
    focusTabs: () => null,
    stationsResultsLength: 0,
    clearSearch: () => null,
  }

  constructor(props) {
    super(props);
    const { node } = this.props;
    this.data = {
      title: node.title,
      description: node.description,
      rhText: node.podcastCategoriesByPodcastId.nodes.length ?
        node.podcastCategoriesByPodcastId.nodes[0].categoryByCategoryId.name : 'Podcast',
      image: node.image,
      url: node.siteUrl,
    };
  }

  handleClick = () => {
    logRecent(this.data);
    this.props.clearSearch();
  };

  render() {
    const { index, focusTabs, stationsResultsLength } = this.props;
    return (
      <a href={this.data.url}
        id={`li-tab-${(index + stationsResultsLength + 1).toString()}`}
        tabIndex={index + stationsResultsLength + 1}
        onKeyDown={focusTabs}
        className={styles.listItem}>
        <div className={styles.itemLeft}>{this.data.title}</div>
        <div className={styles.itemRight}>{this.data.rhText} ></div>
      </a>
    )
  }
}

export default PodcastSearchResult;