import MemberPastCard from './memberCard/MemberPastCard';

const PastOrder = ({ finishedData }) => {
  return (
    <>
      <div className="h-[calc(100%-2rem)] bg-gray-700/75 overflow-y-auto rounded-b-2xl py-4">
        {finishedData?.map((p, index) => {
          return <MemberPastCard key={index} value={{ p }} />;
        })}
      </div>
    </>
  );
};

export default PastOrder;
