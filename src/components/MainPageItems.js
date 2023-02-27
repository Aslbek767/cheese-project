import {useState, useEffect} from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import MainPageInfo from './MainPageInfo';

const MainPageItems = ({ cartItems, handleAddProduct, query }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then(item => item.json())
      .then(data => setData(data))
  }, [])
  // console.log(query)
  return (
    <>
      <div className='main-page-items'>
        <div className='main-page-items-gallery'>
          <div className='first-gallery'>
            <h1>Наборы для сыроделия</h1>
            <p>Все что вам нужно для приготовления сырав домашних условиях</p>
            <button>Смотреть наборы</button>
          </div>
          <div className='second-gallery'>
            <p>Рецепты</p>
            <h2>Сыры с плесенью</h2>
          </div>
          <div className='third-gallery'>
            <p>Акции</p>
            <h2>закваски для сыра</h2>
          </div>
        </div>
        <div className='main-page-main-items'>
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
          <div className='right-main-page-items'>
            <div className='right-main-page-items-filter'>
              <h2>Популярные товары</h2>
              <h2>Акции</h2>
            </div>
            <div className='main-page-main-list-items'>
              <h1>Ингредиенты</h1>             
              <div className='main-items'>
                {data.filter((val) => {
                  if(query == ""){
                    return val
                  }
                  else if(val.title.toLowerCase().includes(query.toLowerCase()) || val.price.toString().includes(query) || val.discount.toString().includes(query) ){
                    return val
                  }
                }).map((item) => 
                  <div className='card' key={item.id}>
                    <div className='card-image'>
                      <Slider {...settings}>
                        <div>
                          <img src={item.img1}/>
                        </div>
                        <div>
                          <img src={item.img2}/>
                        </div>
                      </Slider>
                    </div>
                    <h3>{item.title}</h3>
                    <div className='card-footer'>
                      <div className='card-price-discount'>
                        <h4>{item.price}</h4>
                        <p>{item.discount}</p>
                      </div>
                      <button onClick={() => handleAddProduct(item)}>Добавить</button>
                    </div>
                  </div>
                  )}
                </div>             
            </div>
            <div className='main-page-main-list-items'>
              <h1>Оборудование</h1>
                <div className='main-items'>
                  {data.filter((val) => {
                    if(query == ""){
                      return val
                    }
                    else if(val.title.toLowerCase().includes(query.toLowerCase()) || val.price.toString().includes(query) || val.discount.toString().includes(query) ){
                      return val
                    }
                  }).map((item) => 
                    <div className='card' key={item.id}>
                      <div className='card-image'>
                        <Slider {...settings}>
                          <div>
                            <img src={item.img1}/>
                          </div>
                          <div>
                            <img src={item.img2}/>
                          </div>
                        </Slider>
                      </div>
                      <h3>{item.title}</h3>
                      <div className='card-footer'>
                        <div className='card-price-discount'>
                          <h4>{item.price}</h4>
                          <p>{item.discount}</p>
                        </div>
                        <button onClick={() => handleAddProduct(item)}>Добавить</button>
                      </div>
                    </div>
                  )}
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className='main-bg'>
      </div>
    </>
  );
};

export default MainPageItems;