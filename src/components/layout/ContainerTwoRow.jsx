import { useRef, useState } from 'react';
import BackToTopBtn from '../basic/BackToTopBtn';
import Header from '../basic/Header';

const ContainerTwoRow = ({ children }) => {
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
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <div
        className="overflow-y-auto container-row flex flex-col h-full min-h-screen justify-between bg-paper-pattern"
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
