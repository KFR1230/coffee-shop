import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const InfoModal = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <Transition appear show={isOpen} as="div">
        <Dialog as="div" className="relative z-[40]" onClose={setIsOpen}>
          <Transition.Child
            as="div"
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-scroll">
            <div className="relative flex min-h-full items-center justify-center py-20 text-center">
              <Transition.Child
                as="div"
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                className="w-10/12"
              >
                <Dialog.Panel className="w-full transform overflow-hidden rounded-2xl bg-slate-100/95 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-3xl py-2  sm:text-5xl sm:py-12 text-center tracking-widest leading-6 text-gray-900 font-bold"
                  >
                    來店須知 !
                  </Dialog.Title>
                  <button
                    type="button"
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-10 md:right-6 md:top-6 lg:right-8 lg:top-8"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <ul className="h-auto w-10/12 mx-auto text-sm lg:text-3xl font-bold tracking-widest text-appear text-start">
                    <li className="list-disc my-6">
                      本店為『 非常安靜
                      』的場所，聊天講話不適合，為了避免打擾到需要安靜的人，談話請換地方以免造成彼此壓力與不快。
                    </li>
                    <li className="list-disc my-6">請先告知人數。</li>
                    <li className="list-disc my-6">
                      『 低消一人一杯飲品 』內用飲品打包酌收10元。
                    </li>
                    <li className="list-disc my-6">禁用外食。</li>
                    <li className="list-disc my-6">
                      『
                      離開時結帳。』使用手機進行點餐，如需紙本點餐，麻煩請至櫃檯。
                    </li>
                    <li className="list-disc my-6">
                      無隨意更換位子和移動桌子。
                    </li>
                    <li className="list-disc my-6">禁用外食。</li>
                    <li className="list-disc my-6">
                      『 嚴禁跨座位接電。』僅能接座位旁的插座。
                    </li>
                    <li className="list-disc my-6">
                      『 週末限時三小時：續坐須加點低消。』
                    </li>
                  </ul>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default InfoModal;
