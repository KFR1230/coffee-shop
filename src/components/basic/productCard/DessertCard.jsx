import { useCart } from '../../context/CartContext';

const DessertCard = ({ ...props }) => {
  const { name, des, isSold, price, url } = props?.item;
  const { setCartModal, setProductModal } = useCart();
  return (
    <>
      <div className="h-full mt-6 p-3 grid border ring-2 ring-black/50 text-slate-800 border-solid rounded-2xl items-center grid-cols-4 gap-x-6 gap-y-10 xl:gap-x-8 max-sm:gap-x-2">
        <div className="w-full flex justify-center col-span-1  ">
          <img
            src={
              url
                ? `${url}`
                : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrJgwdOAjqaZGS7kn35IVm_ZN6E4XFuJ7V_g&usqp=CAU'
            }
            alt=""
            className="w-32 h-32 object-cover rounded-xl"
          />
        </div>

        <div className="mt-2 flex flex-col justify-between col-start-2 col-span-2">
          <div className="flex justify-between">
            <h3 className="text-md font-bold text-slate-100">{name}</h3>
            <p className="text-slate-100">$ {price}</p>
          </div>
          <p className="mt-1 text-md text-slate-300">{des}</p>
        </div>
        <button
          className="justify-self-center flex justify-center items-center min-w-min w-14 h-10 rounded-xl bg-amber-600/70 hover:bg-amber-600 ring-2 ring-black/50 hover:scale-125 transform transition-all"
          onClick={() => {
            setCartModal(true);
            setProductModal({
              name,
              des,
              isSold,
              price,
              url,
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

export default DessertCard;
