import { Fragment, useState } from 'react';
import { Dialog, RadioGroup, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';
import { useEffect } from 'react';

// import classNames from 'classnames';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
const defaultProduct = {
  name: '',
  price: '',
  imageSrc: '',
  imageAlt: '',
  sweet: [
    { name: '無糖', class: '', inStock: true },
    { name: '微糖', class: '', inStock: true },
    { name: '正常', class: '', inStock: true },
  ],
  temp: [
    { name: '冰', class: '', inStock: true },
    { name: '溫', class: '', inStock: true },
    { name: '熱', class: '', inStock: true },
  ],
};
const ProductModal = ({ onClick }) => {
  const [product, setProduct] = useState(defaultProduct);
  const [selectedSweet, setSelectedSweet] = useState('');
  const [selectedTemp, setSelectedTemp] = useState('');
  const [currentCount, setCurrentCount] = useState(1);
  const { cartModal, setCartModal, productModal, setHaveProducts } = useCart();

  function handlerAddInCart(name, price, sweet, temp, count) {
    let cartProducts = localStorage.getItem('cart-products')
      ? JSON.parse(localStorage.getItem('cart-products'))
      : [];
    let index = null;
    cartProducts.forEach((p, i) => {
      if (p.name === name && p.sweet === sweet && p.temp === temp) {
        index = i;
      }
      return;
    });
    if (index || index === 0) {
      const total = (cartProducts[index].count += currentCount);
      cartProducts[index].count = total;
    } else {
      cartProducts.push({ name, count, price, sweet, temp });
    }
    localStorage.setItem('cart-products', JSON.stringify(cartProducts));
    setCartModal(false);
    onClick?.(name);
  }

  useEffect(() => {
    if (productModal.isHot || productModal.isSweet) {
      let temp =
        productModal.isHot === true
          ? [
              { name: '冰', inStock: true },
              { name: '溫', inStock: true },
              { name: '熱', inStock: true },
            ]
          : [
              { name: '冰', inStock: true },
              { name: '溫', inStock: true },
              { name: '熱', inStock: false },
            ];
      let sweet =
        productModal.isSweet === true
          ? [
              { name: '無糖', class: '', inStock: true },
              { name: '微糖', class: '', inStock: true },
              { name: '正常', class: '', inStock: true },
            ]
          : [
              { name: '無糖', class: '', inStock: true },
              { name: '微糖', class: '', inStock: false },
              { name: '正常', class: '', inStock: false },
            ];

      setProduct({ ...productModal, temp, sweet });
      setSelectedSweet(product.sweet[0].name);
      setSelectedTemp(product.temp[0].name);
      return;
    }
    setProduct({ ...productModal });
  }, []);

  return (
    <Transition.Root show={cartModal} as={Fragment}>
      <Dialog as="div" className="relative z-30" onClose={setCartModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 hidden bg-gray-500/75  transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-20 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:rounded-2xl sm:px-6  md:p-6 lg:p-8">
                  <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-8 lg:gap-x-8">
                    <div className="sm:col-span-8 ">
                      <div className="flex justify-between">
                        <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                          {productModal.name}
                        </h2>
                        <button
                          type="button"
                          className="text-gray-400 hover:text-gray-500 sm:right-6 sm:top-10 md:right-6 md:top-6 lg:right-8 lg:top-8"
                          onClick={() => setCartModal(false)}
                        >
                          <span className="sr-only">Close</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                      <section
                        aria-labelledby="information-heading"
                        className="mt-2 flex justify-between "
                      >
                        <h3 id="information-heading" className="sr-only">
                          Product information
                        </h3>

                        <p className="text-2xl text-gray-900">
                          ${productModal.price}
                        </p>

                        {productModal.url && (
                          <img
                            src={`${productModal.url}`}
                            alt="product-image"
                            className="w-32 h-32
                            rounded-2xl object-cover object-center"
                          />
                        )}
                        {/* Reviews */}
                      </section>

                      <section
                        aria-labelledby="options-heading"
                        className="mt-10"
                      >
                        <h3 id="options-heading" className="sr-only">
                          Product options
                        </h3>

                        <form>
                          {/* Sweet*/}
                          {productModal.isSweet && (
                            <div>
                              <h4 className="text-sm font-medium text-gray-900">
                                甜度
                              </h4>

                              <RadioGroup
                                value={selectedSweet}
                                onChange={setSelectedSweet}
                                className="mt-4"
                              >
                                <RadioGroup.Label className="sr-only">
                                  Choose sweet
                                </RadioGroup.Label>
                                <span className="flex items-center space-x-3">
                                  {product.sweet.map((s) => (
                                    <>
                                      <span
                                        className={
                                          !s.inStock ? 'text-gray-200' : ''
                                        }
                                      >
                                        {s.name}
                                      </span>
                                      <RadioGroup.Option
                                        key={s.name}
                                        value={s.name}
                                        disabled={!s.inStock}
                                        className={({ active, checked }) => {
                                          return classNames(
                                            !s.inStock
                                              ? ' relative  -m-0.5 flex cursor-not-allowed  items-center justify-center rounded-full border-solid border-2 focus:outline-none border-gray-100'
                                              : 'relative  -m-0.5 flex cursor-pointer items-center justify-center rounded-full  focus:outline-none border-gray border-2 ',
                                            active && checked
                                              ? 'inset-ring'
                                              : '',
                                            !active && checked
                                              ? 'inset-ring'
                                              : ''
                                          );
                                        }}
                                      >
                                        <RadioGroup.Label
                                          as="span"
                                          className="sr-only"
                                        >
                                          {s.name}
                                        </RadioGroup.Label>
                                        <span
                                          aria-hidden="true"
                                          className={classNames(
                                            s.class,
                                            'h-8 w-8 rounded-full border border-black border-opacity-10'
                                          )}
                                        />
                                      </RadioGroup.Option>
                                    </>
                                  ))}
                                </span>
                              </RadioGroup>
                            </div>
                          )}

                          {/* temperature */}
                          {productModal.isHot && (
                            <div className="mt-10">
                              <div className="flex items-center justify-between">
                                <h4 className="text-sm font-medium text-gray-900">
                                  溫度
                                </h4>
                              </div>

                              <RadioGroup
                                value={selectedTemp}
                                onChange={setSelectedTemp}
                                className="mt-4"
                              >
                                <RadioGroup.Label className="sr-only">
                                  Choose a temperature
                                </RadioGroup.Label>
                                <div className="grid grid-cols-4 gap-4">
                                  {product.temp.map((t) => (
                                    <RadioGroup.Option
                                      key={t.name}
                                      value={t.name}
                                      disabled={!t.inStock}
                                      className={({ active }) =>
                                        classNames(
                                          t.inStock
                                            ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                            : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                          active
                                            ? 'ring-2 ring-indigo-500'
                                            : '',
                                          'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1'
                                        )
                                      }
                                    >
                                      {({ active, checked }) => (
                                        <>
                                          <RadioGroup.Label as="span">
                                            {t.name}
                                          </RadioGroup.Label>
                                          {t.inStock ? (
                                            <span
                                              className={classNames(
                                                active
                                                  ? 'border border-solid'
                                                  : 'border-2 border-solid',
                                                checked
                                                  ? 'border-indigo-500'
                                                  : 'border-transparent',
                                                'pointer-events-none absolute -inset-px rounded-md'
                                              )}
                                              aria-hidden="true"
                                            />
                                          ) : (
                                            <span
                                              aria-hidden="true"
                                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                            >
                                              <svg
                                                className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                viewBox="0 0 100 100"
                                                preserveAspectRatio="none"
                                                stroke="currentColor"
                                              >
                                                <line
                                                  x1={0}
                                                  y1={100}
                                                  x2={100}
                                                  y2={0}
                                                  vectorEffect="non-scaling-stroke"
                                                />
                                              </svg>
                                            </span>
                                          )}
                                        </>
                                      )}
                                    </RadioGroup.Option>
                                  ))}
                                </div>
                              </RadioGroup>
                            </div>
                          )}

                          <div className="w-full m-2 pr-2 flex justify-end items-center ">
                            <button
                              className="rounded-full hover:bg-gray-300 cursor-pointer"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                if (currentCount === 1) {
                                  return;
                                }
                                setCurrentCount(currentCount - 1);
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6  "
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </button>
                            <span className="mx-2 text-md">{currentCount}</span>
                            <button
                              className="rounded-full hover:bg-gray-300 cursor-pointer"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setCurrentCount(currentCount + 1);
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6  rounded-full hover:bg-gray-300 cursor-pointer"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </button>
                          </div>
                          <button
                            className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={(e) => {
                              e.preventDefault();
                              setHaveProducts(true);
                              handlerAddInCart(
                                product.name,
                                product.price,
                                selectedSweet,
                                selectedTemp,
                                currentCount
                              );
                            }}
                          >
                            加入購物車
                          </button>
                        </form>
                      </section>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
export default ProductModal;
