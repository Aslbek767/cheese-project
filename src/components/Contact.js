import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const Contact = () => {
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
    <div className='contact-page'>
      <div className='left-contact'>
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
      <div className='right-contact'>
        <h1>Контакты</h1>
        <div className='contacts'>
          <div className='contact-number'>
            <h4>Телефон:</h4>
            <h2>+7 9851425151</h2>
            <h2>+7 9851425151</h2>
          </div>
          <div className='contact-time'>
            <h4>Мы работаем:</h4>
            <p>Понедельник-пятница — 
            <span>с 10:00 до 18:00</span>
            суббота — выходной
            воскресенье — выходной</p>
          </div>
          <div className='contact-email'>
            <h4>с 10:00 до 18:00</h4>
            <p>По вопросам связанным с заказами: <br/>zakaz@lacheese.ru<br/> По вопросам сотрудничества:<br/> opt@lacheese.ru</p>
          </div>
        </div>
        <div className='contact-address'>
          <div className='office-address'>
            <h4>Фактический адрес<br/> офиса:</h4>
            <p>г. Москва,<br/>  улица Свободы 1/7</p>
          </div>
          <div className='bank-card'>
            <h4>Юр.лицо:</h4>
            <p>
            ИП Андреева Виктория Алексеевна,<br/> 
            ИНН 701913850104, <br/>
            ОГРНИП 315501955500072
            </p>
          </div>
          <div className='full-address'>
            <h4>Юр. адрес:</h4>
            <p>
              119048, Россия, Московская область, 
            г. Лужники, Центральная ул., 17-15
            </p>
          </div>
        </div>
        <div className='form-submit-map'>
          <div className='form-submit'>
            <h4>Остались вопросы?</h4>
            <p>Заполните форму и мы вам ответим</p>
            <div className='form-inputs'>
              <input type="text" className='name' placeholder='Ваше Имя'/>
              <input type="email" className='email' placeholder='Email'/>
              <textarea name="" id="" cols="60" rows="60" className='comment' placeholder='Сообщение или вопрос'/>
              <button type="submit" >Submit</button>
            </div>
          </div>
          <div className='deliver_map'>
            <YMaps>
              <Map defaultState={defaultState}>
                <Placemark geometry={[55.684758, 37.738521]} />
              </Map>
            </YMaps>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;