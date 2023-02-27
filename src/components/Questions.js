import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const Questions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/Questions")
      .then(res => res.json())
      .then(answers => setQuestions(answers))
  }, [])
  return (
    <div className='questions'>
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
        <div className='right-main-page'>
          <h1>Вопросы и ответы</h1>
          <div className='questions-box'>
            <a href="#1">01. Как, и как долго можно хранить моцареллу?</a>
            <a href='#2'>02.Почему на сыре появляется черная плесень?</a>
            <a href='#3'>03.От чего у  камамбера появляется горький вкус?</a>
            <a href='#4'>04.Знаю, что сычужный белок бывает одного вида, тогда каким образом изготавливаются разные виды сыра? </a>
            <a href='#5'>05.Можно приготовить сыр, используя молоко не первой свежести, предварительно прокипятив его?</a>
            <a href='#6'>06.Для чего используется хлористый кальций?  </a>
            <a href='#7'>07.Можно приготовить сыр, используя молоко не первой свежести, предварительно прокипятив его? </a>
            <a href='#8'>08.Для чего используется хлористый кальций?</a>
          </div>
          {questions.map((item) => 
            <div className='question-answer' id={item.id}>
              <h1>{item.title}</h1>
              <p>{item.body}</p>
            </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Questions;