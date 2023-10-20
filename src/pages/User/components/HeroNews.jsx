import React from "react";
import MyButton from "./MyButton";

const HeroNews = () => {
  return (
    <div className="lg:mt-[200px] mt-[50px] sm:mt-[100px] gap-y-4 flex flex-col w-[92%] mm:w-[88%] mx-auto ">
      <div className="flex gap-3 mb-6 items-center">
        <div className="w-[8px] h-[43px] bg-mainColor " />
        <p className="text-[#313131] text-[24px] md:text-[32px] lg:text-[40px] font-semibold">
          Новости
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-x-4 gap-y-4">
        <div className="flex flex-col gap-y-4 my-shadow2 rounded-[5px]">
          <div className="h-[321px]">
            <img
              src="/Rectangle 99.png"
              alt="Rectangle 99.png"
              className="w-full h-full rounded-[5px]"
            />
          </div>
          <div className="flex flex-col gap-y-2 px-3 md:px-6">
            <p className="text-[21px] w-[90%] md:text-[26px] text-navcolor font-medium md:font-semibold font-montserrat border-b-[3px] border-b-mainColor">
              ВЫСОТНОЕ СТРОИТЕЛЬСТВО С <br /> ИСПОЛЬЗОВАНИЕМ ЖБИ
            </p>
            <p className="text-navcolor text-[18px] md:text-[21px] font-medium font-montserrat">
              24.09.23
            </p>
            <p className="text-slate-600 text-[18px] md:text-[21px] font-medium font-montserrat">
              Большинство современных многоэтажек <br /> строят по принципу
              каркасного <br /> строительства с применением...
            </p>
          </div>
          <div className="px-3 md:px-6 mb-4">
            <MyButton title={"Подробнее"} />
          </div>
        </div>
        <div className="flex flex-col gap-y-4 my-shadow2 rounded-[5px]">
          <div className="h-[321px]">
            <img
              src="/Rectangle 99.png"
              alt="Rectangle 99.png"
              className="w-full h-full rounded-[5px]"
            />
          </div>
          <div className="flex flex-col gap-y-2 px-3 md:px-6">
            <p className="text-[21px] w-[90%] md:text-[26px] text-navcolor font-medium md:font-semibold font-montserrat border-b-[3px] border-b-mainColor">
              ВЫСОТНОЕ СТРОИТЕЛЬСТВО С <br /> ИСПОЛЬЗОВАНИЕМ ЖБИ
            </p>
            <p className="text-navcolor text-[18px] md:text-[21px] font-medium font-montserrat">
              24.09.23
            </p>
            <p className="text-slate-600 text-[18px] md:text-[21px] font-medium font-montserrat">
              Большинство современных многоэтажек <br /> строят по принципу
              каркасного <br /> строительства с применением...
            </p>
          </div>
          <div className="px-3 md:px-6 mb-4">
            <MyButton title={"Подробнее"} />
          </div>
        </div>
        <div className="flex flex-col gap-y-4 my-shadow2 rounded-[5px]">
          <div className="h-[321px]">
            <img
              src="/Rectangle 99.png"
              alt="Rectangle 99.png"
              className="w-full h-full rounded-[5px]"
            />
          </div>
          <div className="flex flex-col gap-y-2 px-3 md:px-6">
            <p className="text-[21px] w-[90%] md:text-[26px] text-navcolor font-medium md:font-semibold font-montserrat border-b-[3px] border-b-mainColor">
              ВЫСОТНОЕ СТРОИТЕЛЬСТВО С <br /> ИСПОЛЬЗОВАНИЕМ ЖБИ
            </p>
            <p className="text-navcolor text-[18px] md:text-[21px] font-medium font-montserrat">
              24.09.23
            </p>
            <p className="text-slate-600 text-[18px] md:text-[21px] font-medium font-montserrat">
              Большинство современных многоэтажек <br /> строят по принципу
              каркасного <br /> строительства с применением...
            </p>
          </div>
          <div className="px-3 md:px-6 mb-4">
            <MyButton title={"Подробнее"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroNews;
