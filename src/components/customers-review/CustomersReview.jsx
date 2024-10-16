import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./customersReview.css";
import { supabase } from "@/config";

export default function CustomersReview() {
  const [customers, setCustomers] = useState([]);
  const [thumbSwiper, setThumbsSwiper] = useState(null);
  useEffect(() => {
    const fetchCustomers = async () => {
      let { data: customersData, error } = await supabase
        .from("customers")
        .select("*");

      // const response = await axios.get("https://delizioso-api.vercel.app/customers");
      // const data = response.data;
      console.log(customersData)
      setCustomers(customersData);
    };
    fetchCustomers();
  }, [customers]);

  const [sizes, setSizes] = useState([
    "60%",
    "70%",
    "80%",
    "85%",
    "80%",
    "70%",
    "60%",
  ]);

  const [translateAmount, setTranslateAmount] = useState(32); // Base translate amount
  useEffect(() => {
    const handleSizes = () => {
      if (window.innerWidth < 992) {
        setSizes(["90%", "95%", "100%", "95%", "90%"]);
        setTranslateAmount(50);
      } else if (window.innerWidth > 992) {
        // For large screens (greater than 992px), reset to default
        setSizes(["60%", "70%", "80%", "85%", "80%", "70%", "60%"]);
        setTranslateAmount(32);
      }
      // setSizes(["60%", "70%", "80%", "85%", "80%", "70%", "60%"]);
      // setTranslateAmount(3);
    };
    handleSizes();

    window.addEventListener("resize", handleSizes);
    return () => window.addEventListener("resize", handleSizes);
  }, []);

  return (
    <section className="md:py-42 py-10 bg-gray-100 customers-slider">
      <div className="container grid grid-cols-1 md:space-y-24 space-y-10">
        <span className="md:text-[80px] text-4xl text-center font-bold font-tinos capitalize">
          our customers say
        </span>

        {/* swiper  */}
        <div className="relative w-full md:aspect-square md:p-5 flex flex-col space-y-10 items-center overflow-hidden">
          <Swiper
            spaceBetween={10}
            centeredSlides={true}
            slidesPerView={1}
            loop={true}
            thumbs={thumbSwiper ? { swiper: thumbSwiper } : undefined}
            modules={[Thumbs]}
            className="mySwiper2 w-full flex-grow md:pb-48"
          >
            {customers.map((item) => (
              <SwiperSlide className="flex justify-center" key={item.id}>
                <div className="flex flex-col space-y-5 items-center capitalize">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="md:size-64 size-32 md:mb-7"
                  />
                  <span className="md:text-4xl text-2xl font-semibold">
                    {item.name}
                  </span>
                  <span className="md:text-2xl text-xl text-black/70">
                    {item.title}
                  </span>

                  <div className="max-w-xl">
                    <span className="font-tinos md:text-8xl text-5xl text-left">
                      “
                    </span>
                    <p className="text-center md:text-2xl text-base  leading-10 text-brown">
                      {item.comment}
                    </p>
                    <span className="font-tinos md:text-8xl text-5xl text-right transform rotate-180 float-end">
                      “
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Swiper برای تصاویر کوچک (thumbs) */}
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={7}
            breakpoints={{
              0: {
                slidesPerView: 5,
              },
              992: {
                slidesPerView: 7,
              },
            }}
            watchSlidesProgress={true}
            modules={[Thumbs]}
            className="mySwiper w-full md:!pt-36 !pt-20 !pb-10  md:!px-6 !px-2"
          >
            {customers.map((item, index) => {
              return (
                <SwiperSlide
                  key={item.id}
                  className={` flex items-center justify-center`}
                  style={{
                    transform: `translateY(-${Math.abs(
                      100 - index * translateAmount
                    )}%)`, // فاصله عمودی برای نیم‌دایره
                  }}
                >
                  <div className="w-full thumbnail-slide relative flex items-center justify-center aspect-square">
                    <img
                      src={item.img}
                      alt={item.name}
                      className={` object-cover rounded-full `}
                      style={{ width: sizes[index] }}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
