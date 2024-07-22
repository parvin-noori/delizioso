import React from "react";
import ItanlianPasta from "../../assets/imgs/italian-pasta.png";
import Lettuce from "../../assets/imgs/Lettuce.png";
// import Lettuce2 from "../../assets/imgs/Lettuce2.png";

export default function Hero() {
  return (
    <div className="container lg:py-20 py-5 ">
      <div className="grid lg:grid-cols-2 items-center lg:gap-20 space-y-32 lg:space-y-0 justify-center">
        {/* text section  */}
        <div className="space-y-5 capitalize  text-xl ">
          <span className=" bg-orange-100 text-primaryOrange  py-2 px-8 rounded-full">
            resturant
          </span>
          <h2 className="text-[80px] font-semibold text-balance leading-[90px]">
            italian <br /> cuisine
          </h2>
          <p className=" text-brown/70 leading-10 lg:text-xl tracking-wider">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
            senectus dictum arcu sit tristique donec eget.
          </p>
          <div className="flex items-center gap-5">
            <button className="btn-primary mt-11 bg-primaryOrange md:py-5 md:px-20 font-normal text-nowrap">
              order now
            </button>
            <button className="btn-primary mt-11 md:py-5 md:px-20 font-normal">
              reservation
            </button>
          </div>
        </div>
        {/* img secion  */}
        <div className="relative  max-w-[350px] sm:max-w-[500px] m-auto lg:max-w-full">
          <img
            src={ItanlianPasta}
            alt=""
            className="relative z-10  aspect-square"
          />
          <img
            src={Lettuce}
            alt=""
            className="absolute -top-14 rotate-[200deg] -left-9 sm:-left-16 sm:-top-18 xxl:-left-20 xl:-left-16 xxl:-top-18 xl:-top-14  z-0 size-52 sm:size-64 lg:size-max"
          />
          <img
            src={Lettuce}
            alt=""
            className="absolute bottom-4 -right-4 sm:-right-11 sm:bottom-10 lg:-right-4 z-0  size-52 sm:size-64 lg:size-max"
          />
        </div>
      </div>
    </div>
  );
}
