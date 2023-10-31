const MenuDrink = ({ value, onChange, onClick }) => {
  if (value === 'Drink') {
    return (
      <>
        <select
          className="relative z-10 inline-flex items-center rounded-l-2xl bg-stone-700 px-4 py-2 text-sm font-semibold text-white focus:z-20 cursor-pointer
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
          onChange={(e) => {
            e.preventDefault();
            onChange?.(e.target.value);
          }}
        >
          <option value={'Drink'} name="" id="">
            飲品
          </option>
          <option value={'咖啡'} name="" id="">
            咖啡
          </option>
          <option value={'義式咖啡'} name="" id="">
            義式咖啡
          </option>
          <option value={'茶'} name="" id="">
            茶
          </option>
          <option value={'其他'} name="" id="">
            其他
          </option>
        </select>
      </>
    );
  }
  return (
    <>
      <label
        htmlFor="drink"
        className="cursor-pointer items-center px-4 py-2 text-sm font-semibold text-gray-900 checked:bg-blue-500 "
      >
        飲品
      </label>
      <input
        type="radio"
        name="menu"
        id="drink"
        className="hidden"
        onChange={(e) => {
          e.preventDefault();
          onClick?.(e.target.value);
        }}
        value="Drink"
      />
    </>
  );
};
export default MenuDrink;
