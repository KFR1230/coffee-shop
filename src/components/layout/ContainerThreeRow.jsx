import Header from '../basic/Header';
import Footer from '../basic/Footer';
import BackToTopBtn from '../basic/BackToTopBtn';
import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
const ContainerThreeRow = ({ children }) => {
  const [backToTopBtn, setBackToTopBtn] = useState(false);
  const { isImageLoaded, isAuthentic } = useAuth();
  const navigate = useNavigate();
  const pathname = useLocation();

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setBackToTopBtn(true);
    } else {
      setBackToTopBtn(false);
    }
  };
  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (!isAuthentic) {
      navigate('/login');
    }
  }, [navigate, isAuthentic]);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div
        className={
          isImageLoaded
            ? "relative h-auto min-h-svh container-row flex flex-col bg-[url('./assets/image/paper1920.jpg')] pt-16 sm:pt-20"
            : 'relative h-auto min-h-svh container-row flex flex-col bg-[#d6b892] pt-16 sm:pt-20'
        }
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
