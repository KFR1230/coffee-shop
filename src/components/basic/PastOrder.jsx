import MemberPastCard from './memberCard/MemberPastCard';

const PastOrder = ({ finishedData }) => {
  return (
    <>
      <div className="h-96 overflow-y-auto rounded-2xl pt-4">
        {finishedData?.map((p, index) => {
          return <MemberPastCard key={index} value={{ p }} />;
        })}
      </div>
    </>
  );
};

export default PastOrder;
