import React from "react";
import UserLayout from "../layout/UserLayout";
import MyButton from "./MyButton";
import MyProducts from "./MyProducts";
import Steps from "./Steps";
import UseFul from "./UseFul";
import CONSULTATION from "./CONSULTATION";
import Completed from "./Completed";
import HeroNews from "./HeroNews";
import Hero2 from "./Hero2";
import Reviews from "./Reviews";

const Hero = () => {
  return (
    <div className="my-[50px] w-full">
      <div className="relative flex w-full flex-col lg:flex-row">
        <div className="flex relative flex-col w-[92%] mm:w-[88%] mx-auto mt-[5%]">
          <div>
            <img src="/Vector 2.svg" alt="" className="absolute -z-10 top-0 left-0"/>
          </div>
          <p className="uppercase font-montserrat text-[32px] md:text-[42px] mm:text-[65px] font-semibold lg:font-[800] text-navcolor">
            Железобетонные
          </p>
          <p className="uppercase font-montserrat text-[32px] md:text-[42px] mm:text-[65px] font-semibold lg:font-[800] text-navcolor">
            {" "}
            ИЗДЕЛИЯ
          </p>
          <p className="text-[16px] md:text-[18px] font-medium text-lightGray hidden lg:flex">
            Работаем с вами от консультации до поставки товара с <br />{" "}
            окончательным сопровождением бухгалтерии
          </p>
          <p className="text-[18px] tracking-[1px] md:text-[18px] font-medium text-lightGray lg:hidden">
            Работаем с вами от консультации <br /> до поставки товара с <br />{" "}
            окончательным сопровождением бухгалтерии
          </p>

          <div className="mt-[6%]">
            <MyButton title={"Расчитать стоимость"} />
          </div>
        </div>
        <div className="lg:absolute hidden lg:flex lg:right-0 lg:mt-0 lg:w-[47%]">
          <img src="/Фотка.svg" alt="" className="w-full h-full" />
        </div>
        <div className="w-[90%] mr-0 ml-[10%] mt-[35px] lg:hidden flex justify-end ">
          <img src="/Фотка.svg" alt="" />
        </div>
      </div>

      <MyProducts />
      <Steps />
      <UseFul />
      <CONSULTATION />
      <Completed />
      <HeroNews />
      <Hero2 />
      <Reviews />
    </div>
  );
};

export default Hero;
