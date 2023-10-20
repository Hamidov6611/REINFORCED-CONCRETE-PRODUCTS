import React from "react";
import MyBlackButton from "./MyBlackButton";

const CONSULTATION = () => {
  return (
    <div className="w-[98%] mx-auto min-h-[602px] gap-y-12 py-12 flex md:flex-row flex-col bg-navcolor rounded-[20px] mt-[80px] px-[30px] md:px-[50px] lg:px-[80px] pt-[15px] md:pt-[30px] lg:pt-[60px]">
      <div className="w-full md:w-[50%]">
        <p className="text-white text-center md:text-start mt-10 md:mt-0 text-[24px] md:text-[18px] lg:text-[36px] font-semibold">
          БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ
        </p>
        <p className="font-normal font-montserrat text-center md:text-start text-[14px] mt-3 text-white md:text-[17px]">
          Сориентируем по стоимости, сроками доставке{" "}
          <br className="hidden md:flex" /> железобетонных изделий
        </p>

        <div className="my-4 flex flex-col space-y-12 md:w-[66%] w-full">
          <div className="relative w-full mt-6">
            <div className="absolute w-[26px] h-[29px]">
              <img src="/Vector (6).svg" alt="" className="w-full h-full" />
            </div>
            <input
              type="text"
              className=" outline-none py-2 px-12 text-slate-300 bg-transparent font-normal font-montserrat text-[17px] md:text-[18px] border-b border-b-slate-300 w-full"
              placeholder="Введите ваше имя"
            />
          </div>
          <div className="relative w-full">
            <div className="absolute w-[26px] h-[29px]">
              <img src="/Vector (7).svg" alt="" className="w-full h-full" />
            </div>
            <input
              type="text"
              className=" outline-none py-2 px-12 text-slate-300 bg-transparent font-normal font-montserrat text-[17px] md:text-[18px] border-b border-b-slate-300 w-full"
              placeholder="Номер телефона"
            />
          </div>
        </div>
        <div className="mt-12 md:mt-16 mb-3">
          <MyBlackButton title={"Оставить заявку"} class1={"px-24"} />
        </div>
        <p className="p-0 m-0 text-center md:text-start font-normal font-montserrat text-[14px] mt-3 text-white md:text-[17px]">
          Заполняя эту форму, вы даете согласие <br /> наобработку ваших
          персональных данных
        </p>
      </div>
      <div className="w-full md:w-[50%]">
        <img src="/Mask group.png" alt="" className="w-full h-full" />
      </div>
    </div>
  );
};

export default CONSULTATION;
