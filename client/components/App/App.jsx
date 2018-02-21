import React from 'react';
import {
  QueryRenderer,
  graphql
} from 'react-relay';
import environment from 'client/relay/environment';
import PropTypes from 'prop-types';

import Header from 'client/components/_Global/Header/Header.jsx';
import Loading from '../_Global/Loading/Loading.jsx';
import styles from './app.scss';

const AppQuery = graphql`
  query AppQuery ($marketId: Int) {
    ...fragments_localStations @relay(mask: false)
    ...fragments_recStations @relay(mask: false)
  }
`;

class App extends React.Component {
  render() {
    const { marketId, children } = this.props;
    return (
      <QueryRenderer
        environment={environment}
        query={AppQuery}
        variables={{
          search: '',
          marketId,
        }}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            const childrenWithProps = React.Children.map(children,
              (child) => React.cloneElement(child, {
                appData: props
              })
            );
            return (
              <div className={styles.main}>
                <Header
                  localStations={props.localStationsData}
                  recStations={props.recStationsData}
                />
                <div className={styles.content}>
                  { childrenWithProps }
                </div>
              </div>
            )
          }
          return <Loading />
        }}
      />
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  marketId: PropTypes.number,
};

App.defaultProps = {
  marketId: 14,
};

export default App;
