import React from 'react';
import './Slider.css';
const Slider = () => {
  return (
    <div className="wrap">
      <div className="slider">
        <button className="slider__prev-button toggle"></button>
        <button className="slider__next-button toggle "></button>
        <div className="slider__left-banner">
          <div className="slider__brand">
            <img src="img/brand.png" alt="brand" />
          </div>
          <div className="slider__title">
            <span>Stan Smith,</span>
            <span style={{color: 'black'}}>Forever!</span>
          </div>
          <button className="slider__purchase-button">КУПИТЬ</button>
        </div>
        <div className="slider__picture">
          <img src="img/slide.png" alt="slide" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
