import bactUpBtn from '../../assets/image/arrow-ios-upward-outline.svg';
const BackToTopBtn = ({ backToTopBtn, handleScrollUp }) => {
  // function handleScroll(e) {
  //   console.log(e.target);
  //   e.target.scrollY;
  //   // 滾動事件的處理
  //   if (window.scrollY > 0) {
  //     setBackToTopBtn(false);
  //   } else {
  //     setBackToTopBtn(false);
  //   }
  // }

  // useEffect(() => {
  //   // 在DOM完全加載後運行的程式碼
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <>
      {backToTopBtn && (
        <button
          className="fixed h-12 w-12 z-20 right-4 rounded-full bottom-20 sm:right-10 bg-gray-300/50 text-2xl leading-12 hover:animate-bounce hover:bg-gray-300 shadow-outer-b show"
          onClick={handleScrollUp}
        >
          <img src={bactUpBtn} alt="back-top-btn" />
        </button>
      )}
    </>
  );
};

export default BackToTopBtn;
