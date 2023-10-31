import Skeleton from 'react-loading-skeleton';

const AvatarTai = ({ memberAvatar, isLoading, setIsOpen }) => {
  if (isLoading) {
    return (
      <div className="flex -space-x-1  justify-center">
        <label htmlFor="chooseImg" className="cursor-pointer">
          <Skeleton
            className="inline-block h-40 w-40 rounded-full ring-2 ring-white object-cover"
            src=""
            alt=""
          />
        </label>
      </div>
    );
  }

  return (
    <div className="flex -space-x-1  justify-center">
      <label htmlFor="chooseImg" className="cursor-pointer">
        <img
          className="inline-block h-40 w-40 rounded-full ring-2 ring-transparent object-cover hover:w-48"
          src={
            memberAvatar
              ? memberAvatar
              : 'https://cdn2.aprico-media.com/production/imgs/images/000/029/940/original.png?1553946576'
          }
          alt=""
        />
      </label>
      <button
        id="chooseImg"
        className="hidden"
        onClick={(e) => {
          setIsOpen(true);
          e.stopPropagation();
          e.preventDefault();
        }}
      />
    </div>
  );
};

export default AvatarTai;
