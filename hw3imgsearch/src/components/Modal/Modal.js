import React from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

const Modal = ({ imgUrl, onClick }) => {
  return (
    <div onClick={onClick} className={s.basicLightbox}>
      <div className={s.modalContent}>
        <img src={imgUrl} width="800" height="600" alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Modal;
