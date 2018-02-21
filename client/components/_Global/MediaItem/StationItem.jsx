import React from 'react';

import logRecent from 'client/helpers/logRecent';
import MediaItemLayout from './MediaItemLayout.jsx';

class StationItem extends React.Component {

  handleOnClick = () => {
    logRecent(this.props);
  }

  render() {
    return (
      <MediaItemLayout
        {...this.props}
        onClick={this.handleOnClick}
      />
    )
  }
}

export default StationItem;
