import React from 'react';
import './Header.css';
import { ReactComponent as Store } from '../SVG/store.svg';
import { ReactComponent as Favourites } from '../SVG/favourites.svg';
import { ReactComponent as Union } from '../SVG/Union.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="header__title">
        <div className="header__logo">
          <img src="img/logo.png" alt="logo" />
        </div>

        <div className="header__description">
          <span className="header__name">ALL SHOES</span>
          <span className="header__info">Магазин лучших кроссовок</span>
        </div>
      </div>

      {/* header__menu */}

      <div className="header__menu">
        <div className="header__navs">
          <div className="header__bin-icon">
            <Store className="header__store tabs" />
          </div>
          <div className="header__price">1205 руб.</div>

          <div className="header__favourites">
            <Favourites className="header__chosen tabs" />
          </div>
          <div className="header__user-info">
            <Union className="header__union tabs" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
