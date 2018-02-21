import React from 'react';

import * as C from 'client/constants';
import { isMobile } from 'client/helpers';
import PropTypes from 'prop-types';
import styles from './Ad.scss';

const AD_SLOT = C.DOUBLECLICK_PREFIX + C.AD_UNIT;
let googletag = null;

function initGooglePublisherTag() {
  if (!googletag) {
    googletag = window.googletag = window.googletag || {};
    googletag.cmd = googletag.cmd || [];

    googletag.cmd.push(() => {
      // Infinite scroll requires SRA
      googletag.pubads().enableSingleRequest();

      // collapse div without ad
      googletag.pubads().collapseEmptyDivs();

      // load ad with slot refresh
      googletag.pubads().disableInitialLoad();

      // enable google publisher tag
      googletag.enableServices();
    });
  }
}

class Ad extends React.Component {
  static propTypes = {
    adId: PropTypes.string,
    type: PropTypes.string,
    hrFrame: PropTypes.bool,
  }

  static defaultProps = {
    adId: '',
    type: '',
    hrFrame: false,
  }

  constructor(props) {
    super(props);
    this.state = {
      tempSlot: {},
      refreshCount: 0,
    };
  }

  componentDidMount() {
    initGooglePublisherTag();
    googletag.cmd.push(() => {
      this.defineAd();
    });
    // TODO: get 'refreshInterval' working
    // this.refreshInterval();
  }

  shouldComponentUpdate() {
    // Important: will not re-render parent div when setState is called, allowing to refresh ads
    return false;
  }

  defineAd() {
    // Defines the ad slot
    const { adId, type } = this.props;
    const adSizes = isMobile() ? C.MOBILE_DIMS[type] : C.DIMS[type];
    const slot = googletag.defineSlot(AD_SLOT, adSizes, adId);
    slot.setTargeting('tag', C.TAGS);
    slot.addService(googletag.pubads());
    this.setState({
      tempSlot: slot,
    }, () => {
      this.displayAd();
    });
  }

  displayAd() {
    // Displays the ad slot
    googletag.display(this.props.adId);
    googletag.pubads().refresh([this.state.tempSlot]);
  }

  refreshInterval() {
    // Refreshes the timer
    this.clearInterval();
    this.adInterval = setTimeout(() => {
      this.refreshAds();
    }, C.AD_REFRESH_INTERVAL);
  }

  clearInterval() {
    if (this.adInterval) {
      clearInterval(this.adInterval);
      this.adInterval = null;
    }
  }

	refreshAds(once) {
    if (!once) this.refreshInterval();
    this.setState({
      refreshCount: this.state.refreshCount + 1,
    }, () => {
      // console.log('refreshCount:', this.state.refreshCount, this.state.tempSlot);
    });
    googletag.cmd.push(() => {
      const slot = this.state.tempSlot;
      slot.setTargeting('tag', C.TAGS)
        .setTargeting('refresh', this.state.refreshCount.toString());
      googletag.pubads().refresh([slot]);
      // TODO: '.refresh()' seems to jump the page to the top
      // return false;
    });
  }

  render() {
    const { adId, type, hrFrame } = this.props;
    if (window.canRunAds) {
      return (
        <div className={styles.ad}>
          { hrFrame
            ?
            <div className={styles.adFrame}>
              <hr />
                <div className={styles[type]} id={adId} />
              <hr />
            </div>
            :
            <div className={styles[type]} id={adId} />
          }
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Ad;
