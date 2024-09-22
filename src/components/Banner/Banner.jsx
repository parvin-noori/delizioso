import italianSalad from "../../assets/imgs/italian-salad.png";

export default function Banner() {
  return (
    <section className=" lg:py-20 py-5 bg-green-50 overflow-hidden">
      <div className="container grid lg:grid-cols-2 items-center lg:gap-20 space-y-36 lg:space-y-0 justify-center">
        {/* img secion  */}
        <div className="relative  max-w-[350px] sm:max-w-[500px] m-auto lg:max-w-full order-last lg:order-first mt-16 lg:mt-0">
          <img
            src={italianSalad}
            alt=""
            className="relative z-10  aspect-square"
          />
        </div>
        {/* text section  */}
        <div className="space-y-16 capitalize text-xl order-first lg:order-last">
          <h2 className="text-[80px] font-semibold text-balance leading-[90px]">
            Welcome to <span className="text-primaryOrange">delizioso</span>
          </h2>
          <p className=" text-brown/70 leading-10 lg:text-xl tracking-wider">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            ultricies at eleifend proin. Congue nibh nulla malesuada ultricies
            nec quam
          </p>

          <button className="btn-primary mt-12  bg-primaryOrange md:py-5 md:px-20 font-normal text-nowrap">
            see our menu
          </button>
        </div>
      </div>
    </section>
  );
}
