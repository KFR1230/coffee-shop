import { useNavigate } from 'react-router-dom';

const MenuButton = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="transform transition-all my-2 w-[6.5rem] h-[2.5rem] sm:w-32 sm:h-[3.5rem] lg:w-64 lg:h-24 ">
        <button
          className="w-full h-full rounded-xl sm:py-2 sm:text-2xl lg:text-5xl  sm:rounded-2xl bg-lime-900 text-slate-100 font-bold shadow-outer-b hover:bg-lime-600 active:bg-lime-900"
          onClick={() => navigate('/menu')}
        >
          前往點餐
        </button>
      </div>
    </>
  );
};

export default MenuButton;
