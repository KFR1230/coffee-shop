import { useState } from 'react';
import { useEffect } from 'react';
import { getSubTitleData, getTitleData } from '../../api/data';
import { useCart } from '../context/CartContext';
import SwitchProductLoading from './Loading/SwitchProductLoading';
import BeansCard from './productCard/BeansCard';
import CoffeeCard from './productCard/CoffeeCard';
import DessertCard from './productCard/DessertCard';
import ProductModal from './ProductModal';

const SwitchProduct = ({ title, subTitle, onClick }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { cartModal } = useCart();
  const getProducts = async () => {
    const res = await getTitleData(title, subTitle);
    const arr = [];

    res.forEach((doc) => {
      arr.push({ ...doc.data(), id: doc.id });
    });

    setProducts(arr);
    setIsLoading(false);
  };
  const getSubData = async () => {
    const res = await getSubTitleData(title, subTitle);
    const arr = [];

    res.forEach((doc) => {
      arr.push({ ...doc.data(), id: doc.id });
    });

    setProducts(arr);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    if (subTitle === 'undefined' || subTitle === '') {
      return;
    }
    if (subTitle === title) {
      getProducts();
      return;
    }

    getSubData();
  }, [subTitle]);

  useEffect(() => {
    setIsLoading(true);
    getProducts();
  }, [title]);

  function switchComponents(title, item) {
    switch (title) {
      case 'Drink':
        return <CoffeeCard item={item} key={item.name} />;
      case 'Food':
        return <DessertCard item={item} key={item.name} />;
      case '甜點':
        return <DessertCard item={item} key={item.name} />;
      case '輕食':
        return <DessertCard item={item} key={item.name} />;
      case 'Beans':
        return <BeansCard item={item} key={item.name} />;
      default:
        return <CoffeeCard item={item} key={item.name} />;
    }
  }
  //因為title,先傳進來，Products還需要抓資料，會導致title先更換card元件，形成閃爍的畫面。// 所以把switchComponents裡判斷的title，更改為Products本身的type作為判斷card樣式。
  return (
    <>
      {isLoading && <SwitchProductLoading />}
      {!isLoading &&
        products?.map((item) => {
          return switchComponents(item.type, item);
        })}

      {cartModal && <ProductModal onClick={(name) => onClick?.(name)} />}
    </>
  );
};

export default SwitchProduct;
