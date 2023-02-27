import React from 'react';
import { Link } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';


const DeliverService = () => {
  const containerStyle = {
    width: '100%',
    height: '100%'
  };
  const center = {
    lat: -3.745,
    lng: -38.523
  };
  const defaultState = {
    center: [55.751574, 55.573856],
    zoom: 10,
    // width: 100%,
  };
  

  return (
    <div className='deliver-service'>
      <div className='main-page-sides'>
        <div className='left-main-page'>
          <div className='left-main-page-items1'>
            <div className='left-main-page-title'>
              <img src='./assets/dropdown-image1.png'/>
              <p>Ингредиенты</p>
            </div>
            <div className='left-main-page-links'>
              <a href='#'>Закваски для сыра</a>
              <div className='dropdown-icon'></div>
            </div>
            <div className='left-main-page-links'>
              <a href='#'>Ферменты для сыра</a>
              <div className='dropdown-icon'></div>
            </div>
            <div className='left-main-page-links'>
              <a href='#'>Хлористый кальций</a>
            </div>
            <div className='left-main-page-links'>
              <a href='#'>Плесень для сыра</a>
              <div className='dropdown-icon'></div>
            </div>
            <div className='left-main-page-links'>
              <Link to="/products">Кисломолочные закваски</Link>
              <div className='dropdown-icon'></div>
            </div>
            <div className='left-main-page-links'>
              <a href='#'>Красители для сыра</a>
            </div>
            <div className='left-main-page-links'>
              <a href='#'>Специи для сыра</a>
              <div className='dropdown-icon'></div>
            </div>
          </div>
          <div className='left-main-page-items2'>
            <div className='left-main-page-title'>
              <img src='./assets/dropdown-image2.png'/>
              <p>Оборудование</p>
            </div>
            <div className='left-main-page-links'>
              <a href='#'>Формы для сыра</a>
              <div className='dropdown-icon'></div>
            </div>
            <div className='left-main-page-links'>
              <a href='#'>Латексное покрытие</a>
            </div>
            <div className='left-main-page-links'>
              <a href='#'>Воск для сыра</a>
            </div>
            <div className='left-main-page-links'>
              <a href='#'>Термоусадочные пакеты</a>
              <div className='dropdown-icon'></div>
            </div>
            <div className='left-main-page-links'>
              <a href='#'>Дренажные коврики</a>
            </div>
            <div className='left-main-page-links'>
              <a href='#'>Дренажные мешки и салфетки для прессования</a>
            </div>
            <div className='left-main-page-links'>
              <a href='#'>Дренажные контейнеры</a>
            </div>
          </div>
        </div>
        <div className='right-main-page'>
          <h2 className='right-page-main-title'>Доставка и оплата</h2>
          <h1 className='right-page-main-subtitle'>Способы оплаты:</h1>
          <div className='deliver-info-cards'>
            <div className='card'>
              <img src='./assets/deliver-service-icon1.png'/>
              <h1>Предоплата по счету</h1>
              <p>При оформлении заказа выберите в поле оплаты "счёт для юридических лиц" и введите реквизиты. Счет на оплату будет выслан на электронную почту.</p>
            </div>
            <div className='card'>
              <img src='./assets/deliver-service-icon3.png'/>
              <h1>Он-лайн оплата</h1>
              <p>Вы можете оплатить товар в интернет магазине банковской картой или с использованием платежных систем Яндекс-деньги и Web-money</p>
            </div>
            <div className='card'>
              <img src='./assets/deliver-service-icon2.png'/>
              <h1>Наличными при получении</h1>
              <p>Вы всегда можете оплатить заказ наличными – курьеру, на почте или при получении в транспортной компании.</p>
            </div>
          </div>
          <div className='deliver-address-map'>
            <div className='deliver-address'>
              <h1>Способы Доставки:</h1>
              <h3>Доставка по Новосибирску</h3>
              <p>
              Вы можете забрать товар из нашего магазина самостоятельно, приехав по адресу: 
              <span>г. Новосибирск, ул. Котовского, д. 12/1, офис 1</span>
              </p>
              <h4>Или заказать курьерскую доставку.Стоимость доставки – <span>150 рублей.</span></h4>
            </div>
            <div className='deliver_map'>
              <YMaps>
                <Map defaultState={defaultState}>
                  <Placemark geometry={[55.684758, 37.738521]} />
                </Map>
              </YMaps>
            </div>
          </div>
          <div className='deliver-info-russia'>
            <img src='../assets/deliver-service.png' />
            <div className='deliver-info-russia-text'>
              <h1>Доставка по Российской федерации </h1>
              <p>
                Доставка по РФ осуществляется логистическими службами <span>СДЭК и Почта России.</span>  
                В любой момент Вы можете отследить путь своего заказа по трек-номеру.
                Приблизительные сроки и стоимость доставки указаны в таблице ниже.
                Окончательная сумма зависит от веса и способа оплаты заказа 
                (при наложенном платеже – стоимость доставки выше) и рассчитывается автоматически в момент оформления.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='deliver-table'>
        <div className='table-title'>
          <h3>Почта России</h3>
          <h3>Транпортная компания СДЭК</h3>
          <h3>Пункт выдачи Boxberry</h3>
        </div>
        <div className='table-first-content'>
          <h2>Сроки доставки</h2>
          <p>От 7 дней</p>
          <p>2-4 дня</p>
          <p>2-4 дня</p>
        </div>
        <div className='table-second-content'>
          <h2>Стоимость доставки</h2>
          <p>От 200 руб.</p>
          <p>От 350 руб. Итоговая сумма будет рассчитана после указания точного адреса</p>
          <p>От 200 руб.</p>
        </div>
        <div className='table-third-content'>
          <h2>Бесплатная доставка</h2>
          <p>При заказе от 2000 руб.</p>
          <p>При заказе от 7000 руб.</p>
          <p>При заказе от 2000 руб.</p>
        </div>
      </div>
    </div>
  );
};

export default DeliverService;