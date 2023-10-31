import { useCart } from '../../context/CartContext';

const CoffeeCard = ({ ...props }) => {
  const { name, des, isHot, isSweet, isSold, pattern, price, att } =
    props?.item;
  const { setCartModal, setProductModal } = useCart();
  return (
    <>
      <div className="h-full mt-6 p-5 grid border ring-2 ring-black/50 text-slate-800 border-solid rounded-2xl items-center grid-cols-5 gap-x-4 gap-y-10 xl:gap-x-8 max-sm:gap-x-2">
        {att && (
          <div className="text-md text-slate-100 col-span-1 justify-self-center">
            {att}
            {pattern && <p>({pattern})</p>}
          </div>
        )}

        <div className="h-full flex justify-between col-start-2 col-span-3">
          <div className="h-full w-full  flex  justify-between items-center col-start-2 col-span-2">
            <div className=" w-full flex flex-col justify-between items-start">
              <h3 className="text-md font-bold text-slate-100">{name}</h3>
              <p className="mt-1 text-sm text-slate-300">{des}</p>
            </div>

            <p className="min-w-max ml-2 text-slate-100">$ {price}</p>
          </div>
        </div>
        <button
          className="mx-2 justify-self-center flex justify-center items-center min-w-min w-14 h-10 rounded-xl bg-amber-600/70 max-sm:w-10 max-sm:h-6 max-sm:rounded-md hover:bg-amber-600 ring-2 ring-black/50 hover:scale-125 transform transition-all"
          onClick={() => {
            setCartModal(true);
            setProductModal({
              name,
              des,
              isHot,
              isSold,
              isSweet,
              pattern,
              price,
              att,
            });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default CoffeeCard;
