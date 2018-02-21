/* eslint import/extensions: 0 */
// https://gist.github.com/Restuta/e400a555ba24daa396cc

import React from 'react';

import { propTypes, defaultProps } from './HeaderProps';
import HeaderLayout from './HeaderLayout.jsx';

class Header extends React.Component {
  static propTypes = propTypes
  static defaultProps = defaultProps

  constructor() {
    super();
    this.showHideHeader = this.showHideHeader.bind(this);
    this.state = { showHeader: false };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.showHideHeader);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.showHideHeader);
  }

  showHideHeader() {
    const doc = document.documentElement;
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    this.setState({ showHeader: top > 300 });
  }

  render() {
    const { showHeader } = this.state;
    return (
      <HeaderLayout showHeader={showHeader} />
    );
  }
}

export default Header;
