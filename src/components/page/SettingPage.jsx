import { useState } from 'react';
import { useEffect } from 'react';
import AvatarTai from '../basic/AvatarTai';
import { editMemberData, getCurrentMemberData } from '../../api/data';
import InputTai from '../basic/InputTai';
import TextareaTai from '../basic/TextareaTai';
import { useAuth } from '../context/AuthContext';
import ContainerTwoRow from '../layout/ContainerTwoRow';
import 'react-loading-skeleton/dist/skeleton.css';
import MemberAvatarModal from '../basic/MemberAvatarModal';
import { useNavigate } from 'react-router-dom';
function SettingPage() {
  const [memberName, setMemberName] = useState('匿名');
  const [memberDescription, setMemberDescription] = useState('');
  const [memberAvatar, setMemberAvatar] = useState(null);
  let [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { memberId } = useAuth();

  function handlerEdit() {
    editMemberData({ memberName, memberDescription, memberAvatar, memberId });
  }

  function settingAvatar(item) {
    if (item === undefined) {
      return;
    }

    setMemberAvatar(item);
    setIsOpen(false);
  }

  useEffect(() => {
    setIsLoading(true);
    const getMemberData = async () => {
      try {
        const data = await getCurrentMemberData();
        data.forEach((doc) => {
          if (doc.id === memberId) {
            setMemberName(doc.data().name);
            setMemberDescription(doc.data().description);
            setMemberAvatar(doc.data().avatar);
            setIsLoading(false);
          }
        });
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    getMemberData();
  }, [memberId]);

  return (
    <>
      <ContainerTwoRow>
        <form
          className="md:w-6/12 md:mx-auto flex justify-start min-h-full flex-1 flex-col px-6 py-16 sm:py-24 lg:px-8  max-h-screen"
          method="POST"
          onSubmit={(e) => {
            handlerEdit();
            alert('已儲存');
            e.preventDefault();
            e.stopPropagation();
            navigate('/home');
          }}
        >
          <AvatarTai
            memberAvatar={memberAvatar}
            isLoading={isLoading}
            setIsOpen={setIsOpen}
          />
          <MemberAvatarModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            onClick={settingAvatar}
          />
          <InputTai
            text={'暱稱'}
            setMemberName={setMemberName}
            memberName={memberName}
            isLoading={isLoading}
          />
          <TextareaTai
            memberDescription={memberDescription}
            setMemberDescription={setMemberDescription}
            isLoading={isLoading}
          />
          <button
            type="submit"
            className="flex w-16 m-6 justify-center
            self-center
            rounded-md bg-yellow-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            儲存
          </button>
        </form>
      </ContainerTwoRow>
    </>
  );
}
export default SettingPage;
