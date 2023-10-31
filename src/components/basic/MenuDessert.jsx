const MenuDessert = ({ value, onChange, onClick }) => {
  if (value === 'Food') {
    return (
      <>
        <select
          className="
          relative z-10 inline-flex items-center  bg-stone-700 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
          onChange={(e) => {
            e.preventDefault();
            onChange?.(e.target.value);
          }}
        >
          <option value={'Food'} name="" id="">
            食品
          </option>
          <option value={'甜點'} name="" id="">
            甜點
          </option>
          <option value={'輕食'} name="" id="">
            輕食
          </option>
        </select>
      </>
    );
  }
  return (
    <>
      <label
        htmlFor="food"
        className="cursor-pointer  items-center px-4 py-2 text-sm font-semibold text-gray-900   checked:bg-blue-500 "
      >
        食品
      </label>
      <input
        id="food"
        type="radio"
        name="menu"
        className="hidden"
        onClick={(e) => {
          e.preventDefault();
          onClick?.(e.target.value);
        }}
        value="Food"
      />
    </>
  );
};
export default MenuDessert;
