import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiEllipsisVertical, HiMiniBars3BottomRight } from "react-icons/hi2";
import { GifState } from "../Context/gif-context";
import Categories from "../Pages/Categories";
import GifSearch from "./GifSearch";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);

  const { gf, favourites } = GifState();

  const fetchGifCategories = async () => {
    const { data } = await gf.categories();
    setCategories(data);
    console.log(data);
  };

  useEffect(() => {
    fetchGifCategories();
  }, []);
  return (
    <nav>
      <div className="relative flex gap-4 justify-between items-center mb-2">
        <Link to="/">
          <h1 className="text-4xl font-bold font-mono tracking-tight cursor-pointer">
            Find Giffy
          </h1>
        </Link>

        <div className="font-bold text-md flex gap-2 items-center">
          {categories?.slice(0, 5)?.map((category) => {
            console.log(Categories);

            return (
              <Link
                key={category.name}
                to={`/${category.name_encoded}`}
                className="px-4 py-1 hover:gradient border-b-2 hidden lg:block"
              >
                {category.name}
              </Link>
            );
          })}

          <button
            onClick={() => {
              setShowCategories(!showCategories);
            }}
          >
            <HiEllipsisVertical
              size={34}
              className={`py-0.5 hover:gradient
             ${showCategories ? "gradient" : ""} 
             border-b-2 hidden lg:block`}
            />
          </button>

          {favourites.length > 0 && (
            <div className="h-9 bg-purple-700 pt-1.5 px-6 cursor-pointer rounded">
              <Link to={favourites}>Favourite GIFs</Link>
            </div>
          )}
          <button>
            <HiMiniBars3BottomRight
              size={30}
              className="text-sky-400 block lg:hidden"
            />
          </button>
        </div>

        {showCategories && (
          <div className="absolute right-0 top-14 px-10 py-6 pb-9 w-full gradient z-20 ">
            <span className="text-3xl font-extrabold">Catagories</span>
            <hr className="bg-gray-100 opacity-50 my-5" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {categories?.map((category) => {
                return (
                  <Link
                    className="font-bold"
                    key={category.name}
                    to={`/${category.name_encoded}`}
                  >
                    {category.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
        <GifSearch/>
    </nav>
  );
};

export default Header;
