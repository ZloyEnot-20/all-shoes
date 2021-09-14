import React from 'react';
import './Goods.css';
const Goods = () => {
  const arr = [
    1, 2, 2, 2, 2, 2, 2, 2, 2, 1,1,1,1,2,3,1,1
  ];
  return (
    <div className="goods-wrap">
      <div className="goods">
        <div className="goods__header">
          <span className="goods__title">Все кроссовки</span>
          <input type="text" className="goods__search" placeholder="Поиск..." />
        </div>

        <div className="goods__items-wrapper">
          {arr.map((item, i) => {
            return (
              <div className="goods__items" key={item + i}>
                
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Goods;
