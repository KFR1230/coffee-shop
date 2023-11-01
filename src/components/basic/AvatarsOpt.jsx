const AvatarsOpt = ({ item, onClick }) => {
  return (
    <>
      <button
        htmlFor="chooseImg"
        className="cursor-pointer min-w-max"
        onClick={(e) => {
          onClick?.(item);
          e.stopPropagation();
        }}
      >
        <img
          className="inline-block
                        rounded-full ring-2 ring-white object-cover 
                        h-10 w-10
                        min-w-min min-h-min cursor-pointer"
          src={
            item ||
            'https://cdn2.aprico-media.com/production/imgs/images/000/029/940/original.png?1553946576'
          }
          alt="member-avatar"
        />
      </button>
    </>
  );
};

export default AvatarsOpt;
