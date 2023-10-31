const CurrentProductCard = ({ ...props }) => {
  const { name, temp, sweet, price, count } = props.value;

  return (
    <>
      <div className="flex justify-between w-full h-auto mx-auto  mb-4 px-2">
        <div>
          <p className="text-slate-100 text-md font-bold"> {name}</p>
          <p className="text-sm text-slate-300">
            {sweet} {temp}
          </p>
        </div>
        <span className="text-slate-100 text-md ml-4">
          {price} x {count}
        </span>
      </div>
    </>
  );
};

export default CurrentProductCard;
