import React from 'react';
import Slider from "react-slick";

const ResCart = ({ cartItems, increamentQuantity, decreamentQuantity, removeFromBasket, onClose }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }; 
  const quantity = cartItems.length;
  return (
    <div className='overlay'>
      <div className='shopping-card'>
      <i className="fa-solid fa-xmark card-delete" onClick={onClose}></i>
      <h1>корзина ({quantity})</h1>
      {cartItems.length === 0 && (
        <div className='cart-items-empty'>
          <h3 style={{textAlign: "center"}}>No items are added</h3>
        </div>
      )}
      {cartItems.length ? 
        <div className='cart-item-list'>
          {cartItems.map(item => ( 
            <div key={item.id} className="cart">
              <div className='cart-image'>
                <Slider {...settings}>
                  <div>
                    <img src={item.img1}/>
                  </div>
                  <div>
                    <img src={item.img2}/>
                  </div>
                </Slider>
              </div>
              <div className='cart-info'>
                <div className='cart-info-top'>
                  <p>{item.title}</p> 
                  <i className="fa-solid fa-xmark" onClick={() => removeFromBasket(item.id)}></i>
                </div>
                <div className='cart-info-bottom'>
                  <div className='item-inc-dec'>
                    <div className='minus-sign' onClick={() => decreamentQuantity(item.id)}>
                      <i className="fa-solid fa-minus"></i>
                    </div>
                    {item.quantity <= 0 ? <span>1</span> : <span>{item.quantity}</span>}
                    <div className='plus-sign' onClick={() => increamentQuantity(item.id)} style={{cursor: "pointer"}}>
                      <i className="fa-solid fa-plus"></i>
                    </div>
                  </div>
                  <p>{`${item.quantity >= 1 ? item.quantity : 1} * ${+item.price.slice(0, -8)}`}   руб.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      : null}
      <div className='footer-shopping-cart'>
        <div className='items-numbers'>
          <p>Товаров в корзине:</p>
          <p>{quantity} шт.</p>
        </div>
        <div className='items-total-price'>
          <p>Общая стоимость:</p>
          <p>1680 руб.</p>
        </div>
        <button>Оформить заказ</button>
      </div>
      </div>
    </div>
  );
};

export default ResCart;