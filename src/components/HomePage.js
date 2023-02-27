import {useState} from 'react';
import MainPage from './MainPage';

const HomePage = ({query, handleAddProduct}) => {
  const [cartItems, setCartItems] = useState([]);
  // const handleAddProduct = (product) => {
  //   const ProductExist = cartItems.find((item) => item.id === product.id);
  //   if(ProductExist) {
  //     setCartItems(
  //       cartItems.map((item) => item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity + 1} : item)
  //     )
  //   }
  //   else{
  //     setCartItems([...cartItems, {...product, quantity: 1}])
  //   }
  // }
  return (
    <div>
      <MainPage cartItems={cartItems} handleAddProduct={handleAddProduct} query={query} />
    </div>
  );
};

export default HomePage;