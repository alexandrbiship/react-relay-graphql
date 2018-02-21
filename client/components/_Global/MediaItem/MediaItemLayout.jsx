import React from 'react';
import PropTypes from 'prop-types';
import defaultStyles from './MediaItemLayout.scss';

const MediaItemLayout = ({
  image,
  title,
  description,
  rhText,
  url,
  onClick,
  styles = defaultStyles
}) =>
  <div className={styles.mediaItem} onClick={onClick}>
    <a href={url}>
      <div className={styles.item}>
        {
          image
          ? <img alt='tile' src={image} />
          : <div className={styles.noImage} />
        }
        <div className={styles.info}>
          <section className={styles.center}>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
          </section>
          <div className={styles.rhText}>{rhText}</div>
        </div>
      </div>
    </a>
  </div>

  MediaItemLayout.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    rhText: PropTypes.string,
    url: PropTypes.string,
    onClick: PropTypes.func,
  }

  MediaItemLayout.defaultProps = {
    image: '',
    title: '',
    description: '',
    rhText: '',
    url: '',
    onClick: () => null,
  }

export default MediaItemLayout;
