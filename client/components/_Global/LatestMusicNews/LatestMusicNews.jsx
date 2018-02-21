/* eslint import/extensions: 0 */

import React from 'react';
import axios from 'axios';
import shortid from 'shortid';
import styles from './LatestMusicNews.scss';
import { NEWS_FEED_URL } from 'client/constants';

class LatestMusicNews extends React.Component {
  constructor() {
    super();
    this.state = {
      latestMusicNews: [],
    }
  }

  getLatestMusic = async () => {
    const { data } = await axios.get(NEWS_FEED_URL);
    return data;
  }

  componentDidMount = async () => {
    const latestMusicNews = await this.getLatestMusic();
    this.setState({ latestMusicNews });
  }

  render() {
    const { latestMusicNews } = this.state;
    if (latestMusicNews.length > 0) {
      return (
        <div className={styles.latestMusicNews}>
          <h2 className={styles.header}>Latest Music News</h2>
            <ul>
              {this.state.latestMusicNews.map(item => (
                <li key={shortid.generate()}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default LatestMusicNews;
