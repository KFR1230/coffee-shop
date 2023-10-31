import CurrentProductCard from './memberCard/CurrentProductCard';

const CurrentOrder = ({ ...props }) => {
  const { finalProducts, total, handleFinished } = props.value;
  return (
    <>
      <div className="p-4 w-full h-3/4 overflow-y-auto mx-auto  sm:p-4 bg-gray-700/75">
        {finalProducts?.map((item, i) => (
          <CurrentProductCard key={i} value={item} />
        ))}
        {!finalProducts?.length && (
          <p className="text-center text-slate-100">尚未送出任何訂單</p>
        )}
      </div>
      <hr className="border-gray" />
      <div className="h-auto flex justify-between items-center w-full p-4 mx-auto rounded-b-2xl bg-gray-700/75">
        <div className="w-auto h-12 text-center text-slate-100 font-bold mr-4 leading-[3rem]">
          總額：{total}
        </div>
        <button
          className="w-20 h-12 bg-slate-100 rounded-2xl shadow-outer-b hover:bg-slate-600 hover:text-slate-100"
          onClick={handleFinished}
        >
          <span className="font-bold text-lg ">結算</span>
        </button>
      </div>
    </>
  );
};

export default CurrentOrder;
