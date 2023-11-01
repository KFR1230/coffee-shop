import { Bars3Icon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import BackToTopBtn from './BackToTopBtn';
import HeaderModal from './HeaderModal';
import coffeeLogo from '../../assets/image/coffee-logo.png';
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { haveProducts, setHaveProducts } = useCart();
  const pathname = useLocation();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('cart-products'))?.length) {
      setHaveProducts(true);
      return;
    }
    setHaveProducts(false);
  }, [pathname]);
  return (
    <>
      <header className="bg-yellow-900 fixed top-0 left-0 min-w-full z-20 sm:h-16">
        <nav
          className="relative h-full mx-auto flex items-center justify-between p-2 max-sm:p-2 lg:px-8"
          aria-label="Global"
        >
          <div className="hidden max-sm:flex">
            <button
              type="button"
              className="text-white -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Link
            to={'/home'}
            className="cursor-pointer flex  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:hidden"
          >
            <img src={coffeeLogo} alt="coffee-logo" className="w-6 h-6 mr-2" />
            <span className="text-slate-300 font-bold">慢活咖啡</span>
          </Link>
          <HeaderModal
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
          />
          <div className="hidden sm:flex sm:justify-evenly sm:flex-1">
            <Link
              className="font-Dosis text-white text-2xl  leading-6  hover:text-gray-900"
              to={'/home'}
            >
              Home
            </Link>
            <Link
              className="text-white font-Dosis text-2xl  leading-6  hover:text-gray-900"
              to={'/menu'}
            >
              Menu
            </Link>
            <Link
              className="text-white font-Dosis text-2xl  leading-6  hover:text-gray-900"
              to={'/setting'}
            >
              Setting
            </Link>
            <Link
              className="text-white font-Dosis text-2xl  leading-6  hover:text-gray-900"
              to={'/checkout'}
            >
              checkout
            </Link>
          </div>
          <div className="sm:flex sm:flex-1 sm:justify-end">
            <Link to={'/cart'} className="hidden sm:block">
              {haveProducts && (
                <div className="relative">
                  <span className="absolute right-1 flex h-3 w-3 sm:top-0 sm:right-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-700"></span>
                  </span>
                </div>
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-slate-100 mx-auto sm:mr-4 cursor-pointer max-sm:text-slate-100/50 max-sm:hover:text-gray-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </Link>
            {haveProducts && (
              <Link
                to={'/cart'}
                className=" fixed right-4 bottom-36 py-2 w-12 h-12 z-20 bg-gray-300/50 rounded-full hover:animate-pulse hover:bg-gray-300 shadow-outer-b sm:hidden"
              >
                {haveProducts && (
                  <div className="relative">
                    <span className="absolute right-1 flex h-3 w-3 sm:top-0 sm:right-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-700"></span>
                    </span>
                  </div>
                )}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 mx-auto sm:mr-4 cursor-pointer "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </Link>
            )}
            <Link
              to={'/'}
              className="hidden sm:block text-white font-Dosis text-2xl   hover:text-gray-900"
              onClick={() => {
                localStorage.removeItem('authToken');
              }}
            >
              Log out <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          <BackToTopBtn />
        </nav>
      </header>
    </>
  );
};

export default Header;
