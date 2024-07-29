import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { slideUp } from "../Banner/Banner";

export default function Chefs() {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    const fetchChefs = async () => {
      const response = await axios.get("http://localhost:3000/chefs");
      const data = response.data;
      setChefs(data);
    };
    fetchChefs();
  }, []);
  return (
    <section className="lg:py-42 py-24">
      <div className="container grid grid-cols-1 md:space-y-24 space-y-10">
        <span className="md:text-[80px] text-5xl text-center font-bold font-tinos capitalize">
          our greatest chef
        </span>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-10">
          {chefs.slice(0,3).map((chef,index) => (
            <motion.div
              variants={slideUp(index * 0.1)}
              initial="hidden"
              whileInView="show"
              key={chef.id}
              className="flex group  flex-col space-y-10 capitalize items-center"
            >
              <img
                src={chef.img}
                alt={chef.name}
                className="size-12/12 rounded-xl overflow-hidden group-hover:scale-105 duration-200"
              />
              <span className="font-semibold text-2xl">{chef.name}</span>
              <span className="text-2xl text-gray-400">{chef.title}</span>
            </motion.div>
          ))}
        </div>
        <button className="btn-primary mt-12  bg-primaryOrange md:py-5 md:px-20 text-xl m-auto text-nowrap hover:scale-110 duration-200">
          view all
        </button>
      </div>
    </section>
  );
}
