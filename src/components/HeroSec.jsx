import React from "react";

const HeroSec = () => {
  return (
    <>
      <main className="max-w-full w-full flex justify-center items-center gap-5 pt-20 md:pt-28 px-5 md:px-10">
        <div className="max-w-3xl w-full font-rubik">
          <div className="flex items-center gap-5 space-y-5">
            <h1 className="text-3xl md:text-4xl font-medium">HELLO</h1>
            <span className="bg-black h-[2.5px] max-w-96 w-full inline-block"></span>
          </div>
          <div className="space-y-5">
            <h1 className="text-5xl md:text-6xl font-semibold">
              I AM SHUBHAM SINGH
            </h1>
            <p className="text-xl font-medium md:text-2xl">
              Web Developer & SEO
            </p>

            <div className="flex gap-5 py-5">
              <button className="relative px-10 py-3 rounded-md text-white transition-all duration-300 ease-in-out overflow-hidden group border border-transparent hover:border-black">
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-400 transition-all duration-300 ease-in-out group-hover:opacity-0"></span>
                <span className="relative z-10 text-white group-hover:text-black text-sm font-medium">
                  HIRE ME
                </span>
              </button>

              <button className="relative px-10 py-3 rounded-md text-black transition-all duration-300 ease-in-out overflow-hidden group border border-black">
                <span className="absolute inset-0 bg-white transition-all duration-300 ease-in-out group-hover:opacity-0"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-400 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"></span>
                <span className="relative z-10 text-black group-hover:text-white text-sm font-medium">
                  GET CV
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Part */}
        <div className="max-w-2xl w-full hidden md:block">
          <img
            src="https://themewagon.github.io/satner/img/banner/home-right.png"
            alt="Image"
            className="object-cover"
          />
        </div>
      </main>
    </>
  );
};

export default HeroSec;
