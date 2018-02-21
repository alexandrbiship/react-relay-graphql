/* eslint import/extensions: 0 */

import React from 'react';

import categoriesData from 'client/data/temp_categories_data.json';
import { propTypes, defaultProps } from './CategoriesProps';
import CategoriesLayout from './CategoriesLayout.jsx';


class Categories extends React.Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  componentDidMount() {
    this.props.categoriesLoad(categoriesData.category);
  };
  
  render() {
    const { categories } = this.props;
    return <CategoriesLayout heading="Browse Categories" subHeading="VIEW MORE" categories={categories} />;
  }
}

export default Categories;
