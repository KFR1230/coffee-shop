import { useEffect, useRef } from 'react';
import { addTR } from '../../api/data';

const AdminMainPage = () => {
  const nameRef = useRef();
  const desRef = useRef();
  const priceRef = useRef();
  const patternRef = useRef();
  const attRef = useRef();
  const isSoldRef = useRef();
  const isHotRef = useRef();
  const isSweetRef = useRef();
  const typeRef = useRef();
  const handlerSubmit = () => {
    const obj = {
      name: nameRef.current.value,
      des: desRef.current.value,
      price: priceRef.current.value,
      pattern: patternRef.current.value,
      att: attRef.current.value,
      isSold: isSoldRef.current.value,
      isHot: isHotRef.current.value,
      isSweet: isSweetRef.current.value,
      type: typeRef.current.value,
    };
    addTR(obj);
  };
  // useEffect(() => {
  //   const obj = {
  //     name: nameRef.current.value,
  //     des: desRef.current.value,
  //     price: priceRef.current.value,
  //     pattern: patternRef.current.value,
  //     att: attRef.current.value,
  //     isSold: isSoldRef.current.value,
  //     type: typeRef.current.value,
  //   };
  //   addTR(obj);
  // });
  return (
    <>
      <form
        action="submit"
        className="flex flex-col"
        onSubmit={(e) => {
          e.preventDefault();
          handlerSubmit();
          e.target.reset();
        }}
      >
        <div className="w-6/12 py-12 h-full mx-auto border border-solid border-rose-500">
          <label htmlFor="name" className="block w-full text-left">
            產品名：
            <input
              id="name"
              className="w-full border border-solid border-rose-500"
              ref={nameRef}
            />
          </label>
          <label htmlFor="description" className="block w-full text-left">
            描述：
            <input
              id="description"
              className="w-full border border-solid border-rose-500"
              ref={desRef}
            />
          </label>
          <label htmlFor="price" className="block w-full text-left">
            價錢：
            <input
              id="price"
              className="w-full border border-solid border-rose-500"
              ref={priceRef}
            />
          </label>
          <label htmlFor="pattern" className="block w-full text-left">
            處理法
            <input
              id="pattern"
              className="w-full border border-solid border-rose-500"
              ref={patternRef}
            />
          </label>
          <label htmlFor="attribute" className="block w-full text-left">
            烘琣度
            <input
              id="attribute"
              className="w-full border border-solid border-rose-500"
              ref={attRef}
            />
          </label>
          <label htmlFor="isSold">銷售狀態</label>
          <select
            name="isSold"
            id="isSold"
            className="block w-full text-left border border-solid border-rose-500"
            ref={isSoldRef}
          >
            <option disabled></option>
            <option value="false">賣完</option>
            <option value="true">有銷售</option>
          </select>
          <label htmlFor="isHot">溫度</label>
          <select
            name="isHot"
            id="isHot"
            className="block w-full text-left border border-solid border-rose-500"
            ref={isHotRef}
          >
            <option disabled></option>
            <option value="false">只有熱</option>
            <option value="true">都有</option>
          </select>
          <label htmlFor="isSweet">甜度</label>
          <select
            name="isSweet"
            id="isSweet"
            className="block w-full text-left border border-solid border-rose-500"
            ref={isSweetRef}
          >
            <option disabled></option>
            <option value="false">只有無糖</option>
            <option value="true">都有</option>
          </select>
          <label htmlFor="type" className="block w-full text-left">
            子類別
            <select
              name="type"
              id="type"
              className="block w-full text-left border border-solid border-rose-500"
              ref={typeRef}
            >
              <option disabled></option>
              <option value="咖啡">咖啡</option>
              <option value="義式咖啡">義式咖啡</option>
              <option value="茶">茶</option>
              <option value="其他">其他</option>
            </select>
          </label>
        </div>
        <button
          type="submit"
          className="mt-4 w-12 h-12 bg-rose-200 self-center"
        >
          新增
        </button>
      </form>
    </>
  );
};
export default AdminMainPage;
