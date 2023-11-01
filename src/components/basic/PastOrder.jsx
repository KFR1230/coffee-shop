import MemberPastCard from './memberCard/MemberPastCard';

const PastOrder = ({ finishedData }) => {
  return (
    <>
      <div className="h-96 bg-gray-700/75 overflow-y-auto rounded-b-2xl py-4">
        {finishedData?.map((p, index) => {
          return <MemberPastCard key={index} value={{ p }} />;
        })}
      </div>
    </>
  );
};

export default PastOrder;
