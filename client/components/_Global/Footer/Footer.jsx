import React from 'react';
import { Link } from 'react-router';
import shortid from 'shortid';

import styles from './footer.scss';

const COPYRIGHT = '© 2017 Entercom';
const FOOTER_LOGO = '/assets/images/logos/radiocom-logo-v2.png';
const APPSTORE = '/assets/images/badges/app_store_badge.png';
const GOOGLEPLAY = '/assets/images/badges/google_play_badge.png';
const APPSTORELINK = 'https://itunes.apple.com/us/app/radio-com/id323701765?mt=8';
const GOOGLEPLAYLINK = 'https://play.google.com/store/apps/details?id=com.radiocom&hl=en';

const LINKS = [
  {text: 'Careers', href: 'http://chk.tbe.taleo.net/chk05/ats/careers/searchResults.jsp?org=ENTERCOM&cws=1'},
  {text: 'Privacy Policy', href: 'https://s3.amazonaws.com/newsradiocom/privacy/index.html'},
  {text: 'Terms of Use', href: 'https://s3.amazonaws.com/newsradiocom/terms-of-use/index.html'},
  {text: 'Copyright Notice', href: 'http://www.entercom.com/wp-content/uploads/2016/01/Copyright_Notice2.pdf'},
  {text: 'Music Submission Policy', href: 'http://www.entercom.com/music-submission-policy'},
];

const SOCIALS = [
  {href: 'http://www.facebook.com/radiodotcom', image: '/assets/images/icons/footer/facebook.png'},
  {href: 'https://twitter.com/#!/radiodotcom', image: '/assets/images/icons/footer/twitter.png'},
  {href: 'http://news.radio.com/feed/rss/', image: '/assets/images/icons/footer/rss.png'},
];

const Footer = () =>
  <div className={styles.footer}>
    <div className={styles.background}>
      <div className={styles.top}>
        <Link to="/"><img className={styles.radioLogo} src={FOOTER_LOGO} alt="CBS Logo" /></Link>
        <div className={styles.share}>
          <div className={styles.social}>
            {SOCIALS.map(social =>
              <a key={shortid.generate()} href={social.href} target="_blank"><img alt="Social" src={social.image} /></a>
            )}
          </div>
          <a className={styles.appIcons} href={APPSTORELINK}><img alt="Apple" src={APPSTORE} /></a>
          <a className={styles.appIcons} href={GOOGLEPLAYLINK}><img alt="Google" src={GOOGLEPLAY} /></a>
        </div>
      </div>
      <div className={styles.links}>
        <ul className={styles.items}>
          {LINKS.map(item =>
            <li key={shortid.generate()}><a href={item.href}>{item.text}</a></li>
          )}
        </ul>
        <div>{COPYRIGHT}</div>
      </div>
    </div>
  </div>

export default Footer;
