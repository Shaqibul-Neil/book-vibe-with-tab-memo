const Banner = () => {
  return (
    <div className="lg:py-20 md:py-16 py-12 bg-[rgba(19,19,19,0.05)] rounded-md flex flex-col lg:flex-row justify-between items-center mt-8 lg:px-28 px-4 mb-24">
      <div className="space-y-8 lg:order-1 order-2 lg:mt-0 mt-12">
        <h1 className="font-bold lg:text-6xl md:text-5xl text-3xl lg:leading-20 md:leading-16 leading-12 px-8 lg:px-0">
          Books to freshen up <br /> your bookshelf
        </h1>
        <div className="flex items-center lg:justify-start justify-center">
          <button className="btn bg-green-600 text-white px-6 rounded-lg">
            View the List
          </button>
        </div>
      </div>
      <div className="lg:order-2 order-1">
        <img src="../public/banner.png" className="subtle-bounce" alt="" />
      </div>
    </div>
  );
};

export default Banner;
