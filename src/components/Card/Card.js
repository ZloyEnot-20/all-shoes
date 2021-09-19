import React from 'react';
import './Card.css';
import { ReactComponent as Chosen } from '../SVG/added.svg';
import { ReactComponent as Add } from '../SVG/add.svg';

const Card = ({id, price, title}) => {
  const [added, setAdded] = React.useState(false);
    
  const handleAdded = () => {
    setAdded((prev) => !prev);
  };

  return (
    <div className="goods__items">
      <div className="goods__image-wrap">
        <div className="goods__item-favourite"></div>
        <img src={`img/image${id}.png`} alt="image1" />
      </div> 
      <div className="goods__item-title">
        <span>{title}</span>
      </div>
      <div className="goods__item-pricing">
        <div className="goods__item-price">
          <span className="goods__item-value">Цена:</span>
          <span>{price}</span>
        </div>
        <div className="goods__item-add">
          {added ? (
            <Chosen className="goods__item-add-button" onClick={handleAdded} />
          ) : (
            <Add className="goods__item-add-button" onClick={handleAdded} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
