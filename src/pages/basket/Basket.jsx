import React from "react";
import UserLayout from "../User/layout/UserLayout";
import MyButton from "../User/components/MyButton";

const Basket = () => {
  return (
    <UserLayout title={"Корзина"}>
      <div className=" mt-[50px] sm:mt-[100px] gap-y-4 flex flex-col lg:mb-[150px] mb-[50px] sm:mb-[100px] ">
        <div className="relative flex w-full flex-col lg:flex-row">
          <div className="flex flex-col w-[92%] mm:w-[88%] mx-auto">
            <div className="flex gap-3 mb-6 items-center">
              <div className="w-[8px] h-[43px] bg-mainColor " />
              <p className="text-[#313131] text-[24px] md:text-[32px] lg:text-[40px] font-semibold">
                Корзина
              </p>
            </div>
          </div>
        </div>
        <div className=" w-[92%] mm:w-[88%] mx-auto flex flex-row justify-between items-center">
          <div className="hidden md:flex justify-center items-center  w-[40%]">
            <p className="text-[20px] font-medium text-navcolor font-montserrat">
              Товар
            </p>
          </div>
          <div className="hidden md:flex justify-center items-center  w-[20%]">
            <p className="text-[20px] font-medium text-navcolor font-montserrat">
              Цена
            </p>
          </div>
          <div className="hidden md:flex justify-center items-center  w-[20%]">
            <p className="text-[20px] font-medium text-navcolor font-montserrat">
              Колличество
            </p>
          </div>
          <div className="hidden md:flex justify-center items-center  w-[20%]">
            <p className="text-[20px] font-medium text-navcolor font-montserrat">
              Итого
            </p>
          </div>
        </div>
        <div className=" w-[92%] mm:w-[88%] relative mx-auto flex flex-col md:flex-row justify-between items-center shadow-lg border  rounded p-3">
          <div className="absolute top-2 right-2 md:hidden w-[24px] h-[27px]">
            <img
              src="/Vector (13).svg"
              alt=""
              className="w-full h-full cursor-pointer"
            />
          </div>
          <div className="flex gap-x-4 py-8 justify-center w-full  md:w-[40%]">
            <div className="w-[30%] ">
              <img src="/Rectangle 132.png" alt="" />
            </div>
            <div className="w-[68%] flex flex-col">
              <p className="text-[19px] md:text-[22px] font-semibold text-navcolor font-montserrat">
                Балки фундаментные БФ c. 1.015.1-1.95
              </p>
              <p className="text-[15px] md:text-[19px] font-medium text-navcolor font-montserrat">
                ЖБИ Энергетического и Нефтегазового сектора
              </p>
            </div>
          </div>
          <div className="flex gap-x-8 justify-between md:hidden">
            <div className="flex flex-col items-center gap-y-2">
              <p className="text-[15px] font-medium text-navcolor font-montserrat">
                Колл-во
              </p>
              <input
                type="number"
                defaultValue={1}
                className="w-[80px] outline-none border-navcolor border-2 rounded-md px-2"
              />
            </div>
            <div className="flex flex-col items-center gap-y-2">
              <p className="text-[15px] font-medium text-navcolor font-montserrat">
                Цена
              </p>
              <p className="text-[15px] font-medium text-navcolor font-montserrat">
                Договорная
              </p>
            </div>
            <div className="flex flex-col items-center gap-y-2">
              <p className="text-[15px] font-medium text-navcolor font-montserrat">
                Итого
              </p>
              <p className="text-[15px] font-medium text-navcolor font-montserrat">
                0,0 ₽
              </p>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center  w-[20%]">
            <p className="text-[20px] font-medium text-navcolor font-montserrat">
              Договорная
            </p>
          </div>
          <div className="hidden md:flex justify-center items-center  w-[20%]">
            <p className="text-[20px] font-medium text-navcolor font-montserrat">
              <input
                type="number"
                defaultValue={1}
                className="w-[80px] outline-none border-navcolor border-2 rounded-md px-2"
              />
            </p>
          </div>
          <div className="hidden md:flex justify-center items-center  w-[20%] relative">
            <p className="text-[20px] font-medium text-navcolor font-montserrat">
              0,0 ₽
            </p>
            <div className="absolute bottom-[-30px] right-2 w-[27.27px] h-[30px] cursor-pointer">
              <img
                src="/Vector (13).svg"
                alt=""
                className="w-full h-full cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className=" w-[92%] mm:w-[88%] relative mx-auto flex flex-col md:flex-row justify-between items-center shadow-lg border  rounded p-3">
          <div className="absolute top-2 right-2 md:hidden w-[24px] h-[27px]">
            <img
              src="/Vector (13).svg"
              alt=""
              className="w-full h-full cursor-pointer"
            />
          </div>
          <div className="flex gap-x-4 py-8 justify-center w-full  md:w-[40%]">
            <div className="w-[30%] ">
              <img src="/Rectangle 132.png" alt="" />
            </div>
            <div className="w-[68%] flex flex-col">
              <p className="text-[19px] md:text-[22px] font-semibold text-navcolor font-montserrat">
                Балки фундаментные БФ c. 1.015.1-1.95
              </p>
              <p className="text-[15px] md:text-[19px] font-medium text-navcolor font-montserrat">
                ЖБИ Энергетического и Нефтегазового сектора
              </p>
            </div>
          </div>
          <div className="flex gap-x-8 justify-between md:hidden">
            <div className="flex flex-col items-center gap-y-2">
              <p className="text-[15px] font-medium text-navcolor font-montserrat">
                Колл-во
              </p>
              <input
                type="number"
                defaultValue={1}
                className="w-[80px] outline-none border-navcolor border-2 rounded-md px-2"
              />
            </div>
            <div className="flex flex-col items-center gap-y-2">
              <p className="text-[15px] font-medium text-navcolor font-montserrat">
                Цена
              </p>
              <p className="text-[15px] font-medium text-navcolor font-montserrat">
                Договорная
              </p>
            </div>
            <div className="flex flex-col items-center gap-y-2">
              <p className="text-[15px] font-medium text-navcolor font-montserrat">
                Итого
              </p>
              <p className="text-[15px] font-medium text-navcolor font-montserrat">
                0,0 ₽
              </p>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center  w-[20%]">
            <p className="text-[20px] font-medium text-navcolor font-montserrat">
              Договорная
            </p>
          </div>
          <div className="hidden md:flex justify-center items-center  w-[20%]">
            <p className="text-[20px] font-medium text-navcolor font-montserrat">
              <input
                type="number"
                defaultValue={1}
                className="w-[80px] outline-none border-navcolor border-2 rounded-md px-2"
              />
            </p>
          </div>
          <div className="hidden md:flex justify-center items-center  w-[20%] relative">
            <p className="text-[20px] font-medium text-navcolor font-montserrat">
              0,0 ₽
            </p>
            <div className="absolute bottom-[-30px] right-2 w-[27.27px] h-[30px] cursor-pointer">
              <img
                src="/Vector (13).svg"
                alt=""
                className="w-full h-full cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[100px] flex justify-end  w-[92%] mm:w-[88%] mx-auto gap-x-12 mb-12 mr-[21%]">
        <p className="text-[19px] md:text-[21px] font-semibold text-navcolor font-montserrat">
          ИТОГО
        </p>
        <p className="text-[19px] md:text-[21px] font-semibold text-navcolor font-montserrat">
          0,0₽
        </p>
      </div>
      <div className=" mb-[50px] flex justify-end flex-col md:flex-row px-4 md:px-0 md:w-[92%] mm:w-[88%] mx-auto">
        <MyButton title={"оформить"} class1={"uppercase px-12 lg:px-20"} />
      </div>
    </UserLayout>
  );
};

export default Basket;
