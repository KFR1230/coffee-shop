import { useState } from 'react';

const CartCard = ({ ...props }) => {
  const { name, count, price, sweet, temp } = props?.value;
  const { i, onClick } = props;
  const [currentCount, setCurrentCount] = useState(count);
  return (
    <li key="" className="w-full flex py-6">
      <div className="ml-4 flex flex-1 justify-between w-full">
        <div className="w-full">
          <div className="flex justify-between text-base font-medium text-gray-900 w-full">
            <div className="flex flex-col">
              <h3>{name}</h3>
              <p className="mt-1 text-sm text-gray-500">
                {temp && (
                  <span>
                    {temp}、{sweet}
                  </span>
                )}
                <span className="ml-2">${price}</span>
              </p>
            </div>
            <div className=" sm:mx-1 flex justify-end items-center ">
              <button
                className="rounded-full hover:bg-gray-300 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onClick?.(i, count, false);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6  "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
              <span className="mx-2 text-md">{count}</span>
              <button
                className="rounded-full hover:bg-gray-300 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onClick?.(i, count, true);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6  rounded-full hover:bg-gray-300 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartCard;
