import { PulseLoader } from 'react-spinners';
import CurrentOrder from './CurrentOrder';
import PastOrder from './PastOrder';

const HistoryMediaSide = ({ ...props }) => {
  const {
    statusTitle,
    finalProducts,
    finishedData,
    total,
    isRightLoading,
    handleFinished,
  } = props.value;
  if (isRightLoading) {
    return (
      <div className="sm:hidden mt-4 h-3/4 w-full flex justify-center items-center md:h-full py-4 px-4  rounded-2xl bg-gray-400">
        <PulseLoader color="#c1b738" loading speedMultiplier={1} />
      </div>
    );
  }
  return (
    <>
      <section className="sm:hidden mt-4 h-full w-full md:w-2/3 flex flex-col justify-center items-end  md:h-full  rounded-2xl bg-gray-700/75">
        <div className="rounded-t-2xl bg-slate-100 h-8 w-full pl-4">
          <span className="text-slate-500 text-sm font-bold leading-8">
            {statusTitle}
          </span>
        </div>
        <div className="h-full w-full">
          {statusTitle === '目前訂單' && (
            <CurrentOrder
              value={{
                finalProducts,
                total,
                handleFinished,
              }}
            />
          )}
          {statusTitle === '過去訂單' && (
            <PastOrder finishedData={finishedData} />
          )}
        </div>
      </section>
    </>
  );
};

export default HistoryMediaSide;
