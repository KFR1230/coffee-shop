import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InfoModal from '../basic/InfoModal';
import MenuButton from '../basic/MenuButton';
import ContainerThreeRow from '../layout/ContainerThreeRow';
import coffeeLogo from '@/assets/image/coffee-logo.png';
const HomePage = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <ContainerThreeRow>
        <div className=" w-full pt-16 pb-20 sm:pt-20 lg:py-0">
          <section className="relative flex box-border rounded-xl w-11/12 h-96 justify-between sm:h-[28rem]  lg:h-screen mx-auto bg-white max-sm:flex-col">
            <div
              className="transform transition-all flex justify-center
            items-end sm:justify-end sm:items-center box-border  rounded-xl w-full bg-[url('./assets/image/coffee-shop.jpg')] bg-no-repeat bg-cover bg-center shadow-inner-mb h-full sm:shadow-inner-b"
            >
              <div className="flex flex-col justify-center items-center show max-sm:mb-24">
                <img
                  src={coffeeLogo}
                  alt=""
                  className="transform transition-all max-sm:hidden my-2 w-12 h-12 lg:w-28 lg:h-28"
                />
                <h1 className="transform transition-all my-2 mx-16 sm:block sm:self-center font-bold text-3xl lg:text-7xl tracking-widest">
                  慢活。咖啡
                </h1>
                <MenuButton />
              </div>
            </div>
            <div className="mouse">
              <span></span>Scroll
            </div>
          </section>
          <section className="my-8 flex box-border rounded-xl w-11/12 h-[18rem] mx-auto text-slate-100 bg-gray-700/75 lg:h-[30rem]">
            <div className="relative w-6/12 h-full rounded-l-xl bg-[url('./assets/image/cook-coffee.jpg')] bg-no-repeat bg-cover bg-center shadow-inner-rc p-show" />
            <div className="bg-white/55 rounded-r-xl w-6/12 h-full flex justify-center items-center ">
              <p className="text-center w-8/12 text-sm lg:text-3xl font-bold tracking-widest text-appear ">
                堅持自己烘焙，精心嚴選出最佳的咖啡豆。
              </p>
            </div>
          </section>
          <section className="my-8 relative flex box-border rounded-xl w-11/12 h-[18rem] mx-auto text-slate-100 bg-gray-700/75 lg:h-[30rem]">
            <div className="bg-white/55 rounded-l-xl w-6/12 h-full flex justify-center items-center">
              <p className="text-center w-8/12 text-sm lg:text-3xl font-bold tracking-widest text-appear">
                遠離塵囂，休息獨處的地方。
              </p>
            </div>
            <div className="w-6/12 h-full rounded-r-xl bg-[url('./assets/image/enjoy-coffee.jpg')] bg-no-repeat bg-cover bg-center shadow-inner-lc p-show"></div>
          </section>
          <section className="my-8 relative flex box-border rounded-xl w-11/12 h-auto mx-auto text-slate-100 bg-gray-700/75 ">
            <div className="bg-white/55 py-6 rounded-xl w-full h-full flex flex-col justify-start items-center">
              <h1 className="tracking-widest text-3xl lg:text-7xl font-bold my-6">
                來店須知
              </h1>
              <ul className="h-auto w-8/12 text-sm lg:text-3xl font-bold tracking-widest text-appear text-start">
                <li className="list-disc my-6">
                  本店為『 非常安靜
                  』的場所，聊天講話不適合，為了避免打擾到需要安靜的人，談話請換地方以免造成彼此壓力與不快。
                </li>
                <li className="list-disc my-6">請先告知人數。</li>
                <li className="list-disc my-6">
                  『 低消一人一杯飲品 』內用飲品打包酌收10元。
                </li>
                <li className="list-disc my-6">禁用外食。</li>
                <li className="list-disc my-6">
                  『
                  離開時結帳。』使用手機進行點餐，如需紙本點餐，麻煩請至櫃檯。
                </li>
                <li className="list-disc my-6">無隨意更換位子和移動桌子。</li>
                <li className="list-disc my-6">禁用外食。</li>
                <li className="list-disc my-6">
                  『 嚴禁跨座位接電。』僅能接座位旁的插座。
                </li>
                <li className="list-disc my-6">
                  『 週末限時三小時：續坐須加點低消。』
                </li>
              </ul>
            </div>
          </section>
        </div>
      </ContainerThreeRow>
      {isOpen && <InfoModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};

export default HomePage;
