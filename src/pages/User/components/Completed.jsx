import React, { useState } from "react";
import { completed } from "../../../data";

const Completed = () => {
  const [arr, setArr] = useState(completed);
  const toggleButton = (id) => {
    console.log(id);
    setArr((prevCards) =>
      prevCards.map((card) =>
        card?.id === id
          ? { ...card, visible: true }
          : { ...card, visible: false }
      )
    );
    console.log(arr);
  };
  return (
    <div className="lg:mt-[200px] mt-[50px] sm:mt-[100px] gap-y-4 flex flex-col w-[92%] mm:w-[88%] mx-auto ">
      <div className="flex gap-3 mb-6 items-center">
        <div className="w-[8px] h-[43px] bg-mainColor" />
        <p className="text-[#313131] text-[24px] md:text-[32px] lg:text-[40px] font-semibold">
          ВЫПОЛНЕННЫЕ РАБОТЫ
        </p>
      </div>

      <div className="flex flex-row flex-wrap gap-x-4 gap-y-4">
        {arr?.map((c, index) =>
          c.visible ? (
            <div
              onClick={() => toggleButton(c?.id)}
              key={index}
              className="rounded h-[48px] cursor-pointer text-white hover:text-navcolor hover:border-white flex items-center justify-center my-shadow-red border-mainColor border px-6 md:px-12"
            >
              <p className="font-medium text-[18px]">{c?.title}</p>
            </div>
          ) : (
            <div
              onClick={() => toggleButton(c?.id)}
              key={index}
              className="rounded h-[48px] cursor-pointer flex items-center text-navcolor hover:text-white transition-all duration-150 ease-in-out justify-center my-shadow hover:border-mainColor  border px-6 md:px-12"
            >
              <p className="font-medium text-[18px] ">{c?.title}</p>
            </div>
          )
        )}
      </div>

      <div className="mt-6 grid gap-x-4 gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col">
          <div className=" h-[250px] md:h-[355px]">
            <img src="/Rectangle 94.png" alt="Rectangle 94.png" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className=" h-[250px] md:h-[355px]">
            <img src="/Rectangle 94 (1).png" alt="Rectangle 94.png" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className=" h-[250px] md:h-[355px]">
            <img src="/Rectangle 94 (2).png" alt="Rectangle 94.png" />
          </div>
        </div>
      </div>
      <div className=" grid gap-x-4 gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col">
          <div className=" h-[250px] md:h-[355px]">
            <img src="/Rectangle 94 (5).png" alt="Rectangle 94.png" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className=" h-[250px] md:h-[355px]">
            <img src="/Rectangle 94 (3).png" alt="Rectangle 94.png" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className=" h-[250px] md:h-[355px]">
            <img src="/Rectangle 94 (4).png" alt="Rectangle 94.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Completed;
