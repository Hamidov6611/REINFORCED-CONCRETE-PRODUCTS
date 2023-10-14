import React from "react";
import UserLayout from "../layout/UserLayout";
import MyButton from "./MyButton";
import MyProducts from "./MyProducts";
import Steps from "./Steps";

const Hero = () => {
  return (
    <div className="my-[50px] w-full">
      <div className="relative flex w-full flex-col lg:flex-row">
        <div className="flex flex-col w-[92%] mm:w-[88%] mx-auto mt-[5%]"  >
          <p className="uppercase font-montserrat text-[32px] md:text-[42px] mm:text-[65px] font-semibold lg:font-[800] text-navcolor">
            Железобетонные
          </p>
          <p className="uppercase font-montserrat text-[32px] md:text-[42px] mm:text-[65px] font-semibold lg:font-[800] text-navcolor">
            {" "}
            ИЗДЕЛИЯ
          </p>
          <p className="text-[16px] md:text-[18px] font-medium text-lightGray hidden lg:flex">Работаем  с вами от консультации до поставки товара с <br /> окончательным сопровождением бухгалтерии</p>
          <p className="text-[18px] tracking-[1px] md:text-[18px] font-medium text-lightGray lg:hidden">Работаем  с вами от консультации <br /> до  поставки товара с <br /> окончательным сопровождением бухгалтерии</p>

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
    </div>
  );
};

export default Hero;
