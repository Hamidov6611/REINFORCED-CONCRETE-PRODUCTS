import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyRedButton from "./MyRedButton";
import { navData } from "../../../data";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const productCount = useSelector((state) => state.product?.product);
  const activeNav = (id) => {
    navData?.map((c) => {
      if (c.id == id) {
        c.visible = true;
      } else {
        c.visible = false;
      }
    });
  };
  const menuHandler = () => setIsMenu((prev) => !prev);
  const menuHandlerClose = () => setIsMenu(false);
  return (
    <div className="w-[100%]  flex flex-col ">
      <div className="w-[92%] dd:w-[90%] hidden lg:flex mm:w-[88%] mx-auto h-[117px] items-center bg-navcolor rounded-b-[20px]">
        <div className="flex flex-row items-center justify-between gap-x-4 w-full px-[2%] mm:px-[4%]">
          <div className="flex gap-3 items-center">
            <img src="/Vector.svg" alt="" />
            <p className="text-white font-montserrat leading-normal text-[18px] md:text-[20px]">
              Санкт-Петербург
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <img src="/Vector (1).svg" alt="" />
            <Link className="text-white font-montserrat leading-normal text-[18px] md:text-[20px]">
              Nashe.delo.@mail.ru
            </Link>
          </div>
          <Link to={'/'} className="w-[160px] dd:w-[223px] h-[74px]">
            <img src="/Logo (1).svg" className="w-full h-full" alt="" />
          </Link>
          <div className="flex gap-3 items-center">
            <img src="/Vector (3).svg" alt="" />
            <Link to={"tel: +79999999999"} className="text-white font-montserrat leading-normal text-[18px] md:text-[20px]">
              +7(999) 999-99-99
            </Link>
          </div>
          <MyRedButton title={"Обратный звонок"} />
        </div>
      </div>
      <div className="w-full bg-navcolor h-[138px] rounded-b-[10px] flex items-center justify-around gap-x-8 px-[6%] lg:hidden relative">
        <Link to={'/'}>
          <img src="/public/Logo (1).svg" alt="" />
        </Link>
        <div onClick={menuHandler} className="cursor-pointer">
          <img src="/Vector (4).svg" alt="" />
        </div>
        {isMenu && (
          <div className="absolute top-[40px] right-0 z-20 rounded-[10px] w-[90%] flex flex-col lg:hidden h-[540px] bg-white shadow-3xl">
            <div className="w-full flex justify-around items-center h-[100px] px-[3%]">
              <Link to={'/'}>
                <img src="/Logo (2).svg" alt="" />
              </Link>
              <div onClick={menuHandler} className="cursor-pointer">
                <img src="/Vector (5).svg" alt="" />
              </div>
            </div>
            <div className="flex flex-col gap-y-3 px-[8%] w-full mt-[20px] text-navcolor font-medium text-[24px] font-inter">
              <Link onClick={menuHandlerClose} to={"/"}>
                Главная
              </Link>
              <Link onClick={menuHandlerClose} to={"/onas"}>
                О компании
              </Link>
              <Link onClick={menuHandlerClose} to={"/catalog"}>
                Каталог товаров
              </Link>
              <Link onClick={menuHandlerClose} to={"/new"}>
                Новости и полезное
              </Link>
              <Link onClick={menuHandlerClose} to={"/contact"}>
                Контакты
              </Link>
              <Link onClick={menuHandlerClose} to={"/basket"}>
                Корзина
              </Link>
            </div>
            <div className="flex flex-col mb-4 px-[8%] gap-y-4 mt-4">
              <div className="flex gap-x-3">
                <img src="/Vector (3).svg" alt="" />
                <p className="text-navcolor font-medium text-[24px] font-inter">
                  +7(999) 999-99-99
                </p>
              </div>
              <div className="flex gap-x-3">
                <img src="/Vector (1).svg" alt="" />
                <p className="text-navcolor font-medium text-[24px] font-inter">
                  Nashe.delo.@mail.ru
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="w-[88%] hidden md:w-[70%] h-[80px] mx-auto lg:flex justify-between items-center bg-white">
        {navData?.map((c) => (
          <div className="flex gap-x-2 items-center" key={c.id}>
            {c?.icon && (
              <div className="relative">
                <img src="/Vector (2).svg" alt="" />
                <div className="absolute  right-[-9px] top-[-12px] bg-[#FF0000] flex items-center justify-center text-white tetx-[13px] font-montserrat font-medium rounded-full w-[20px] h-[20px]">
                  <p>
                    {/* {productCount?.length} */}
                    2
                    </p>
                </div>
              </div>
            )}
            <Link
              onClick={() => activeNav(c.id)}
              to={c?.link}
              className={`${
                c?.visible ? "text-mainColor" : "text-navcolor"
              } font-montserrat leading-normal text-[18px] md:text-[20px]`}
            >
              {c?.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
