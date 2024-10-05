import ReserveImg from "../../assets/imgs/reserve.png";
import CircleImg from "../cirecle-img/CircleImg";

export default function Reservation() {
  return (
    <section className=" md:py-64 py-5 bg-orange-50 overflow-x-hidden">
      <div className=" grid md:grid-cols-2 items-center xl:gap-72 md:gap-44 space-y-10  md:space-y-0 justify-center">
        {/* img secion  */}

        <div className="relative m-auto order-last  md:order-first mt-16 md:mt-0">
          <div className="xl:size-[880px] md:size-[680px] md:size-[500px] sm:size-[400px] size-[300px] rounded-full bg-transparent border border-black/20 aspect-square relative md:-translate-x-[100px] ">
            <CircleImg
              src={ReserveImg}
              containerClasses="size-9/12 !transform translate-x-1/2 -translate-y-1/2 top-1/2 right-1/2"
            />
            <CircleImg
              src={ReserveImg}
              containerClasses="size-2/12 top-0 md:right-32 right-16"
            />
            <CircleImg
              src={ReserveImg}
              containerClasses="size-2/12 bottom-0 md:left-32 left-16"
            />
          </div>
        </div>
        {/* text section  */}
        <div className="md:space-y-16 capitalize text-xl order-first md:order-last  md:max-w-lg md:max-w-3xl sm:max-w-xl max-w-sm">
          <h2 className="md:text-[80px] ld:text-6xl text-4xl font-semibold text-balance font-tinos leading-[90px]">
            let's reserve <span className="text-primaryOrange">a table</span>
          </h2>
          <p className=" text-brown/70 leading-10 md:text-xl tracking-wider">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            ultricies at eleifend proin. Congue nibh nulla malesuada ultricies
            nec quam
          </p>

          <button className="btn-primary mt-12  bg-primaryOrange md:py-5 md:px-20 font-normal text-nowrap">
            reservation
          </button>
        </div>
      </div>
    </section>
  );
}
