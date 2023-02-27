import {useState} from 'react';
import MainPageInfo from './MainPageInfo';
import MainPageItems from './MainPageItems';

import '../index.css';
import '../MainPage.css';


const MainPage = ({cartItems, handleAddProduct, increamentQuantity, decreamentQuantity, query}) => {

  
  return (
    <div className='main-page'>
      <MainPageItems query={query} cartItems={cartItems} handleAddProduct={handleAddProduct}  increamentQuantity={increamentQuantity} decreamentQuantity={decreamentQuantity}/>
      <MainPageInfo/>
    </div>
  );
};

export default MainPage;