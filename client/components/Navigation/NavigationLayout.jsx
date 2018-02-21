import React from "react";
import shortid from "shortid";
import styles from "./navigation.scss";
import { propTypes, defaultProps } from "./NavigationProps";

const ICONS = "fa fa-angle-down";

const STATIONS = {
  title: "Stations",
  href: "http://player.radio.com/station-directory/"
};
const PODCASTS = {
  title: "Podcasts",
  href: "http://http://podcast.radio.com/"
};
const NEWS = {
  title: "News",
  href: "http://player.radio.com/station-directory/newstalk"
};
const SPORTS = {
  title: "Sports",
  href: "http://player.radio.com/station-directory/sports"
};
const EVENTS = {
  title: "Events",
  href: "http://player.radio.com/station-directory/events"
};

const RECENT_STATIONS_TITLE = "Recent Stations";
const LOCAL_STATIONS_TITLE = "Local Stations";
const RADIO_GENRES_TITLE = "Genres";
const LOCAL_PODCASTS_TITLE = "Local Podcasts";
const NATIONAL_PODCASTS_TITLE = "National Podcasts";
const PODCAST_CATEGORIES_TITLE = "Podcast Categories";
const PODCAST_URL = "http://podcast.radio.com/audio/"


class NavigationLayout extends React.Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;



  render() {
    const {
      localStations,
      recStations,
      allGenres,
      popularPodcasts,
      localPodcasts,
      podcastCategories
    } = this.props;

    return (
      <div className={styles.navigation}>
        <div className={styles.primary}>
          <nav>
            <ul className={styles.items}>
              <li className={styles.stations}>
                <a href={STATIONS.href}>
                  {STATIONS.title}
                </a>
                <i className={ICONS} />
                <ul className={styles.stationsNav}>
                  <li className={styles.recent}>
                    <h3>
                      {RECENT_STATIONS_TITLE}
                    </h3>
                    {recStations.nodes.map(item =>
                      <span key={shortid.generate()}>
                        <img src={item.squareLogoSmall} alt={item.name} />
                        <a href={item.listenLiveUrl}>
                          {item.name}
                        </a>
                      </span>
                    )}
                  </li>
                  <li className={styles.local}>
                    <h3>
                      {LOCAL_STATIONS_TITLE}
                    </h3>
                    {localStations.nodes.map(item =>
                      <span key={shortid.generate()}>
                        <img src={item.squareLogoSmall} alt={item.name} />
                        <a href={item.listenLiveUrl}>
                          {item.name}
                        </a>
                      </span>
                    )}
                  </li>
                  <li className={styles.genres}>
                    <h3>
                      {RADIO_GENRES_TITLE}
                    </h3>
                    {allGenres.nodes.map(item =>
                      <span key={shortid.generate()}>
                        <a href="#">
                          {item.slug}
                        </a>
                      </span>
                    )}
                  </li>
                </ul>
              </li>
              <li className={styles.podcasts}>
                <a href={PODCASTS.href}>
                  {PODCASTS.title}
                </a>
                <i className={ICONS} />
                <ul className={styles.podcastsNav}>
                  <li>
                    <h3>
                      {LOCAL_PODCASTS_TITLE}
                    </h3>
                    {localPodcasts.nodes.map(item =>
                      <span key={shortid.generate()}>
                        <img src={item.image} alt={item.title} />
                        <a href={item.siteUrl}>
                          {item.title}
                        </a>
                      </span>
                    )}
                  </li>
                  <li>
                    <h3>
                      {NATIONAL_PODCASTS_TITLE}
                    </h3>
                    {popularPodcasts.nodes.map(item =>
                      <span key={shortid.generate()}>
                        <img src={item.image} alt={item.title} />
                        <a href={item.siteUrl}>
                          {item.title}
                        </a>
                      </span>
                    )}
                  </li>
                  <li className={styles.genres}>
                    <h3>
                      {PODCAST_CATEGORIES_TITLE}
                    </h3>
                    {podcastCategories.nodes.map(item =>
                      <span key={shortid.generate()}>
                        <a href={PODCAST_URL}>
                          {item.name}
                        </a>
                      </span>
                    )}
                  </li>
                </ul>
              </li>
              <li>
                <a href={NEWS.href}>
                  {NEWS.title}
                </a>
              </li>
              <li>
                <a href={SPORTS.href}>
                  {SPORTS.title}
                </a>
              </li>
              <li>
                <a href={EVENTS.href}>
                  {EVENTS.title}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
export default NavigationLayout;
