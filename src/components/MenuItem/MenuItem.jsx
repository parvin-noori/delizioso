import React from "react";

export default function MenuItem({food}) {
  return (
    <div
      className="foodCard bg-gray-50 p-4 md:p-8 rounded-[40px] md:rounded-[80px] text-center sm:space-y-6 space-y-3"
    
    >
      <img
        src={food.img}
        alt={food.title}
        className="m-auto size-84 aspect-square"
      />
      <span className="lg:text-4xl md:text-3xl text-xl font-semibold text-nowrap">
        {food.title}
      </span>
      <p className="leading-8 line-clamp-2 lg:line-clamp-3">{food.desc}</p>
      <div className="flex items-center justify-around ">
        <span className="text-2xl font-semibold text-primaryOrange md:text-black">
          ${food.price}
        </span>
        <button className="text-white bg-primaryOrange rounded-full sm:py-4 sm:px-10 size-10 sm:size-auto flex items-center justify-center">
          <span className="hidden sm:block">order now</span>
          <span className="block sm:hidden">+</span>
        </button>
      </div>
    </div>
  );
}
