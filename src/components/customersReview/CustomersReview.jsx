import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, Thumbs } from "swiper/modules";
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

  // const getImagaClasses = (index) => {
  //   const sizes = ["44", "40", "40", "32", "32", "20", "20"];
  //   const positions = [
  //     "bottom-0 translate-x-1/2 right-1/2 transform rounded-full",
  //     "bottom-14 right-64",
  //     "bottom-14 left-64",
  //     "bottom-44 right-32",
  //     "bottom-44 left-32",
  //     "bottom-80 right-20",
  //     "bottom-80 left-20",
  //   ];

  //   const size = sizes[index];
  //   const position = positions[index];

  //   return `size-${size} absolute ${position}`;
  // };

  return (
    <section className="lg:py-42 py-24 bg-gray-100">
      <div className="container grid grid-cols-1 md:space-y-24 space-y-10">
        <span className="md:text-[80px] text-5xl text-center font-bold font-tinos capitalize">
          our customers say
        </span>
        {/* <div className="relative w-full aspect-square p-5 rounded-full flex flex-col space-y-10 items-center">
          <div className="flex flex-col space-y-5 items-center capitalize">
            <img
              src={Customer1}
              alt="Financial advisor"
              className="size-64 mb-7"
            />
            <span className="text-4xl font-semibold">starla virgoun</span>
            <span className="text-2xl text-black/70">Financial advisor</span>
          </div>
          <div className="max-w-xl">
            <span className="font-tinos text-8xl text-left">“</span>
            <p className="text-center text-2xl leading-10 text-brown">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ultricies at eleifend proin. Congue nibh nulla malesuada ultricies
              nec quam
            </p>
            <span className="font-tinos text-8xl text-right transform rotate-180 float-end">
              “
            </span>
          </div>
          <div className="flex gap-20">
            <img
              src={Customer6}
              alt=""
              className="lg:size-20  absolute bottom-80 left-20"
            />
            <img
              src={Customer4}
              alt=""
              className="lg:size-32 absolute bottom-44 left-32"
            />
            <img
              src={Customer2}
              alt=""
              className="lg:size-40 size-28 absolute bottom-14 left-64"
            />
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              src={Customer1}
              alt=""
              className="aspect-square size-2/12 absolute bottom-0 translate-x-1/2 right-1/2 transform rounded-full"
            />
            <img
              src={Customer3}
              alt=""
              className="lg:size-40 size-28 absolute bottom-0 -translate-y-16 right-64"
            />
            <img
              src={Customer5}
              alt=""
              className="lg:size-32 absolute bottom-44 right-32"
            />
            <img
              src={Customer7}
              alt=""
              className="lg:size-20 absolute bottom-80 right-20"
            />
          </div>
        </div> */}

        {/* swiper  */}
        <div className="relative w-full aspect-square p-5 rounded-full flex flex-col space-y-10 items-center  overflow-hidden">
          <Swiper
            spaceBetween={10}
            centeredSlides={true}
            slidesPerView={1}
            thumbs={thumbSwiper ? { swiper: thumbSwiper } : undefined}
            modules={[Thumbs]}
            className="mySwiper2 w-full"
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
            spaceBetween={5}
            slidesPerView={7}
            centeredSlides={true}
            watchSlidesProgress={true}
            modules={[Thumbs]}
            className="mySwiper w-full"
          >
            {customers.map((item, index) => {
              const bottomValue = index * 0.1;
              return (
                <SwiperSlide
                  className={`flex justify-center cursor-pointer`}
                  key={item.id}
                >
                  <img src={item.image} alt={item.name} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
