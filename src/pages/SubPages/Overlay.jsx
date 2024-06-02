const OverLay = (props) => {
  return (
    props.loading && (
      <div className="absolute overflow-hidden cursor-wait inset-0 text-gray-500 w-full h-full z-20 bg-white bg-opacity-60 rounded-lg rounded-t-none animate-pulse">
        {!props.hide && (
          <span className="h-[3px] progress-span absolute bg-primary-700 dark:bg-primary-800 block"></span>
        )}
      </div>
    )
  );
};

export default OverLay;
