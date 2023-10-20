import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="min-h-[370px] bg-navcolor w-full px-[5%] py-[3%]">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-6">
        <div className="w-full flex justify-center items-center sm:justify-start sm:items-start my-6 sm:my-0">
          <img src="/public/Logo (1).svg" alt="" />
        </div>
        <div className="flex flex-col gap-y-2 w-full justify-center items-center sm:justify-start sm:items-start">
          <div className="flex gap-3 mb-6 items-center">
            <div className="w-[5.27px] h-[25px] bg-mainColor " />
            <p className="text-[#fff] text-[18px] md:text-[23px] uppercase font-semibold">
              Страницы
            </p>
          </div>

          <Link className="text-white text-[16px] md:text-[18px] font-medium font-montserrat leading-normal">
            О компании
          </Link>
          <Link className="text-white text-[16px] md:text-[18px] font-medium font-montserrat leading-normal">
            Каталог товаров
          </Link>
          <Link className="text-white text-[16px] md:text-[18px] font-medium font-montserrat leading-normal">
            Полезное
          </Link>
          <Link className="text-white text-[16px] md:text-[18px] font-medium font-montserrat leading-normal">
            Контакты
          </Link>
          <Link className="text-white text-[16px] md:text-[18px] font-medium font-montserrat leading-normal">
            Новости и статьи
          </Link>
        </div>

        <div className="flex flex-col gap-y-2 w-full justify-center items-center sm:justify-start sm:items-start">
          <div className="flex gap-3 mb-6 items-center">
            <div className="w-[5.27px] h-[25px] bg-mainColor " />
            <p className="text-[#fff] text-[18px] md:text-[23px] uppercase font-semibold">
              Новости
            </p>
          </div>

          <Link className="text-white text-[16px] md:text-[18px] font-medium font-montserrat">
            Высотное строительство с <br /> использованием жби...
          </Link>
          <Link className="text-white text-[16px] md:text-[18px] font-medium font-montserrat leading-normal">
            Дефекты ЖБИ
          </Link>
          <Link className="text-white text-[16px] md:text-[18px] font-medium font-montserrat leading-normal">
            Хранение ЖБИ
          </Link>
        </div>
        <div className="flex flex-col gap-y-2 w-full items-center">
          <div className="flex gap-3 mb-6 items-center">
            <div className="w-[5.27px] h-[25px] bg-mainColor " />
            <p className="text-[#fff] text-[18px] md:text-[23px] uppercase font-semibold">
              Контакты
            </p>
          </div>

          <div className=" flex flex-col gap-y-2">
            <div className="flex gap-x-4">
              <div className="w-[18.97px] h-[23.14px]">
                <img src="/Vector.svg" alt="" className="w-full h-full " />
              </div>
              <p className="text-white text-[16px] md:text-[18px] font-medium font-montserrat leading-normal">
                Санкт-Петербург
              </p>
            </div>
            <div className="flex gap-x-4">
              <div className="w-[18.97px] h-[23.14px]">
                <img src="/Vector (1).svg" alt="" className="w-full h-full " />
              </div>
              <p className="text-white text-[16px] md:text-[18px] font-medium font-montserrat leading-normal">
                Nashe.delo.@mail.ru
              </p>
            </div>
            <div className="flex gap-x-4">
              <div className="w-[18.97px] h-[23.14px]">
                <img src="/Vector (3).svg" alt="" className="w-full h-full " />
              </div>
              <p className="text-white text-[16px] md:text-[18px] font-medium font-montserrat leading-normal">
                +7(999) 999-99-99
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
