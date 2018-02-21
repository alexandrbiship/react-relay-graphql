import React, { Component } from 'react';
import shortid from 'shortid';
import styles from './GeolocationModal.scss';
import Modal from '../Modal/Modal.jsx';
import GeolocationListItem from './GeolocationListItem.jsx';
import allMarkets from '../../../data/markets';
import { propTypes } from './GeolocationModalProps';

class GeolocationModal extends Component {
  static propTypes = propTypes;

  // do not have access to the <body> to add or remove css classes
  componentDidMount() {
    document.documentElement.style.height = '100%';
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.position = 'relative';
    window.addEventListener('keydown', this.handleEsc, true);
    window.addEventListener('click', this.handleClickOutsideModal, true);
  }

  componentWillUnmount() {
    document.documentElement.style.height = null;
    document.documentElement.style.overflow = null;
    document.documentElement.style.position = null;
    window.removeEventListener('keydown', this.handleEsc, true);
    window.removeEventListener('click', this.handleClickOutsideModal, true);
  }

  getGeolocation = async () => {
    const { fetchGeolocation, toggleGeolocationModal } = this.props;
    await fetchGeolocation();
    toggleGeolocationModal();
  }

  handleClickOutsideModal = (e) => {
    const { toggleGeolocationModal } = this.props;
    const background = document.getElementById('modal-background');
    if (e.target.id === background.id) {
      toggleGeolocationModal();
    }
  }

  handleEsc = (e) => {
    const { toggleGeolocationModal } = this.props;
    if (e.keyCode === 27) {
      toggleGeolocationModal();
    }
  }

  render() {
    const {
      toggleGeolocationModal,
      setMarkets,
      saveGeolocation,
    } = this.props;
    return (
      <Modal key={shortid.generate()} onClose={toggleGeolocationModal}>
        <div className={styles.geolocationModal}>
          <h2>Change Location</h2>
          <button onClick={this.getGeolocation}>Use Current Location</button>
          <h3>All Other Markets</h3>
          <div className={styles.geolocationList}>
            <ul className={styles.markets}>
              { allMarkets.edges.map(({node}) => (
                <GeolocationListItem
                  key={shortid.generate()}
                  node={node}
                  setMarkets={setMarkets}
                  onClose={toggleGeolocationModal}
                  saveGeolocation={saveGeolocation}
                />
              )) }
            </ul>
          </div>
        </div>
      </Modal>
    )
  }
}

export default GeolocationModal;
// export default createFragmentContainer(GeolocationModal, graphql`
//   fragment GeolocationModal_allMarkets on Query {
//     allMarketsData: allMarkets {
//   	  edges {
//   	    node {
//   	      id
//           name
//           displayName
//           stateFull
//   	    }
//   	  }
//   	}
//   }
// `);