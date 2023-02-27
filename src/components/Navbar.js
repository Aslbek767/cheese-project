import { useState } from 'react';
import { Link } from 'react-router-dom';
import Questions from './Questions';
import Cart from './Cart';
import ResCart from './ResCart';
import MainPage from './MainPage';

const Navbar = ({cartItems, removeFromBasket, increamentQuantity, decreamentQuantity, setQuery}) => {
  const [clicked, setClicked] = useState(false);
  const [cartClick, setCartClick] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const handleClick = () => {
    setClicked(prev => !prev)
  }
  const HandleCartClick = () => {
    setCartClick(prev => !prev)
  }
  if(openModal){
    console.log(false)
  }else{
    console.log(true)
  }
  
  return (
    <nav>
      {openModal ? <ResCart onClose={() => setOpenModal(false)} cartItems={cartItems} removeFromBasket={removeFromBasket} increamentQuantity={increamentQuantity} decreamentQuantity={decreamentQuantity}/> : ""}
      {cartClick ? <Cart cartItems={cartItems} removeFromBasket={removeFromBasket} increamentQuantity={increamentQuantity} decreamentQuantity={decreamentQuantity}/> : ""}
      <div className='nav-top'>
        <div className='nav-top-info'>
          <label>
            <i className="fa-solid fa-location-dot"></i>
            Ваш город:
            <select>
              <option selected>Москва</option>
              <option>Иркутск</option>
              <option>Казань</option>
              <option>Сочи</option>
            </select>
          </label>
          <div className='nav-top-time'>
            <i className="fa-regular fa-clock"></i>
            <span>Пн-Пт 9:00 - 19:00</span>
          </div>
        </div>
        <div className='nav-top-links'>
          <a href="">О компании</a>
          <a href="">Преимущества</a>
          <a href="">Акционные товары</a>
          <div className='nav-top-account'>
            <img src='./assets/account.png'/>
            <span>Войти в аккаунт</span>
          </div>
        </div>
      </div>
      <div className='middle-nav'>
        <div className='middle-left-side'>
            <img src='./assets/Logo.svg' className='main-logo'/>
            <div className='middle-nav-services'>
              <div className='middle-nav-service'>
                <img src='./assets/доставка.svg'/>
                <span>Бесплатная доставка</span>
              </div>
              <div className='middle-nav-service'>
                <img src='./assets/Скидка.svg'/>
                <span>Скидка при оплате на сайте</span>
              </div>
              <div className='middle-nav-service'>
                <img src='./assets/protection.svg'/>
                <span>Защита покупателeй</span>
              </div>
            </div>
        </div>  
        <div className='middle-nav-space'>
          <div className='middle-right-side'>
            <div className='middle-nav-icons'>
              <img src='./assets/telegram.png'/>
              <img src='./assets/WhatsUp.svg'/>
              <img src='./assets/Messenger.svg'/>
            </div>
            <div className='middle-nav-call'>
              <h3>+8 916 460-19-60</h3>
              <button>
                <img src='./assets/call.png'/>
                <span>Заказать звонок</span>
              </button>
            </div>
          </div>
          <div className='middle-shopCard'>
            <div className='middle-shopCard-info'>
              <p>Ваша корзина<br/><span>1680 руб.</span></p>
            </div>
            <div>
              <p className='shopping-card-length'>{cartItems.length}</p>
              <img onClick={HandleCartClick} src='./assets/shopping-card.svg'/>
            </div>
          </div>
        </div>
      </div>
      <div className='lower-nav'>
        <div className='lower-nav-left-side'>
          <select>
            <option selected disabled className='main-option'>Рецепты</option>
            <option>Молодые сыры</option>
            <option>Полутвердые сыры</option>
            <option>Паста Филата</option>
            <option>Сыры с плесенью</option>
            <option>Твердые сыры</option>
            <option>Творожные сыры</option>
            <option>Кисломолочные продукты</option>
            <option>Все рецепты</option>
          </select>
          <div className='lower-nav-links'>
            <Link to="/Доставка">Доставка и оплата</Link>
            <a href='#'>Калькулятор Сыродела</a>
            <a href='#'>Отзывы</a>
            <Link to="/questions">Вопросы и ответы</Link>
            <Link to="/contact">Контакты</Link>
          </div>
        </div>
        <div className='lower-nav-search-bar'>
          <label>
            <i className="fa-solid fa-magnifying-glass"></i>
          </label>
          <input onChange={e => setQuery(e.target.value)} type="text" placeholder='Введите название товара или артикул'/>
        </div>
      </div>
      <div className='responsive-nav'>
        {clicked ? 
        <div className='responsive-nav-links'>
          <a href="" className='first-child-nav'>О компании</a>
          <a href="">Преимущества</a>
          <a href="">Акционные товары</a>
          <Link to="/Доставка">Доставка и оплата</Link>
          <a href='#'>Калькулятор Сыродела</a>
          <a href='#'>Отзывы</a>
          <Link to="/questions">Вопросы и ответы</Link>
          <Link to="/contact">Контакты</Link>
        </div> : ""}
        {/* <i className="fa-solid fa-magnifying-glass"></i> */}
        <img src='./assets/Logo.svg' className='main-logo'/>
        <div className='lower-nav-search-bar'>
          <i className={!clicked ? "fa-sharp fa-solid fa-bars" : "fa-sharp fa-solid fa-xmark"}  onClick={handleClick}></i>
        </div>
        {/* <i className={!clicked ? "fa-sharp fa-solid fa-bars" : "fa-sharp fa-solid fa-xmark"} onClick={handleClick}></i> */}
        <div className='cart-shopping'>
          <i onClick={() => setOpenModal(prev => !prev)}   className="fa-solid fa-cart-shopping"></i>
        </div>
      </div>
    </nav>
  );
};



export default Navbar;
