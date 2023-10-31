import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';
import BroughtRecordCard from './BroughtRecordCard';

const MemberPastCard = ({ ...props }) => {
  const { p } = props?.value;

  return (
    <>
      <div className="w-full px-4 pb-2">
        <div className="mx-auto w-full max-w-md rounded-2xl bg-gray-700 p-2">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-slate-100 hover:bg-gray-500/75 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/75">
                  <div className="pr-4 flex flex-col justify-between w-full">
                    <span>{p.endDate}</span>
                    <span>({p.status})</span>
                    <span>${p.total}</span>
                  </div>
                  <ChevronUpIcon
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-slate-300`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-400">
                  {p.products.map((i, index) => {
                    return <BroughtRecordCard key={index} value={i} />;
                  })}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </>
  );
};

export default MemberPastCard;
