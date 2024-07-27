import axios from "axios";
// import ItanlianPasta from "../../assets/imgs/italian-pasta.png";
import { useEffect, useState } from "react";
import MenuItem from "../MenuItem/MenuItem";
import { motion } from "framer-motion";


export default function MenuSection({ sectionTitle }) {
  const [foods, setFoods] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    let fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        setFoods(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchCategories = async () => {
      try {
        const categoryResponse = await axios.get(
          "http://localhost:3000/categories"
        );
        setCategories(categoryResponse.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
    fetchCategories();
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const filterFoods =
    activeCategory === "all"
      ? foods
      : foods.filter((food) => food.category === activeCategory);

  return (
    <section className="lg:py-48 py-24">
      <div className="container grid grid-cols-1 md:space-y-24 space-y-10">
        <span className="md:text-[80px] text-5xl text-center font-bold font-tinos  capitalize">
          {sectionTitle}
        </span>
        <ul className="category-menu flex items-center justify-between flex-nowrap overflow-x-auto gap-3">
          <li>
            <a
              className={`${
                activeCategory === "all" ? "bg-brown text-white" : "bg-gray-100"
              } md:py-6 text-lg md:px-16 px-6 py-3 rounded-full capitalize text-nowrap block cursor-pointer`}
              onClick={() => handleCategoryClick("all")}
            >
              all category
            </a>
          </li>
          {categories.map((category) => (
            <li key={category.id}>
              <a
                className={`${
                  activeCategory === category.categoryName
                    ? "bg-brown text-white"
                    : "bg-gray-100"
                } md:py-6 text-lg md:px-16 px-6 py-3 rounded-full capitalize text-nowrap block cursor-pointer`}
                onClick={() => handleCategoryClick(category.categoryName)}
              >
                {category.categoryName}
              </a>
            </li>
          ))}
        </ul>
        <div className="menu grid lg:grid-cols-3 grid-cols-2 sm:gap-10 gap-5">
          {filterFoods.map((food,index) => (
            <MenuItem key={food.id} food={food} index={index}/>
          ))}
        </div>
        {/* {Object.keys(Object.groupBy(foods, ({ category }) => category)).map(
            (cat) => (
              <span key={cat}>{cat}</span>
            )
          )} */}
      </div>
    </section>
  );
}
