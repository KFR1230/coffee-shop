import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuBeans from '../basic/MenuBeans';
import MenuDessert from '../basic/MenuDessert';
import MenuDrink from '../basic/menuDrink';
import { useAuth } from '../context/AuthContext';
import ContainerThreeRow from '../layout/ContainerThreeRow';
import ProductLayout from '../layout/ProductLayout';
import { ToastContainer, toast } from 'react-toastify';
import { Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function MenuPage() {
  const [changeMode, setChangeMode] = useState('Drink');
  const [title, setTitle] = useState('Drink'); //藉由title變更components
  const [subTitle, setSubTitle] = useState('');
  const { isAuthentic } = useAuth();
  const navigate = useNavigate();
  const handlerChangeMode = (name) => {
    setChangeMode(name);
    setTitle(name);
    setSubTitle('');
  };
  const handlerSelectOpt = (value) => {
    // console.log(value);
    setSubTitle(value);
  };
  const notifyProduct = (name) => {
    toast(`已加入${name}至購物車`);
  };
  useEffect(() => {
    if (!isAuthentic) {
      navigate('/login');
    }
  }, [navigate, isAuthentic]);
  return (
    <ContainerThreeRow>
      <div className="relative bg-transparent pt-10">
        <div className=" w-m-full my-2.5 h-24 sm:h-36  flex flex-col justify-center items-center">
          <h1 className="transform transition-all pb-4 text-3xl sm:text-5xl font-Dosis font-extrabold italic text-center tracking-[.15em]">
            Menu
          </h1>
          <hr className="border border-solid border-gray-700 w-1/2" />
        </div>
      </div>
      <div className="transform transition-all hover:scale-110 cursor-pointer min-w-max h-auto flex items-start justify-center self-center bg-transition px-4 py-3 sm:px-6">
        <div className="bg-stone-700/[.6] rounded-2xl ">
          <MenuDrink
            value={changeMode}
            onClick={handlerChangeMode}
            onChange={handlerSelectOpt}
          />
          <MenuDessert
            value={changeMode}
            onClick={handlerChangeMode}
            onChange={handlerSelectOpt}
          />
          <MenuBeans
            value={changeMode}
            onClick={handlerChangeMode}
            onChange={handlerSelectOpt}
          />
        </div>
      </div>
      {/* 變更商品 */}
      <div className=" pb-4">
        <div className="mb-2 pb-2 transform transition-all text-slate-100 bg-gray-600/75 mx-6 my-4 rounded-2xl lg:w-4/5 lg:mx-auto">
          <ProductLayout
            title={title}
            subTitle={subTitle}
            onClick={notifyProduct}
          />
        </div>
      </div>
      <ToastContainer
        transition={Flip}
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </ContainerThreeRow>
  );
}
export default MenuPage;
