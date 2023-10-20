import React from "react";
import UserLayout from "../User/layout/UserLayout";
import MyButton from "../User/components/MyButton";
import HeroNews from "../User/components/HeroNews";
import Reviews from "../User/components/Reviews";

const Onas = () => {
    
  return (
    <UserLayout title={"О компании"}>
      <div className="mt-[50px] sm:mt-[100px] gap-y-4 flex flex-col lg:mb-[150px] mb-[50px] sm:mb-[100px] ">
        <div className="relative flex w-full flex-col lg:flex-row">
          <div className="flex flex-col w-[92%] mm:w-[88%] mx-auto">
            <div className="flex gap-3 mb-6 items-center">
              <div className="w-[8px] h-[43px] bg-mainColor " />
              <p className="text-[#313131] text-[24px] md:text-[32px] lg:text-[40px] font-semibold">
                О компании
              </p>
            </div>
            <p className="text-[24px] md:w-[50%] md:text-[32px] font-medium md:font-semibold text-navcolor mt-4">
              О ЗАВОДЕ "НАША ТЕМА"
            </p>
            <p className="text-[16px] md:w-[50%] md:text-[18px] font-medium text-lightGray mt-4">
              Завод "НАША ТЕМА" производитель железобетонных изделий для
              гражданского, дорожного и промышленного назначения. Мы работаем на
              рынке стройматериалов с 2016 года и изучили этот рынок полностью.
              Производим широкий перечень продукции и постоянно увеличиваем
              ассортимент изделий для более полного удовлетворения
              потребительского спроса.
            </p>

            <div className="mt-[6%] w-full flex justify-center md:justify-start">
              <MyButton
                title={"Оставить заявку"}
                class1={"px-12 md:px-16 lg:px-20"}
              />
            </div>
          </div>
          <div className="lg:absolute mt-4 hidden lg:flex lg:right-0 lg:mt-0 lg:w-[37%]">
            <img src="/Фотка.svg" alt="" className="w-full h-full" />
          </div>
          <div className="w-[90%] mr-0 ml-[10%] mt-[35px] lg:hidden flex justify-end ">
            <img src="/Фотка.svg" alt="" />
          </div>
        </div>
      </div>

      <HeroNews />
      {/* <div className="my-12"></div> */}


    <Reviews />
    </UserLayout>
  );
};

export default Onas;
