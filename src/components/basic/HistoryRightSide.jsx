import { PulseLoader } from 'react-spinners';
import CurrentOrder from './CurrentOrder';

const HistoryRightSide = ({ ...props }) => {
  const { finalProducts, total, handleFinished, isRightLoading } = props.value;
  if (isRightLoading) {
    return (
      <div className="w-2/3 h-full rounded-xl bg-gray-700/75 hidden mt-4  sm:flex justify-center items-center md:h-full py-4 px-4 ">
        <PulseLoader color="#c1b738" loading speedMultiplier={1} />
      </div>
    );
  }
  return (
    <section className=" max-sm:hidden w-2/3 h-full rounded-xl bg-gray-700/75">
      <div className="rounded-t-xl bg-slate-100/95 h-8 w-full pl-4 ">
        <span className="text-slate-500 text-sm font-bold leading-8">
          目前未結算訂單
        </span>
      </div>
      <CurrentOrder
        value={{
          finalProducts,
          total,
          handleFinished,
        }}
      />
    </section>
  );
};

export default HistoryRightSide;
