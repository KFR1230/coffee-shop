import Skeleton from 'react-loading-skeleton';
const TextareaTai = ({
  memberDescription,
  setMemberDescription,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <div className="mt-2 ">
        <label
          htmlFor="description"
          className="flex justify-between text-sm font-medium leading-6 text-gray-900"
        >
          描述
        </label>
        <Skeleton
          name="description"
          id="description"
          className="block w-full max-h-24 resize-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pr-3 pl-3 h-20"
        />
      </div>
    );
  }
  return (
    <div className="mt-2 ">
      <label
        htmlFor="description"
        className="flex justify-between text-sm font-medium leading-6 text-gray-900"
      >
        描述
        <span className="text-xs/[30px] text-slate-800">
          {memberDescription.length}/150
        </span>
      </label>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        value={memberDescription}
        maxLength="150"
        className="bg-gray-700/75 block w-full max-h-24 resize-none rounded-md border-0 py-1.5 text-slate-100 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pr-3 pl-3"
        placeholder={`輸入描述...`}
        onChange={(e) => {
          setMemberDescription(e.target.value);
        }}
      ></textarea>
    </div>
  );
};

export default TextareaTai;
