import React, { useState } from "react";
import MyBlackButton from "./MyBlackButton";
import axios from "axios";
import { url } from "../../../service/url";

const CONSULTATION = () => {
  const [postData, setPostData] = useState({ full_name: "", phone: "" });
  const [alert, setAlert] = useState(false)
  const InputChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${url}/b_sayt/api/forma_sayts_views/`,
        postData
      );
      setAlert(true)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="w-[98%] mx-auto min-h-[602px] gap-y-12 py-12 flex md:flex-row flex-col bg-navcolor rounded-[20px] mt-[80px] px-[30px] md:px-[50px] lg:px-[80px] pt-[15px] md:pt-[30px] lg:pt-[60px]"
    >
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
              name="full_name"
              value={postData.full_name}
              onChange={InputChange}
              required
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
              name="phone"
              value={postData.phone}
              onChange={InputChange}
              required
            />
          </div>
        </div>

        {alert && (
                <div
                id="alert-3"
                class="flex items-center p-4 fixed top-[20px] z-50 right-[20px] mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                role="alert"
              >
                <svg
                  class="flex-shrink-0 w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span class="sr-only">Info</span>
                <div class="ml-3 text-sm font-medium">
                  Ваша заявка отправлена
                </div>
                <button
                onClick={() => setAlert(false)}
                  type="button"
                  class="ml-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"
                  data-dismiss-target="#alert-3"
                  aria-label="Close"
                >
                  <span class="sr-only">Close</span>
                  <svg
                    class="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>
              </div>
              )}


        <div className="mt-12 md:mt-16 mb-3">
          <MyBlackButton submit={true} title={"Оставить заявку"} class1={"px-24"} />
        </div>
        <p className="p-0 m-0 text-center md:text-start font-normal font-montserrat text-[14px] mt-3 text-white md:text-[17px]">
          Заполняя эту форму, вы даете согласие <br /> наобработку ваших
          персональных данных
        </p>
      </div>
      <div className="w-full md:w-[50%]">
        <img src="/Mask group.png" alt="" className="w-full h-full" />
      </div>
    </form>
  );
};

export default CONSULTATION;
