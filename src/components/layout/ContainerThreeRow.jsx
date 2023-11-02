import Header from '../basic/Header';
import Footer from '../basic/Footer';
import BackToTopBtn from '../basic/BackToTopBtn';
import { useEffect, useRef, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
const ContainerThreeRow = ({ children }) => {
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
            ? "relative min-h-screen h-full container-row flex flex-col bg-[url('./assets/image/paper1920.jpg')] overflow-y-auto"
            : 'relative min-h-screen h-full container-row flex flex-col bg-[#d6b892] overflow-y-auto'
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
        <Footer />
      </div>
    </>
  );
};

export default ContainerThreeRow;
