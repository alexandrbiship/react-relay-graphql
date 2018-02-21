import React, { Component } from 'react';
import styles from './Loading.scss';

const LOADING_ICON = '/assets/images/icons/loading.svg';

class Loading extends Component {
  render() {
    return (
      <div className={styles.loading}>
        <svg viewBox='0 0 34 34' width='65' height='65'>
          <image width='34' height='34' xlinkHref={LOADING_ICON} />
        </svg>
      </div>
    )
  }
}

export default Loading;