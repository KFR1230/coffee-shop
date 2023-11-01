import { PulseLoader } from 'react-spinners';
import MemberDesCard from './memberCard/MemberDesCard';
import MemberPastCard from './memberCard/MemberPastCard';

const HistoryLeftSide = ({ ...props }) => {
  const { isLeftLoading, finishedData, memberAvatar, memberName, memberId } =
    props.value;
  if (isLeftLoading) {
    return (
      <section className="max-sm:hidden w-1/3 flex flex-col justify-between  h-full mr-4 ">
        <MemberDesCard
          memberAvatar={memberAvatar}
          memberName={memberName}
          memberId={memberId}
        />
        <div className=" box-border h-3/4 bg-gray-700/75 rounded-2xl">
          <div className="rounded-t-xl bg-slate-100/95 h-8 w-full pl-4 ">
            <span className="text-slate-500 text-sm font-bold leading-8">
              過去訂單
            </span>
          </div>

          <div className="h-full overflow-y-auto rounded-xl hidden sm:flex justify-center items-center ">
            <PulseLoader color="#c1b738" loading speedMultiplier={1} />
          </div>
        </div>
      </section>
    );
  }
  return (
    <>
      <section className="max-sm:hidden w-1/3 flex flex-col justify-between  h-full mr-4 ">
        <MemberDesCard
          memberAvatar={memberAvatar}
          memberName={memberName}
          memberId={memberId}
        />
        <div className=" box-border h-3/4 rounded-2xl">
          <div className="rounded-t-xl bg-slate-100/95 h-8 w-full pl-4 ">
            <span className="text-slate-500 text-sm font-bold leading-8">
              過去訂單
            </span>
          </div>
          <div className="h-96 bg-gray-700/75 overflow-y-auto pt-4 rounded-b-xl">
            {finishedData?.map((p, index) => {
              return <MemberPastCard key={index} value={{ p }} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HistoryLeftSide;
