"use client";

const EmpolyerHero = () => {
  return (
    <div className="relative w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://www.texicare.com/wp-content/uploads/2024/02/Warehouse-Birds-Eye-View.jpg")' }}>
      <div className="container mx-auto md:px-28">
        <div className="text-center text-white px-4 md:px-10 py-20 md:py-40">
          <h1 className="text-3xl md:text-7xl ">
            Your business is only as healthy as the people in it.
          </h1>
          <button
            className="bg-orange-500 hover:bg-orange-600 px-6 py-3 my-3 font-bold rounded-full text-white"
          >
            Find an Agent
          </button>
          <p className="text-xl mb-6">
            Sick days and loss of productivity can affect your bottom line. Get in touch with an agent to find healthcare coverage that helps you take care of your employees and your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmpolyerHero;