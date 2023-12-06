import { useEffect, useState } from 'react';
import {
  changeFinishedStatus,
  getCurrentMemberData,
  getMemberFinished,
  getUnfinishedProducts,
} from '../../api/data';
import HistoryLeftSide from '../basic/HistoryLeftSide';
import HistoryMediaSide from '../basic/HistoryMediaSide';
import HistoryRightSide from '../basic/HistoryRightSide';
import { ToastContainer, toast } from 'react-toastify';
import { Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MemberStatus from '../basic/memberCard/MemberStatus';
import { useAuth } from '../context/AuthContext';
import ContainerTwoRow from '../layout/ContainerTwoRow';

const HistoryPage = () => {
  const { memberId } = useAuth();
  const [unFinishedProducts, setUnFinishedProducts] = useState([]);
  const [finalProducts, setFinalProducts] = useState([]);
  const [finishedData, setFinishedData] = useState([]);
  const [total, setTotal] = useState(null);
  const [isRightLoading, setIsRightLoading] = useState(true);
  const [isLeftLoading, setIsLeftLoading] = useState(true);
  const [statusTitle, setStatusTitle] = useState('目前訂單');
  const [memberAvatar, setMemberAvatar] = useState(null);
  const [memberName, setMemberName] = useState('');
  const totalPrice = (arr) => {
    return arr.reduce((acc, curr) => {
      return (acc += curr.price * curr.count);
    }, 0);
  };
  const notifyFinalCheckOut = () => {
    toast.success(`已完成付款`);
  };
  const handleChangeStatus = (status) => {
    setStatusTitle(status);
  };
  const handleFinished = async () => {
    if (!finalProducts.length && !unFinishedProducts.length) {
      return;
    }
    await changeFinishedStatus({
      memberId,
      finalProducts,
      unFinishedProducts,
      total,
    });
    notifyFinalCheckOut();
    setTotal(0);
    setFinalProducts(null);
    setUnFinishedProducts(null);
  };
  const getData = async () => {
    try {
      const res = await getUnfinishedProducts({ memberId });
      setUnFinishedProducts(res);
      const arr = res.reduce((a, c) => {
        return [...a, ...c.products];
      }, []);
      //整合成一起的
      setFinalProducts(arr);
      setTotal(totalPrice(arr));
      setIsRightLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const getFinishedData = async () => {
    try {
      const data = await getMemberFinished({ memberId });
      setFinishedData(data);
      setIsLeftLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setIsRightLoading(true);
    if (!memberId.length) {
      return;
    }

    getData();
    getFinishedData();
  }, [memberId, total]);

  useEffect(() => {
    const getMemberData = async () => {
      try {
        const data = await getCurrentMemberData();
        data.forEach((doc) => {
          if (doc.id === memberId) {
            setMemberName(doc.data().name);
            setMemberAvatar(doc.data().avatar);
          }
        });
      } catch (error) {
        console.log(error);
      }
    };
    getMemberData();
  }, [memberId]);

  return (
    <>
      <ContainerTwoRow>
        <div className="box-border flex max-sm:flex-col max-sm:justify-between pt-16 pb-6 sm:pt-20 w-11/12 h-full rounded-2xl mx-auto ">
          <HistoryLeftSide
            value={{
              isLeftLoading,
              finishedData,
              memberAvatar,
              memberName,
              memberId,
            }}
          />
          <HistoryRightSide
            value={{
              finalProducts,
              total,
              isRightLoading,
              handleFinished,
            }}
          />
          {/* 
          ///
          media RWD
          ///
          */}
          <div className="h-1/4 mb-4">
            <MemberStatus
              memberName={memberName}
              memberAvatar={memberAvatar}
              onClick={handleChangeStatus}
            />
          </div>

          <HistoryMediaSide
            value={{
              statusTitle,
              finalProducts,
              finishedData,
              total,
              isRightLoading,
              handleFinished,
            }}
          />
        </div>
        <ToastContainer
          transition={Flip}
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </ContainerTwoRow>
    </>
  );
};

export default HistoryPage;
