/* eslint import/extensions: 0 */

import React from 'react';
import shortid from 'shortid';

import { propTypes, defaultProps } from './CategoriesLayoutProps';
import styles from './categories.scss';

const VIEWMORE = 'http://player.radio.com/station-directory/'


const CategoriesLayout = ({ heading, subHeading, categories }) =>
  <div className={styles.category}>
    <div className={styles.heading}>
      <h2>{heading}</h2>
      <h3><a href={VIEWMORE}>{subHeading}</a></h3>
    </div>
    <ul className={styles.container}>
      {categories.map(category =>
        <li key={shortid.generate()}>
          <a href={category.url}>
            <img className={styles.thumbnail} src={category.image} />
            <span className={styles.title}>{category.title}</span>
          </a>
        </li>
      )}
    </ul>
  </div>;
  

CategoriesLayout.propTypes = propTypes;
CategoriesLayout.defaultProps = defaultProps;

export default CategoriesLayout;
