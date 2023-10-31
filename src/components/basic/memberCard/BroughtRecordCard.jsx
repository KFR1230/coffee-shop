const BroughtRecordCard = ({ ...props }) => {
  const { name, sweet, temp, count, price } = props.value;
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-2 mb-2 gap-x-4 gap-y-4">
        <div className="col-start-1 col-span-2 row-start-1 row-span-2">
          <p className="">{name}</p>
        </div>
        <div className="col-start-3 col-span-1 row-start-1 row-span-2">
          <p>
            {count} x {price}
          </p>
          <p>
            {sweet} {temp}
          </p>
        </div>
        <hr />
      </div>
    </>
  );
};

export default BroughtRecordCard;
