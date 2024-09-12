import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, Thumbs } from "swiper/modules";
import "./customersReview.css";
// import { motion } from "framer-motion";

export default function CustomersReview() {
  const [customers, setCustomers] = useState([]);
  const [thumbSwiper, setThumbsSwiper] = useState(null);
  useEffect(() => {
    const fetchCustomers = async () => {
      const response = await axios.get("http://localhost:3000/customers");
      const data = response.data;
      setCustomers(data);
    };
    fetchCustomers();
  }, [customers]);

  const sizes = ["55%", "70%", "85%", "100%", "85%", "70%", "55%"];

  return (
    <section className="lg:py-42 py-24 bg-gray-100 customers-slider">
      <div className="container grid grid-cols-1 md:space-y-24 space-y-10">
        <span className="md:text-[80px] text-5xl text-center font-bold font-tinos capitalize">
          our customers say
        </span>

        {/* swiper  */}
        <div className="relative w-full aspect-square p-5 flex flex-col space-y-10 items-center overflow-hidden">
          <Swiper
            spaceBetween={10}
            centeredSlides={true}
            slidesPerView={1}
            thumbs={thumbSwiper ? { swiper: thumbSwiper } : undefined}
            modules={[Thumbs]}
            className="mySwiper2 w-full flex-grow"
          >
            {customers.map((item) => (
              <SwiperSlide className="flex justify-center" key={item.id}>
                <div className="flex flex-col space-y-5 items-center capitalize">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="size-64 mb-7"
                  />
                  <span className="text-4xl font-semibold">{item.name}</span>
                  <span className="text-2xl text-black/70">{item.title}</span>

                  <div className="max-w-xl">
                    <span className="font-tinos text-8xl text-left">“</span>
                    <p className="text-center text-2xl leading-10 text-brown">
                      {item.comment}
                    </p>
                    <span className="font-tinos text-8xl text-right transform rotate-180 float-end">
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
            watchSlidesProgress={true}
            modules={[Thumbs]}
            className="mySwiper w-full py-32"
          >
            {customers.map((item, index) => {
              return (
                <SwiperSlide
                  key={item.id}
                  className={` flex items-center justify-center`}
                  style={{
                    transform: `translateY(-${Math.abs(100 - index * 32)}%)`, // فاصله عمودی برای نیم‌دایره
                  }}
                >
                  <div class="w-full thumbnail-slide relative flex items-center justify-center">
                    <img
                      src={item.image}
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
