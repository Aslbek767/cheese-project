import { useState } from "react";
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Questions from "./components/Questions";
import Products from "./components/Products";
import "./MainPage.css"
import "./index.css"
import './Contact.css'
import DeliverService from "./components/DeliverService";
import Contact from "./components/Contact";


function App() {
  const [cartItems, setCartItems] = useState([]);
  const [query, setQuery] = useState([]);
  console.log(query)

  const increamentQuantity = (itemID) => {
    const newOrder = cartItems.map(el => {
      if(el.id === itemID) {
        const newQuantity = el.quantity + 1;
        return{
          ...el,
          quantity: newQuantity
        }
      } else {
        return el
      }
    })
    setCartItems(newOrder)
  }
  const decreamentQuantity = (itemID) => {
    const newOrder = cartItems.map(el => {
      if(el.id === itemID) {
        const newQuantity = el.quantity - 1;
        return{
          ...el,
          quantity: newQuantity
        } 
      } else {
        return el
      }
    })
    setCartItems(newOrder)
  }
  const removeFromBasket= (itemID) => {
    const newOrder = cartItems.filter(item => item.id !== itemID); 
    setCartItems(newOrder);
  }
  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist) {
      setCartItems(
        cartItems.map((item) => item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity + 1} : item)
      )
    }
    else{
      setCartItems([...cartItems, {...product, quantity: 1}])
    }
  }
  console.log(query)
  return (
    <BrowserRouter>
    <Navbar setQuery={setQuery} cartItems={cartItems} increamentQuantity={increamentQuantity} decreamentQuantity={decreamentQuantity} removeFromBasket={removeFromBasket}/>
      <Routes>
        <Route path="/" element={<HomePage cartItems={cartItems} query={query} handleAddProduct={handleAddProduct}/>}/>
        <Route path="/questions" element={<Questions />}/>
        <Route path="/products" element={<Products query={query} cartItems={cartItems} handleAddProduct={handleAddProduct}/>}/>
        <Route path="/Доставка" element={<DeliverService />} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
