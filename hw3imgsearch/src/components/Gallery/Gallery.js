import React from 'react';
import PropTypes from 'prop-types';
import PhotoCard from '../PhotoCard/PhotoCard';
import s from './Gallery.module.css';

const Gallery = ({ images, onClick, openModal }) => {
  return (
    <>
      <ul className={s.gallery}>
        {images.map(image => (
          <li key={image.id} className={s.photocard}>
            <PhotoCard
              webformatURL={image.webformatURL}
              type={image.type}
              likes={image.likes}
              views={image.views}
              comments={image.comments}
              downloads={image.downloads}
              largeImageURL={image.largeImageURL}
              openModal={openModal}
            />
          </li>
        ))}
      </ul>
      <button type="button" className={s.button} onClick={onClick}>
        Load more
      </button>
    </>
  );
};

Gallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      comments: PropTypes.number.isRequired,
      downloads: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default Gallery;
