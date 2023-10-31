import SwitchProduct from '../basic/SwitchProduct';

const ProductLayout = ({ title, subTitle, onClick }) => {
  return (
    <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8 transform transition-all">
      <h2 className="text-4xl font-bold tracking-tight text-slate-100">
        {title}
      </h2>
      <p className="text-sm text-slate-300">{subTitle}</p>
      <div className="mt-6 grid items-center grid-cols-2 gap-x-6 gap-y-4 xl:gap-x-10 max-lg:grid-cols-1">
        <SwitchProduct
          title={title}
          subTitle={subTitle}
          onClick={(name) => onClick?.(name)}
        />
      </div>
    </div>
  );
};

export default ProductLayout;
