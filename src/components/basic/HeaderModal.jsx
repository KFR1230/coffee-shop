import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const HeaderModal = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <>
      <Dialog
        as="div"
        className="sm:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="flex flex-col justify-start fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-slate-100/80 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex flex-row-reverse items-center justify-between">
            <Link to={'/home'} className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="src/assets/image/coffee-logo.png"
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to={'/home'}
                  className="-mx-3 font-Dosis block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-yellow-600"
                >
                  Home
                </Link>
                <Link
                  to={'/menu'}
                  className="-mx-3 font-Dosis block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-yellow-600"
                >
                  Menu
                </Link>
                <Link
                  to={'/setting'}
                  className="-mx-3 font-Dosis block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-yellow-600"
                >
                  Setting
                </Link>
                <Link
                  to={'/checkout'}
                  className="-mx-3 font-Dosis block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-yellow-600"
                >
                  checkout
                </Link>
              </div>
              <div className="py-6">
                <Link
                  to={'/'}
                  className="text-sm font-semibold leading-6 text-gray-900 hover:underline"
                  onClick={() => {
                    localStorage.removeItem('authToken');
                  }}
                >
                  Log out <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default HeaderModal;
