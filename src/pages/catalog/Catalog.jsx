import React, { useEffect, useState } from "react";
import UserLayout from "../User/layout/UserLayout";
import axios from "axios";
import { url } from "../../service/url";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import MyButton from "../User/components/MyButton";
import { Link, useNavigate } from "react-router-dom";

const Catalog = () => {
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [products2, setProducts2] = useState([]);
  const [isCat, setIsCat] = useState(false);
  const navigate = useNavigate();
  const getCategoryData = async () => {
    try {
      const { data } = await axios.get(
        `${url}/b_sayt/api/main_category_list_views/`
      );
      setCategory(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategoryData();
  }, []);

  async function getProductByMainCategoryId(id) {
    try {
      const { data } = await axios.get(
        `${url}/b_sayt/api/prouduct_main_category_list_views/${id}/`
      );
      return data?.data?.results;
    } catch (error) {
      console.log(error);
    }
  }

  const toggleButton = async (id) => {
    try {
      const { data } = await axios.get(
        `${url}/b_sayt/api/category_list_views/${id}/`
      );
      console.log(data);
      setCategory((prevCards) =>
        prevCards.map((card) =>
          card?.id === id
            ? { ...card, visible: true, data }
            : { ...card, visible: false, data: [] }
        )
      );
      const product = await getProductByMainCategoryId(id);
      console.log(product);
      setProducts(product);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductData = async () => {
    try {
      const { data } = await axios.get(
        `${url}/b_sayt/api/prouduct_all_objects_list_views/`
      );
      setProducts(data?.data?.results);
      setProducts2(data?.data?.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProductData();
  }, []);

  const sendCatalog = (id) => {
    navigate(`/catalog/${id}`);
    document.body.scrollTop = 0;
  };

  return (
    <UserLayout title={"Каталог"}>
      <div className="mt-[50px] sm:mt-[100px] gap-y-4 flex flex-col mb-3">
        <div className="relative flex w-full flex-col lg:flex-row">
          <div className="flex flex-col w-[92%] mm:w-[88%] mx-auto">
            <div className="flex gap-3 mb-6 items-center">
              <div className="w-[8px] h-[43px] bg-mainColor " />
              <p className="text-[#313131] text-[24px] sm:text-[32px] lg:text-[40px] font-semibold">
                Каталог
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[95%] flex justify-between  mx-auto  mb-6 ">
        <div
          onClick={() => setIsCat(true)}
          className="p-3 w-[176px] md:hidden flex cursor-pointer items-center shadow-md rounded-lg justify-between"
        >
          <p className="text-[18px] text-navcolor font-montserrat font-semibold">
            Категории
          </p>
          <img src="/Vector (16).svg" alt="" />
        </div>
      </div>
      {isCat && (
        <div className="">
          <div className="w-[90%] absolute bg-white left-0 top-[140px] z-40 my-shadow2 rounded-md">
            <div className="flex md:hidden w-[90%] pl-[5%] pb-6 flex-col gap-y-3 mt-4">
              <div
                onClick={() => setIsCat(false)}
                className="flex cursor-pointer w-full justify-end"
              >
                <img src="/clear.svg" alt="" className="w-[18px] h-[18px] " />
              </div>
              <div className="flex w-full items-center mb-6 justify-between">
                <p className="text-[22px] font-semibold font-montserrat text-[#000]">
                  Категории
                </p>
              </div>
              {category?.map((c, i) => (
                <div className="flex flex-col">
                  <div
                    key={i}
                    onClick={() => toggleButton(c.id)}
                    className="flex cursor-pointer items-center justify-between"
                  >
                    <p className="text-[21px] w-[80%] font-semibold text-navcolor font-montserrat">
                      {c?.name}
                    </p>
                    <div onClick={() => toggleButton(c.id)}>
                      {c?.visible ? (
                        <img
                          src="/Vector (14).svg"
                          alt=">"
                          className="cursor-pointer"
                        />
                      ) : (
                        <img
                          src="/Vector (15).svg"
                          alt=">"
                          className="cursor-pointer"
                        />
                      )}
                    </div>
                  </div>
                  {c?.visible &&
                    c?.data?.map((item) => (
                      <p className="text-[21px] pl-6   font-medium  font-montserrat">
                        {item?.name}
                      </p>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className=" w-[92%] mm:w-[88%] flex justify-between  mx-auto mb-24 ">
        <div className="hidden md:flex flex-col w-[24%]">
          <div className="hidden md:flex w-[400px]  justify-center py-3 items-center px-12 bg-navcolor">
            <p className="text-[22px] font-semibold font-montserrat text-white">
              Категории
            </p>
          </div>
          <div className="hidden md:flex w-[90%] pl-4 flex-col gap-y-3 mt-4">
            {category?.map((c, i) => (
              <div className="flex flex-col">
                <div
                  key={i}
                  onClick={() => toggleButton(c.id)}
                  className="flex cursor-pointer items-center justify-between"
                >
                  <p className="text-[21px] w-[80%] font-semibold font-montserrat">
                    {c?.name}
                  </p>
                  <div onClick={() => toggleButton(c.id)}>
                    {c?.visible ? (
                      <img
                        src="/Vector (14).svg"
                        alt=">"
                        className="cursor-pointer"
                      />
                    ) : (
                      <img
                        src="/Vector (15).svg"
                        alt=">"
                        className="cursor-pointer"
                      />
                    )}
                  </div>
                </div>
                {c?.visible &&
                  c?.data?.map((item) => (
                    <p className="text-[21px] pl-6   font-medium  font-montserrat">
                      {item?.name}
                    </p>
                  ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full px-[2%] md:w-[70%]">
          <div className="flex md:flex-row flex-col gap-y-2 mb-4 justify-between md:items-center">
            <p className="text-[18px] md:text-[22px] text-navcolor font-medium font-montserrat">
              Показ всех 4 элементов
            </p>
            <select className="outline-none w-[280px] py-3 px-4 bg-transparent border rounded text-[18px] md:text-[22px] text-navcolor font-medium font-montserrat">
              <option>Исходная сортировка</option>
              <option>По популярности</option>
              <option>По возрастанию цены</option>
              <option>По убыванию цены</option>
            </select>
          </div>
          <div
            className={`${
              products?.length > 0
                ? "grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4"
                : "flex"
            } `}
          >
            {products?.length > 0 ? (
              products?.map((c, i) => (
                <div className="flex flex-col shadow-md rounded-lg" key={i}>
                  <div>
                    <Swiper
                      pagination={true}
                      modules={[Pagination]}
                      className="mySwiper"
                    >
                      {c?.product?.map((item, index) => (
                        <SwiperSlide key={index}>
                          <div className="h-[212px] md:h-[300px]">
                            <img
                              src={`${url}${item?.img}`}
                              className="h-full w-full rounded-lg"
                              alt=""
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <p className="my-4 font-semibold text-[18px] md:text-[22px] flex justify-center line-clamp-1">
                      {c?.name}
                    </p>
                    <p className="flex justify-center font-medium text-[16px] md:text-[18px] line-clamp-1 text-mainColor">
                      {parseInt(c?.price) > 0 ? c?.price + " " : "Договорная"}₽
                    </p>
                    <div
                      onClick={() => sendCatalog(c.id)}
                      className="my-4 flex justify-center"
                    >
                      <MyButton title={"Подробнее"} class1={"px-12 mm:px-20"} />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex w-full justify-center items-center h-[100px] my-12 border border-mainColor rounded-lg">
                <p className="text-[20px] md:text-[22px] lg:text-[28px] text-navcolor">
                  Нет продукта
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[92%] mm:w-[88%] mx-auto">
        <div className="flex gap-3 mb-6 items-center">
          <div className="w-[8px] h-[43px] bg-mainColor " />
          <p className="text-[#313131] text-[24px] sm:text-[32px] lg:text-[40px] font-semibold">
            Другие товары
          </p>
        </div>

        <div
          className={`${
            products?.length > 0
              ? "grid grid-cols-1 md:grid-cols-2 mb-28 xl:grid-cols-3 my-8 gap-x-4 gap-y-4"
              : "flex"
          } `}
        >
          {products2?.map((c, i) => (
            <div className="flex flex-col shadow-md rounded-lg" key={i}>
              <div>
                <Swiper
                  pagination={true}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {c?.product?.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="h-[212px] md:h-[300px]">
                        <img
                          src={`${url}${item?.img}`}
                          className="h-full w-full rounded-lg"
                          alt=""
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <p className="my-4 font-semibold text-[18px] md:text-[22px] flex justify-center line-clamp-1">
                  {c?.name}
                </p>
                <p className="flex justify-center font-medium text-[16px] md:text-[18px] line-clamp-1 text-mainColor">
                  {parseInt(c?.price) > 0 ? c?.price + " " : "Договорная"}₽
                </p>
                <div className="my-4 flex justify-center">
                  <MyButton title={"Подробнее"} class1={"px-12 mm:px-20"} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </UserLayout>
  );
};

export default Catalog;
