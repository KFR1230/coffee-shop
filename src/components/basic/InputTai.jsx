import Skeleton from 'react-loading-skeleton';
function InputTai({ text, memberName, setMemberName, isLoading }) {
  if (isLoading) {
    return (
      <div className="mt-2">
        <label
          htmlFor={text}
          className="flex justify-between text-sm font-medium leading-6 text-gray-900"
        >
          {text}
        </label>
        <div className="mt-1 h-10">
          <Skeleton className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pr-3 pl-3" />
        </div>
      </div>
    );
  }
  return (
    <div className="mt-2">
      <label
        htmlFor={text}
        className="flex justify-between text-sm font-medium leading-6 text-gray-900"
      >
        {text}
        <span className="text-xs/[30px] text-slate-800">
          {memberName.length}/20
        </span>
      </label>
      <div className="mt-1">
        <input
          id={text}
          name={text}
          type="text"
          maxLength="20"
          value={memberName}
          autoComplete="email"
          required
          className="bg-gray-700/75 block w-full rounded-md border-0 py-1.5 text-slate-100 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pr-3 pl-3"
          placeholder={`輸入${text}...`}
          onChange={(e) => {
            setMemberName(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default InputTai;
