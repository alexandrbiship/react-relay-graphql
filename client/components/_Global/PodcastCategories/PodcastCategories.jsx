import React from 'react';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import PodcastCategory from './PodcastCategory.jsx';
import styles from './PodcastCategories.scss';

class PodcastCategories extends React.Component {
  static propTypes = {
    data: PropTypes.object,
  }

  static defaultProps = {
    data: {},
  }

  render() {
    const { data } = this.props;
    return (
      <div className={styles.podcastCategories}>
        {data.podcastCategoriesData.nodes.map(category =>
          <PodcastCategory
            key={shortid.generate()}
            categoryName={category.name}
            categoryPodcasts={category.podcastCategoriesByCategoryId.nodes}
          />
        )}
      </div>
    );
  }
}

export default createFragmentContainer(PodcastCategories, graphql`
fragment PodcastCategories on Query {
  podcastCategoriesData: allCategories {
    nodes {
      name
      podcastCategoriesByCategoryId(first: 4) {
        nodes {
          podcastByPodcastId {
            title
            description
            image
            siteUrl
          }
        }
      }
    }
  }
}`);