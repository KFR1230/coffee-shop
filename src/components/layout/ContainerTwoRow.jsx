import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackToTopBtn from '../basic/BackToTopBtn';
import Header from '../basic/Header';
import { useAuth } from '../context/AuthContext';
const ContainerTwoRow = ({ children }) => {
  const [scroll, setScroll] = useState(0);
  const [backToTopBtn, setBackToTopBtn] = useState(false);
  const { isImageLoaded, isAuthentic } = useAuth();
  const navigate = useNavigate();
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
    if (!isAuthentic) {
      navigate('/login');
    }
  }, [navigate, isAuthentic]);

  return (
    <>
      <div
        className={
          isImageLoaded
            ? "overflow-y-auto container-row flex flex-col h-svh justify-between bg-[url('./assets/image/paper1920.jpg')]"
            : 'overflow-y-auto container-row flex flex-col h-svh justify-between bg-[#d6b892]'
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
