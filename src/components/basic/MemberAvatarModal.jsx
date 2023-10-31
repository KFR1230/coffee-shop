import { Dialog, Transition } from '@headlessui/react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getFile } from '../../api/data';
import AvatarsOpt from './AvatarsOpt';

const MemberAvatarModal = ({ isOpen, setIsOpen, onClick }) => {
  const [membersAvatar, setMembersAvatar] = useState([]);
  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    const getMembersAvatar = async () => {
      const res = await getFile();
      setMembersAvatar(res);
    };
    getMembersAvatar();
  }, []);

  return (
    <>
      <Transition appear show={isOpen} as="div">
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as="div"
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-start justify-center p-4 pt-32 text-center">
              <Transition.Child
                as="div"
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="w-full max-w-xs transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all  
                
                "
                >
                  <div className="flex   justify-start overflow-x-scroll pb-6">
                    {membersAvatar.map((item, i) => {
                      return (
                        <AvatarsOpt
                          key={i}
                          item={item}
                          onClick={() => {
                            onClick?.(item);
                          }}
                        />
                      );
                    })}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default MemberAvatarModal;
