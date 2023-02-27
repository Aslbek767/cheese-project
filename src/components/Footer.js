import React from 'react';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-info-links-help'>
        <div className='additional-info'>
          <img src='./assets/Logo.svg'/>
          <p>Все материалы данного сайта<br/> являются объектами авторского<br/> права.</p>
          <h3>Разработка сайта: ЛяЧиз</h3>
        </div>
        <div className='footer-links'>
          <h1>Компания</h1>
          <a href='#' className='first-footer-child-link'>О компании</a>
          <a href='#'>Акции и скидки</a>
          <a href='#'>Доставка и оплата</a>
          <a href="#">Отзывы</a>
          <a href='#'>Гарантия и возврат</a>
        </div>
        <div className='footer-help-section'>
          <h1>Поддержка</h1>
          <a href='#' className='first-footer-child-link'>Вопрос-ответ</a>
          <a href='#'>Бонусная программа</a>
          <a href='#'>Политика конфиденциальности</a>
          <a href="#">Персональные данных</a>
        </div>
      </div>
      <div className='footer-address-payments'>
        <div className='footer-payments-logos'>
          <h3>Способы оплаты</h3>
          <img src='./assets/Ruble.svg'/>
          <img src='./assets/Vector.svg'/>
          <img src='./assets/Sberbank.svg'/>
          <img src='./assets/Yandex.svg'/>
          <br/>
          <img src='./assets/Mastercard.svg'/>
          <img src='./assets/Visa.svg'/>
        </div>
        <div className='footer-address-section'>
          <h1>+7 495 120-00-00</h1>
          <div className='footer-time'>
            <i className="fa-regular fa-clock"></i>
            <p>Пн-пт 9:00 - 19:00</p>
          </div>
          <div className='footer-location'>
            <img src='./assets/location.png'/>
            <p>г. Москва, улица Свободы 1/7</p>
          </div>
          <div className='footer-social-media-icons'>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-vk"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-square-facebook"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;