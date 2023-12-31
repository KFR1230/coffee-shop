import { useNavigate } from 'react-router-dom';
import coffeeLogo from '@/assets/image/coffee-logo.png';
import pencilEdit from '@/assets/image/pencil.svg';
import ballot from '@/assets/image/ballot.svg';
import assept from '@/assets/image/assept-document.svg';
const MemberStatus = ({ memberName, memberAvatar, onClick }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="sm:hidden box-border h-full flex bg-gray-700/75 rounded-2xl">
        <div className="w-full flex flex-col items-start justify-start sm:h-full sm:w-2/3">
          <div className="flex items-center justify-between p-2 w-full rounded-t-2xl bg-slate-100 text-slate-500 font-bold text-lg line-clamp-1 ">
            <div className="flex">
              <img
                src={memberAvatar ? `${memberAvatar}` : coffeeLogo}
                alt="member-avatar"
                className="w-6 h-6 mx-2 rounded-full"
              />
              <span className="font-bold">
                {memberName ? memberName : '載入中...'}
                <> </>會員
              </span>
            </div>

            <img
              src={pencilEdit}
              alt="edit-member"
              className="w-4 h-4 filter-gray cursor-pointer"
              onClick={() => navigate('/setting')}
            />
          </div>
          <div className="h-full w-full  pt-2 flex justify-evenly items-center">
            <div className="flex flex-col items-center">
              <button
                className="w-8 h-8 rounded sm:w-12 sm:h-12 bg-slate-100 sm:rounded-xl hover:bg-slate-500"
                onClick={() => onClick?.('目前訂單')}
              >
                <img
                  src={ballot}
                  alt="current-list"
                  className="w-6 h-6 sm:w-8 sm:h-8 mx-auto filter-white"
                />
              </button>
              <span className="mt-1 text-slate-100 font-bold text-sm">
                目前訂單
              </span>
            </div>

            <div className="flex flex-col items-center">
              <button
                className="w-8 h-8 rounded sm:w-12 sm:h-12 bg-slate-100 sm:rounded-xl hover:bg-slate-500"
                onClick={() => onClick?.('過去訂單')}
              >
                <img
                  src={assept}
                  alt="past-list"
                  className="w-6 h-6 sm:w-8 sm:h-8 mx-auto filter-white"
                />
              </button>
              <span className="mt-1 text-slate-100 font-bold text-sm">
                過去訂單
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberStatus;
