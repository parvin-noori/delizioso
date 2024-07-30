import serviceHourseBg from "../../assets/imgs/serviceHourse.png";
export default function ServiceHours() {
  return (
    <section className="lg:py-42 py-24">
      <div className="container grid grid-cols-1 md:space-y-24 space-y-10">
        <div className="flex flex-col items-center space-y-10 capitalize shadow-shadowInset bg-serviceHourseBg rounded-[7rem] py-20 text-white overflow-hidden">
          <span className="lg:text-6xl font-tinos font-semibold text-center text-4xl">
            we are open from
          </span>
          <div className="flex flex-col max-w-sm leading-10  text-xl ">
            <span className="lg:text-4xl text-2xl font-semibold mb-5">
              monday - sunday
            </span>
            <span>launch : mon-sun : 11:00am-02:00pm</span>
            <span>dinner : sunday : 04:00am-08:00pm 04:00am-09:00pm</span>
          </div>
          <div className="flex items-center lg:flex-row flex-col gap-5">
            <button className="btn-primary lg:mt-12 hover:scale-105 duration-200 bg-primaryOrange py-5 px-20 font-normal text-nowrap">
              order now
            </button>
            <button className="btn-primary lg:mt-12 hover:scale-105 duration-200 bg-white text-black py-5 px-20 font-normal text-nowrap">
              reservation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
