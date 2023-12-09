import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';
import { addMemberCart } from '../../api/data';
import CartCheckModal from '../basic/CartCheckModal';
import CartCard from '../basic/productCard/CartCard';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import ContainerThreeRow from '../layout/ContainerThreeRow';

const CartPage = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isZero, setIsZero] = useState(false);
  const [index, setIndex] = useState(null);
  const [total, setTotal] = useState(0);
  const { setHaveProducts } = useCart();
  const { memberId } = useAuth();
  const pathname = useLocation();
  const navigate = useNavigate();
  function totalPrice() {
    return cartProducts.reduce((acc, crr) => {
      return acc + crr.price * crr.count;
    }, 0);
  }

  function decideModal(res) {
    if (res) {
      const arr = cartProducts.filter((_, i) => i !== index);
      setCartProducts(arr);
      localStorage.setItem('cart-products', JSON.stringify(arr));
    } else {
      const arr = cartProducts.map((_, i) => {
        if (i === index) {
          _.count = 1;
          return _;
        }
        return _;
      });
      setCartProducts(arr);
    }
    setIsZero(false);
    setIndex(null);
  }
  // console.log('decideModal3', cartProducts);
  function handlerAddNumCart(i, count, action) {
    //增加true或減少
    if (action) {
      setCartProducts(
        cartProducts.map((_, index) => {
          if (i === index) {
            _.count += 1;
            return _;
          }
          return _;
        })
      );
    } else {
      setCartProducts(
        cartProducts.map((_, index) => {
          if (i === index) {
            _.count -= 1;
            return _;
          }
          return _;
        })
      );
    }

    if (cartProducts[i].count !== 0) {
      //跳出一個視窗，確認是否要刪掉商品
      localStorage.setItem('cart-products', JSON.stringify(cartProducts));
      return;
    } else {
      setIsZero(true);
      setIndex(i);
    }
  }

  function handlerSubmitCart() {
    // const arr = cartProducts.map((i) => {
    //   return `${i.name}, ${i.sweet}, ${i.temp} * ${i.count}`;
    // });
    addMemberCart({ memberId, cartProducts });
    setCartProducts([]);
    setTotal(0);
    localStorage.removeItem('cart-products');
    navigate('/checkout');
  }

  useEffect(() => {
    if (!cartProducts.length) {
      return;
    }
    setIsLoading(true);
    setTotal(totalPrice());
    setIsLoading(false);
  }, [cartProducts]);

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('cart-products'))) {
      setIsLoading(false);
      return;
    }
    setCartProducts(JSON.parse(localStorage.getItem('cart-products')));
    setTotal(totalPrice());
    setIsLoading(false);
    setHaveProducts(false);
  }, [pathname, isZero]);

  //為什麼會在點擊 - 時，數量會閃一下，原因就是出自於這裡。isZero 的變化觸發重新取得 local storage 的資料，在local storage 的數值尚未被變更，因此可以使該值維持在1。

  return (
    <>
      <ContainerThreeRow>
        <div className="w-full h-full relative bg-transparent py-16 sm:py-24 overflow-y-auto">
          <div className="transform transition-all w-4/5 lg:w-6/12 mx-auto h-auto bg-stone-200/[.7] rounded-2xl">
            <div className="transform transition-all px-4 sm:flex  justify-between">
              <div className=" sm:w-8/12 flex max-w-full ">
                <div className="mt-4 w-full">
                  <div className="w-full">
                    <ul role="list" className="mt-2 w-full">
                      <h2 className="text-2xl font-bold">購物車</h2>
                      <hr className="mt-2 border-solid border border-slate-700/25 max-sm:hidden" />
                      {!isLoading &&
                        cartProducts.map((p, index) => {
                          return (
                            <CartCard
                              key={index}
                              value={p}
                              i={index}
                              onClick={handlerAddNumCart}
                            />
                          );
                        })}
                      {isLoading && (
                        <div className="flex w-full h-48 justify-center items-center">
                          <FadeLoader
                            className="w-full"
                            color="rgba(181, 155, 137, 1)"
                          />
                        </div>
                      )}
                    </ul>
                    <hr className="sm:hidden border border-solid border-slate-700" />
                  </div>
                </div>
              </div>

              <div className="transform transition-all border-t border-gray-200  py-6 sm:px-6 sm:self-end">
                {!isLoading && (
                  <>
                    <div className="flex min-w-max justify-end text-base font-medium text-gray-900">
                      <p>總共</p>
                      <p className="ml-2">${total}</p>
                    </div>
                    <div className=" mt-6 flex items-center justify-end max-sm:justify-center ">
                      {cartProducts.length === 0 ? (
                        <button
                          disabled
                          href="#"
                          className="cursor-not-allowed flex items-center justify-center rounded-md border border-transparent bg-gray-400/50 px-6 py-3 text-base font-medium text-white shadow-sm  
                    w-full
                    "
                          onClick={handlerSubmitCart}
                        >
                          空
                        </button>
                      ) : (
                        <button
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-amber-900 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-amber-700 
                    w-full
                    "
                          onClick={handlerSubmitCart}
                        >
                          送出
                        </button>
                      )}
                    </div>
                  </>
                )}
                {isLoading && (
                  <div className="flex w-full h-48 justify-center items-center">
                    <FadeLoader
                      className="w-full"
                      color="rgba(181, 155, 137, 1)"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <CartCheckModal
            isZero={isZero}
            setIsZero={setIsZero}
            decideModal={decideModal}
          />
        </div>
      </ContainerThreeRow>
    </>
  );
};

export default CartPage;
