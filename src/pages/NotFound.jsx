export default function NotFound() {
  return (
    <div>
      <div className="fixed bg-black bg-opacity-80 inset-0 w-full h-full z-0"></div>
      <div className="flex flex-col justify-start items-center mt-16 px-6 z-10 relative mx-auto xl:px-0 ">
        <div className="block md:max-w-lg"></div>
        <div className="text-center xl:max-w-4xl">
          <h1 className="mb-3 text-2xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl ">
            الصفحة غير موجودة
          </h1>
          <p className="mb-5 text-base font-normal text-white md:text-lg ">
            يبدو أنك اتبعت رابطًا سيئًا.
          </p>
          <a
            href="/"
            className="text-white bg-primary hover:bg-primary dark:hover:bg-primary focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-3 "
          >
            <svg
              className="me-2 -ms-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            ارجع الى الرئيسية
          </a>
        </div>
      </div>
    </div>
  );
}
