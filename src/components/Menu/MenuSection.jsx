import axios from "axios";
// import ItanlianPasta from "../../assets/imgs/italian-pasta.png";
import { useEffect, useState } from "react";
import MenuItem from "../MenuItem/MenuItem";
import { motion } from "framer-motion";
import usePaginatedFetch from "@/usePaginatedFetch";
import PaginationSection from "../Pagination/PaginationSection";

export default function MenuSection({ sectionTitle }) {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const url = "http://localhost:3000/products";
  const [loading, data] = usePaginatedFetch(url, 6);
  const [page, setPage] = useState(1);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFoods(data[page - 1] || []);
  }, [loading, page, data]);

  useEffect(() => {
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
        {loading ? (
          <span>Loading...</span>
        ) : (
          <>
            <div className="menu grid lg:grid-cols-3 grid-cols-2 sm:gap-10 gap-5">
              {filterFoods.map((food, index) => (
                <MenuItem key={food.id} food={food} index={index} />
              ))}
            </div>
            <div className="flex m-auto py-10">
              <PaginationSection
                activePage={page}
                setPage={setPage}
                pages={data.length}
              />
            </div>
          </>
        )}
        {/* {Object.keys(Object.groupBy(foods, ({ category }) => category)).map(
            (cat) => (
              <span key={cat}>{cat}</span>
            )
          )} */}
      </div>
    </section>
  );
}
