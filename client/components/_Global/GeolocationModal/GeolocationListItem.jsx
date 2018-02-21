import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

class GeolocationListItem extends Component {
  onClick = () => {
    const { node, setMarkets, onClose, saveGeolocation } = this.props;
    setMarkets(node);
    onClose();
    saveGeolocation();
  }

  render() {
    const { node } = this.props;
    return (
      <li key={shortid.generate()} onClick={this.onClick}>{node.name}</li>
    )
  }
}

GeolocationListItem.propTypes = {
  node: PropTypes.object,
  setMarkets: PropTypes.func,
  onClose: PropTypes.func,
  saveGeolocation: PropTypes.func,
}

GeolocationListItem.defaultProps = {
  node: {},
  setMarkets: () => null,
  onClose: () => null,
  saveGeolocation: () => null,
}

export default GeolocationListItem;