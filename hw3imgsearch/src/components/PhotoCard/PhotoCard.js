import React from 'react';
import PropTypes from 'prop-types';
import s from './PhotoCard.module.css';

const PhotoCard = ({
  type,
  likes,
  views,
  comments,
  downloads,
  webformatURL,
  largeImageURL,
  openModal,
}) => (
  <div className={s.photoCard}>
    <img className={s.img} src={webformatURL} alt={type} />
    <div className={s.stats}>
      <p className={s.statsItem}>
        <i className="material-icons">thumb_up</i>
        {likes}
      </p>
      <p className={s.statsItem}>
        <i className="material-icons">visibility</i>
        {views}
      </p>
      <p className={s.statsItem}>
        <i className="material-icons">comment</i>
        {comments}
      </p>
      <p className={s.statsItem}>
        <i className="material-icons">cloud_download</i>
        {downloads}
      </p>
    </div>
    <button
      onClick={() => openModal(largeImageURL)}
      type="button"
      className={s.fullscreenButton}
    >
      <i className="material-icons" style={{ pointerEvents: 'none' }}>
        zoom_out_map
      </i>
    </button>
  </div>
);

PhotoCard.propTypes = {
  type: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  downloads: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default PhotoCard;
