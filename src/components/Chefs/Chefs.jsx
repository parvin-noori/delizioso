import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Chefs() {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    const fetchChefs = async () => {
      const response = await axios.get("https://delizioso-api.vercel.app/chefs");
      const data = response.data;
      setChefs(data);
    };
    fetchChefs();
  }, []);
  return (
    <section className="lg:py-42 py-10">
      <div className="container grid grid-cols-1 md:space-y-24 space-y-10">
        <span className="md:text-[80px] text-4xl text-center font-bold font-tinos capitalize">
          our greatest chef
        </span>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-10">
          {chefs.slice(0, 3).map((chef, index) => (
            <div
              key={chef.id}
              className="flex group  flex-col lg:space-y-10 space-y-5 capitalize items-center"
            >
              <img
                src={chef.img}
                alt={chef.name}
                className="size-12/12 rounded-xl overflow-hidden group-hover:scale-105 duration-200"
              />
              <span className="font-semibold lg:text-2xl text-base">{chef.name}</span>
              <span className="lg:text-2xl text-base text-gray-400">{chef.title}</span>
            </div>
          ))}
        </div>
        <button className="btn-primary mt-12  bg-primaryOrange md:py-5 md:px-20 lg:text-xl m-auto text-nowrap hover:scale-110 duration-200">
          view all
        </button>
      </div>
    </section>
  );
}
