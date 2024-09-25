"use client";

const EmployerHero = () => {
  return (
    <>
      <div
        className="relative w-full h-full bg-cover bg-center transition-all"
        style={{ backgroundImage: 'url("https://www.texicare.com/wp-content/uploads/2024/02/Warehouse-Birds-Eye-View.jpg")' }}
      >
        <div className="container mx-auto lg:px-28 md:px-20 py-32 md:py-0">
          {/* Desktop View */}
          <div className="text-center text-white px-4 lg:px-10 py-20 md:py-40 hidden md:block">
            <h1 className="text-4xl md:text-[75px] md:leading-[75px] font-[600]">
              Your business is only as healthy as the people in it.
            </h1>
            <button
              className="bg-primary hover:bg-white border-2 hover:text-primary border-primary px-6 py-3 my-3 font-bold rounded-full text-white text-xl font-avenir-bold"
              style={{ fontSize: '20px !important', lineHeight: '20px !important' }}
            >
              Find an Agent
            </button>
            <p className="text-[22px] leading-8 mb-6">
              Sick days and loss of productivity can affect your bottom line. Get in touch with an agent to find healthcare coverage that helps you take care of your employees and your business.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="text-center text-white px-10 md:px-5 mt-20 mb-15 md:py-40 block md:hidden">
        <h1 className="text-4xl md:text-[75px] md:leading-[75px] font-[600] text-[#001748] text-left font-avenir-bold">
          Your business is only as healthy as the people in it.
        </h1>
        <p className="text-lg md:text-[22px] leading-8 mb-6 text-[#3b3b3b] text-left mt-4">
          Sick days and loss of productivity can affect your bottom line. Get in touch with an agent to find healthcare coverage that helps you take care of your employees and your business.
        </p>
        <button
          className="bg-primary hover:bg-white border-2 hover:text-primary border-primary px-6 py-3 my-3 font-bold rounded-full text-white text-xl font-avenir-bold"
          style={{ fontSize: '20px !important', lineHeight: '20px !important' }}
        >
          Find an Agent
        </button>
      </div>
    </>
  );
};

export default EmployerHero;
