import {useEffect, useState, useRef} from 'react';
import Slider from "react-slick";




const MainPageInfo = () => {
  const sliderRef = useRef(null);
  const [width, setWidth] = useState(0);
  console.log(sliderRef.current)
  const [data, setData] = useState([]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 1340,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 418,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
        }
      },
    ]
  };
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then(item => item.json())
      .then(data => setData(data))
    setWidth(window.screen.width)
  }, [])
  console.log(width);
  return (
    <>
      <div className='main-page-info'>
        <h1>Мы подобрали для вас</h1>
        <div className='main-page-info-double-cards'>
          <div className='double-card-left-section'>
            <h1>более 1000<br/> лучших рецептов</h1>
            <p>Мы собрали для Вас большую<br/> базу рецептов.</p>
            <button>Перейти</button>
          </div>
          <div className='double-card-right-section'>
            <h1>крутые Наборы<br/> для сыра</h1>
            <p>Готовые наборы сэкономят<br/> время, мы всё сделали за Вас.</p>
            <button>Перейти</button>
          </div>
        </div>
        <div className='main-page-info-single-card'>
          <h1 className='title'>наше оборудование</h1>
          <div className='main-page-info-single-card-content'>
            <h1>Прессы для сыра</h1>
            <p>
              Пресс можно использовать для прессования твердых<br/> сыров. Он разбирается, и вы можете компактно<br/>его упаковать в коробку.
            </p>
            <button>Узнать больше</button>
          </div>
        </div>
        <div className='main-page-more-info-card'>
          <img src="./assets/more-info.png"/>
          <h3>Сырная тарелка</h3>
          <p>
          Так называется блюдо, которое состоит<br/> из разных сортов сыра. 
          </p>
          <div className='more-info-link'>
            <a href='#'>Читать далее</a>
            <div className='icon'></div>
          </div>
        </div>
      </div>
      <div className='slider-section' >
        <div className='title-prev-next'>
          <h2>Просмотренные товары</h2>
          <div className='prev-next'>
            <i onClick={() => sliderRef.current.slickPrev()} className="fa-solid fa-chevron-left"></i>
            <i onClick={() => sliderRef.current.slickNext()} className="fa-solid fa-chevron-right"></i>
          </div>
        </div>
        <div className='full-items-slider'>
          <div className='items-slider'>
            <Slider ref={sliderRef} {...settings}>
            {data.map((item) => 
            <div className='card' key={item.id}>
              <div className='card-image'>
                <Slider {...settings1}>
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
                <button>Добавить</button>
              </div>
            </div>
            )}
            </Slider>
          </div>
          <div className='card-linear-gradient-part'></div>
        </div> 
      </div>
    </>
  );
};

export default MainPageInfo;