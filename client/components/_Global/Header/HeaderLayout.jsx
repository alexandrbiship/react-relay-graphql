import React from 'react';
import { Link } from 'react-router';

import { propTypes, defaultProps } from 'prop-types';
import { CBS_RADIO_LOGO } from 'client/constants';
import styles from './header.scss';

import GeolocationContainer from '../Geolocation/GeolocationContainer';

const HeaderLayout = ({
	showHeader
}) =>
	<div className={styles.headerContainer + (showHeader ? ` ${styles.showHeader}` : '')} >
		<div className={styles.header}>
			<Link to="/"><img className={styles.cbsLogo} src={CBS_RADIO_LOGO} alt="CBS Logo" /></Link>
			<div className={styles.geolocation}>
				<GeolocationContainer />
			</div>
		</div>
	</div>

HeaderLayout.propTypes = propTypes;
HeaderLayout.defaultProps = defaultProps;

export default HeaderLayout;
