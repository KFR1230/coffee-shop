import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
const defaultValue = {
  cartModal: false,
  productModal: {
    name: 'Basic Tee 6-Pack ',
    price: '$192',
    isHot: false,
    isSweet: true,
    url: null,
  },
};
const CartContext = createContext(defaultValue);
export const useCart = () => useContext(CartContext);
const CartProvider = ({ children }) => {
  const [cartModal, setCartModal] = useState(false);
  const [productModal, setProductModal] = useState({});
  const [haveProducts, setHaveProducts] = useState(false);
  return (
    <CartContext.Provider
      value={{
        cartModal,
        setCartModal,
        setProductModal,
        setHaveProducts,
        haveProducts,
        productModal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
