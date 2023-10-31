const MenuBeans = ({ value, onChange, onClick }) => {
  if (value === 'Beans') {
    return (
      <>
        <select
          className="
          relative z-10 inline-flex items-center  bg-stone-700 px-4 py-2 text-sm rounded-r-2xl font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2  cursor-pointer focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
          onChange={(e) => {
            e.preventDefault();
            onChange?.(e.target.value);
          }}
        >
          <option disabled value={'咖啡豆'} name="" id="">
            咖啡豆
          </option>
          <option value={'咖啡豆'} name="" id="">
            咖啡豆
          </option>
        </select>
      </>
    );
  }
  return (
    <>
      <label
        htmlFor="beans"
        className=" cursor-pointer items-center px-4 py-2 text-sm font-semibold text-gray-900   checked:bg-blue-500 "
      >
        咖啡豆
      </label>
      <input
        id="beans"
        type="radio"
        name="menu"
        className="hidden"
        onClick={(e) => {
          e.preventDefault();
          onClick?.(e.target.value);
        }}
        value="Beans"
      />
    </>
  );
};
export default MenuBeans;
