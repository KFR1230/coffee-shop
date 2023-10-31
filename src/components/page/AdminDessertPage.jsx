import { useEffect, useRef, useState } from 'react';
import { addDR, postImg } from '../../api/data';

const AdminDessertPage = () => {
  const [file, setFile] = useState(null);
  const nameRef = useRef();
  const desRef = useRef();
  const priceRef = useRef();
  const isSoldRef = useRef();
  const typeRef = useRef();
  const handlerSubmit = async () => {
    if (file === null) {
      return;
    }
    // const url = URL.createObjectURL(file);

    try {
      const res = await postImg(file, 'food-images', nameRef.current.value);
      const obj = {
        name: nameRef.current.value,
        des: desRef.current.value,
        price: priceRef.current.value,
        isSold: isSoldRef.current.value,
        type: typeRef.current.value,
        url: res,
      };
      await addDR(obj);
      console.log('完成');
    } catch (error) {
      console.log(error);
    }
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
        onSubmit={async (e) => {
          e.preventDefault();
          await handlerSubmit();
          e.target.reset();
        }}
      >
        <div className="w-6/12 py-12 h-full mx-auto border border-solid border-rose-500">
          <label htmlFor="post-img" className="block mb-10 w-20 h-20 ">
            <img
              src={
                file
                  ? `${URL.createObjectURL(file)}`
                  : `https://i.pinimg.com/564x/59/45/97/59459783a0f96eed7210c5802c939793.jpg`
              }
              alt=""
            />
          </label>
          <input
            type="file"
            id="post-img"
            className="hidden"
            onChange={(e) => {
              // console.log(e.target.files[0]);
              setFile(e.target.files[0]);
            }}
          />
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
          <label htmlFor="type" className="block w-full text-left">
            子類別
            <select
              name="type"
              id="type"
              className="block w-full text-left border border-solid border-rose-500"
              ref={typeRef}
            >
              <option disabled></option>
              <option value="甜點">甜點</option>
              <option value="輕食">輕食</option>
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
export default AdminDessertPage;
