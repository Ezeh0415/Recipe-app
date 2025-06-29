import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import image1 from './images/1 (1).jpg';
import chef_img from './images/chef.jpg';
import { useRecipes } from "../providerContext/ProviderContext";
import Loading from "./Loading";
import Error from "./Error";

const Body = () => {
  const {recipes, loading, error, bgImage} = useRecipes();

  return (
    <div className="body-section">
      <Loading loading = {loading} />
      <Error error = {error} />
          {/* First Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center max-w-5xl mx-auto px-4 py-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold text-green-800">
                Let's Start Cooking with Popular Recipes
              </h1>
              <div className="text-sm text-green-700 space-y-1">
                <p>Want to learn how to cook but confused how to start?</p>
                <p>No need to worry again.</p>
              </div>
              <Link
                to="/Recipe"
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-5 rounded-lg transition"
              >
                Get Started
              </Link>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                src={image1}
                alt="cooking illustration"
                loading="lazy"
                decoding="async"
                className="rounded-lg w-3/4 md:w-full shadow-md"
              />
            </div>
          </div>

          {/* Popular Cakes Section */}
          <div className="mt-2">
            <div className="bg-green-50 py-16 px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-extrabold text-green-700 mb-4 capitalize">
                  Popular dishes
                </h1>
                <div className="text-lg text-green-900 space-y-2">
                  <p>We provide a variety of food and beverage recipes</p>
                  <p>with high taste from famous chefs</p>
                </div>
              </div>
            </div>

            <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {recipes &&
                recipes.slice(0,6).map((item, id) => (
                  <div key={id}>
                    <div className=" mx-2 my-1 mx-auto bg-green-50 border border-green-100 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                      <img
                        src={item.image_url}
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-5 space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-green-400 text-white rounded-full flex items-center justify-center font-bold shadow-md">
                            {item.title[0]}
                          </div>
                          <div>
                            <h2 className="text-lg font-semibold text-green-800">
                              {item.title}
                            </h2>
                            <p className="text-sm text-green-500">ID: {item.id}</p>
                          </div>
                        </div>
                        <p className="text-green-700 text-sm leading-relaxed">
                          Enjoy the sweetness of our most loved cakes, handcrafted with love by top chefs.
                        </p>
                        <div className="flex justify-between items-center">
                          
                          <button className="text-green-600 hover:text-green-800 text-lg">
                            <FaHeart />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Chef Section */}
          <div className="bg-green-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="rounded-xl overflow-hidden shadow-md">
                <img
                  src={chef_img}
                  alt="Chef"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="space-y-6">
                <p className="italic text-green-600 text-lg">Variety of Food</p>
                <h1 className="text-3xl md:text-4xl font-bold text-green-800">
                  Variety of Food and Beverage Recipes
                </h1>
                <blockquote className="text-green-700 text-base leading-relaxed border-l-4 border-green-300 pl-4">
                  We have prepared a variety of food and beverage recipes from our famous chefs, with cooking steps and great taste.
                </blockquote>
                <Link to="/Recipe">
                  <button className="mt-4 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg shadow-md transition">
                    View Menu
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Subscription Section */}
          <div
            className="relative bg-cover bg-center py-16 px-6 sm:px-12 text-center text-white rounded-xl"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <div className="absolute inset-0 bg-green-900 bg-opacity-60 rounded-xl"></div>
            <div className="relative max-w-3xl mx-auto space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tight">
                Subscribe to get weekly
              </h1>
              <h1 className="text-4xl font-extrabold tracking-tight">
                Recipe updates
              </h1>
              <button className="mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition">
                Subscribe
              </button>
            </div>
          </div>
    </div>
  );
};

export default Body;
