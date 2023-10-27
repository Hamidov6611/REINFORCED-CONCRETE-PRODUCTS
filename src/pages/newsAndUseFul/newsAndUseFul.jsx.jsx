import React from "react";
import UserLayout from "../User/layout/UserLayout";
import MyButton from "../User/components/MyButton";
import HeroNews from "../User/components/HeroNews";
import Reviews from "../User/components/Reviews";

const NewsAndUseful = () => {
  return (
    <UserLayout title={"Новости и полезное"}>
      <div className=" mt-[50px] sm:mt-[100px] gap-y-4 flex flex-col lg:mb-[150px] mb-[50px] sm:mb-[100px] ">
        <div className="relative flex w-full flex-col lg:flex-row">
          <div className="flex flex-col w-[92%] mm:w-[88%] mx-auto">
            <div className="flex gap-3 mb-6 items-center">
              <div className="w-[8px] h-[43px] bg-mainColor " />
              <p className="text-[#313131] text-[24px] md:text-[32px] lg:text-[40px] font-semibold">
                Новости и полезное
              </p>
            </div>

            <p className="text-[16px] md:w-[39%] md:text-[18px] font-medium text-lightGray mt-4">
              Высотными принято считать здания, число этажей которых превышает
              30. Как показывает мировая практика, в крупных городах
              строительство высотных зданий получает все большее развитие, что
              обусловлено высокой стоимостью земельных участков, ограниченностью
              городских площадей, интенсивным ростом населения и другими
              причинами. <br className="sm:hidden" />
              <br className="sm:hidden" /> Накопленный за рубежом опыт говорит о
              том, что с учетом стоимости земли оптимальными по экономическим
              показателям являются 30-50 этажные здания. Здания большей
              этажности возводят исходя из соображений престижности,
              архитектурной значимости или дороговизны земельных участков.
            </p>
          </div>
          <div className="lg:absolute mt-4 hidden lg:flex lg:right-0 lg:mt-0 lg:w-[47%]">
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

export default NewsAndUseful;
