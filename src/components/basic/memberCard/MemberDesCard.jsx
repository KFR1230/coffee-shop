import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MemberDesCard = ({ memberName, memberAvatar, memberId }) => {
  const firstText = memberId.slice(0, 3);
  const navigate = useNavigate();
  const handleCopyId = () => {
    navigator.clipboard.writeText(memberId);
  };
  return (
    <>
      <div className="box-border h-1/4 mb-4 flex justify-center items-center bg-slate-100/75  p-2 rounded-2xl border-gray">
        <div className="flex flex-col justify-start items-start p-2 w-full h-full rounded-t-2xl  text-slate-500 font-bold text-lg line-clamp-1 ">
          <div className="w-full flex justify-between mb-2">
            <img
              src={
                memberAvatar ? `${memberAvatar}` : 'src/assets/coffee-logo.png'
              }
              alt="member-avatar"
              className="w-12 h-12 mx-2 rounded-full"
            />
            <img
              src="src/assets/pencil.svg"
              alt="edit-member"
              className="w-4 h-4 filter-gray cursor-pointer "
              onClick={() => navigate('/setting')}
            />
          </div>
          <div className="h-full w-11/12">
            <p className="font-bold line-clamp-1">
              {memberName ? memberName : '載入中...'}
              <> </>會員
            </p>
            <div
              className="flex items-center cursor-pointer w-auto"
              onClick={handleCopyId}
            >
              {' '}
              <img
                src="src/assets/copy.svg"
                alt="memberId-Copy"
                className="w-2 h-2 mr-1 filter-gray"
              />
              <span className=" text-[14px] text-slate-500">
                ID:{firstText}***
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberDesCard;
