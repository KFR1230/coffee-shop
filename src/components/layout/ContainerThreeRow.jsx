import Header from '../basic/Header';
import Footer from '../basic/Footer';
import BackToTopBtn from '../basic/BackToTopBtn';
import { useRef, useState } from 'react';

const ContainerThreeRow = ({ children }) => {
  const [scroll, setScroll] = useState(0);
  const [backToTopBtn, setBackToTopBtn] = useState(false);
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
      top: 20,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div
        className="min-h-screen h-full container-row flex flex-col bg-paper-pattern overflow-y-auto"
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
