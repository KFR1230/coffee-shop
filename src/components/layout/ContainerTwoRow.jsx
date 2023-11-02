import { useEffect, useRef, useState } from 'react';
import BackToTopBtn from '../basic/BackToTopBtn';
import Header from '../basic/Header';
import paper from '@/assets/image/paper1920.jpg';
const ContainerTwoRow = ({ children }) => {
  const [scroll, setScroll] = useState(0);
  const [backToTopBtn, setBackToTopBtn] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const top = useRef();
  const handleScroll = (e) => {
    setScroll(e.currentTarget.scrollTop);
    if (scroll > 500) {
      setBackToTopBtn(true);
    } else {
      setBackToTopBtn(false);
    }
  };
  const handleScrollUp = () => {
    top.current.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const img = new Image();
    img.src = `${paper}`;
    if (img.complete) {
      console.log('img.complete', img);
      setIsImageLoaded(true);
    } else {
      img.onload = () => {
        setIsImageLoaded(true);
        console.log('img.onload', img);
      };
    }
  }, []);

  return (
    <>
      <div
        className={
          isImageLoaded
            ? "overflow-y-auto container-row flex flex-col h-full min-h-screen justify-between bg-[url('./assets/image/paper1920.jpg')]"
            : 'overflow-y-auto container-row flex flex-col h-full min-h-screen justify-between bg-[#d6b892]'
        }
        onScroll={handleScroll}
        ref={top}
      >
        <Header />
        <BackToTopBtn
          backToTopBtn={backToTopBtn}
          handleScrollUp={handleScrollUp}
        />
        {children}
      </div>
    </>
  );
};

export default ContainerTwoRow;
