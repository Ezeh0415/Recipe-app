import { FaHeart } from "react-icons/fa";
import { PiWarningFill } from "react-icons/pi";
import { useState, useEffect } from "react";
import Mainsearch from "./MainSearch";

const Nigeria = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setIsLoading] = useState(true);
  const [record, setRecord] = useState([]);
  const [querry, setQuerry] = useState("rice");

  const apiKey = "830f2955-ec4d-4f19-ba49-d83eaecfdb92";

  useEffect(() => {
    const apiUrl = `https://forkify-api.herokuapp.com/api/v2/recipes?search=${querry}&key=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.data.recipes);
        setRecord(data.data.recipes);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [querry]);

  const [CurrentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 15;
  const lastIndex = CurrentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = record.slice(firstIndex, lastIndex);
  const npage = Math.ceil(record.length / recordsPerPage);
  const number = [...Array(npage + 1).keys()].slice(1);

  // const Filter = (e) => {
  //   setRecord(
  //     recipes.filter((f) =>
  //       f.title.toLowerCase().includes(e.target.value.toLowerCase())
  //     )
  //   );
  // };

  const fullSearch = (e) => {
    setQuerry(e.target.value.toLowerCase());
  };

  return (
    <div className="ninja">
      {loading ? (
          <svg
          className="w-[30%] ml-[40%]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 150"
        >
          <path
            fill="none"
            stroke="#16FF21"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray="300 385"
            strokeDashoffset="0"
            d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"
          >
            <animate
              attributeName="stroke-dashoffset"
              calcMode="spline"
              dur="2"
              values="685;-685"
              keySplines="0 0 1 1"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      ) : error ? (
        <div className="warning">
          <div className="icon">
            <PiWarningFill />
          </div>
          <h1>could not fetch resource or poor internet connection</h1>
        </div>
      ) : (
        <>
          <Mainsearch fullSearch={fullSearch} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {record &&
              records.map((item, index) => (
                <div key={index}>
                  <div className="mx-2 bg-white rounded-xl shadow-md overflow-hidden border border-green-100 hover:shadow-lg transition">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-lg">
                          {item.title[0]}
                        </div>
                        <span className="text-lg font-semibold text-green-700">
                          {item.title}
                        </span>
                      </div>
                      <button className="text-red-500 hover:text-red-600">
                        <FaHeart />
                      </button>
                    </div>

                    {/* Image */}
                    <img
                      src={item.image_url}
                      alt="foods"
                      className="w-full h-48 object-cover border-t border-b"
                    />

                    {/* Footer */}
                    <div className="p-4">
                      <p className="text-sm text-gray-600">
                        Created by{" "}
                        <span className="font-semibold text-green-600">
                          {item.publisher}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Pagination */}
          <nav className="my-6">
            <ul className="flex items-center justify-center gap-2">
              <li>
                <button
                  onClick={prevPage}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                >
                  Prev
                </button>
              </li>

              {number.map((n, i) => (
                <li key={i}>
                  <button
                    onClick={() => changeCpage(n)}
                    className={`px-3 py-1 rounded border ${
                      CurrentPage === n
                        ? "bg-green-600 text-white"
                        : "bg-white text-green-600 border-green-400 hover:bg-green-100"
                    } transition`}
                  >
                    {n}
                  </button>
                </li>
              ))}

              <li>
                <button
                  onClick={nextPage}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </>
      )}
    </div>
  );

  function prevPage() {
    if (CurrentPage !== 1) {
      setCurrentPage(CurrentPage - 1);
    }
  }

  function changeCpage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (CurrentPage !== npage) {
      setCurrentPage(CurrentPage + 1);
    }
  }
};

export default Nigeria;
