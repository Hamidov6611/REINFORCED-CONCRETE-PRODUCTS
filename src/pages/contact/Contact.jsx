import React from "react";
import UserLayout from "../User/layout/UserLayout";
import MyButton from "../User/components/MyButton";
import HeroNews from "../User/components/HeroNews";

const Contact = () => {
  return (
    <UserLayout title={"Контакты"}>
      <div className=" mt-[50px] sm:mt-[100px] gap-y-4 flex flex-col lg:mb-[150px] mb-[50px] sm:mb-[100px] ">
        <div className="relative flex w-full flex-col lg:flex-row">
          <div className="flex flex-col w-[92%] mm:w-[88%] mx-auto">
            <div className="flex gap-3 mb-6 items-center">
              <div className="w-[8px] h-[43px] bg-mainColor " />
              <p className="text-[#313131] text-[24px] md:text-[32px] lg:text-[40px] font-semibold">
                Контакты
              </p>
            </div>
            <p className="text-[18px] md:w-[53%] md:text-[20px] text-navcolor font-medium font-montserrat">
              Нам очень важно знать мнение клиентов о нашей работе. Напишите нам
              свои пожелания или закажите обратный звонок. Мы свяжемся с вами в
              самое ближайшее время!
            </p>
            {/*  LEFT */}
            <div className="w-full flex md:flex-row my-12 md:my-20 flex-col md:ap-x-[20%] gap-y-6">
              <div className="flex w-full flex-col gap-y-4 md:px-6 py-4">
                <div className="flex gap-x-8 items-center bg-[#F5F5F5] px-4 py-3 w-full">
                  <div>
                    <img src="/Vector (3).svg" alt="" />
                  </div>
                  <p className="text-[19px] md:text-[22px] text-navcolor font-medium font-montserrat">
                    +7(999) 999-99-99
                  </p>
                </div>
                <div className="flex gap-x-8 items-center bg-[#fff] px-4 py-3 w-full">
                  <div>
                    <img src="/Vector (1).svg" alt="" />
                  </div>
                  <p className="text-[19px] md:text-[22px] text-navcolor font-medium font-montserrat">
                    Nashe.delo.@mail.ru
                  </p>
                </div>
                <div className="flex gap-x-8 items-center bg-[#F5F5F5] px-4 py-3 w-full">
                  <div>
                    <img src="/Vector (8).svg" alt="" />
                  </div>
                  <p className="text-[19px] md:text-[22px] text-navcolor font-medium font-montserrat">
                    Санкт-Петербург, пр. Пушкина д 32
                  </p>
                </div>
                <div className="flex gap-x-8 items-center bg-[#fff] px-4 py-3 w-full">
                  <div>
                    <img src="/Vector (9).svg" alt="" />
                  </div>
                  <p className="text-[19px] md:text-[22px] text-navcolor font-medium font-montserrat">
                    ПН-ПТ 9:00 до 18:00
                  </p>
                </div>
              </div>
              {/*  RIGHT */}
              <div className="flex w-full flex-col gap-y-4 shadow-md border rounded-[2px] px-6 md:px-12 py-4">
                <div className="flex gap-x-4 items-center  px-4 py-2 w-full">
                  <p className="text-[19px] md:text-[22px] lg:text-[33px] text-[#000] font-semibold font-montserrat">
                    Оставьте сообщение
                  </p>
                </div>

                <div className="flex flex-col gap-y-6 mt-8">
                  <div className="flex items-center">
                    <div className="absolute w-[26px] h-[29px]">
                      <img
                        src="/Vector (6).svg"
                        alt=""
                        className="w-full h-full"
                      />
                    </div>
                    <input
                      type="text"
                      className=" outline-none py-2 px-12 text-navcolor bg-transparent font-normal font-montserrat text-[17px] md:text-[18px] border-b border-b-slate-300 w-full"
                      placeholder="Введите ваше имя"
                    />
                  </div>
                  <div className="flex items-center">
                    <div className="absolute w-[26px] h-[29px]">
                      <img
                        src="/Vector (3).svg"
                        alt=""
                        className="w-full h-full"
                      />
                    </div>
                    <input
                      type="text"
                      className=" outline-none py-2 px-12 text-navcolor bg-transparent font-normal font-montserrat text-[17px] md:text-[18px] border-b border-b-slate-300 w-full"
                      placeholder="Номер телефона"
                    />
                  </div>
                  <div className="flex items-center">
                    <div className="absolute w-[26px] h-[29px]">
                      <img
                        src="/Vector (11).svg"
                        alt=""
                        className="w-full h-full"
                      />
                    </div>
                    <input
                      type="text"
                      className=" outline-none py-2 px-12 text-navcolor bg-transparent font-normal font-montserrat text-[17px] md:text-[18px] border-b border-b-slate-300 w-full"
                      placeholder="Введите ваше сообщение"
                    />
                  </div>
                </div>
                <div className="md:flex hidden justify-center items-center my-6">
                  <MyButton
                    title={"Оставить заявку"}
                    class1={"px-8 lg:px-12"}
                  />
                </div>
                <MyButton
                    title={"Оставить заявку"}
                    class1={"px-8 lg:px-12 md:hidden"}
                  />
              </div>
            </div>
          </div>
        </div>
        <HeroNews />
      </div>
    </UserLayout>
  );
};

export default Contact;
