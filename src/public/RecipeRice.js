import { FaHeart } from "react-icons/fa";
import { useState} from "react";
import Mainsearch from "./MainSearch";
import { useRecipes } from "../providerContext/ProviderContext";
import Loading from "./Loading";
import Error from "./Error";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Nigeria = () => {
 const {recipes: record, loading, error, fullSearch} = useRecipes();

 console.log(record);
 

  const [CurrentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 15;
  const lastIndex = CurrentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = record.slice(firstIndex, lastIndex);
  const npage = Math.ceil(record.length / recordsPerPage);
  const number = [...Array(npage + 1).keys()].slice(1);




  return (
    <div className="ninja">
      <Loading loading = {loading} />
      <Error error = {error} />
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
                    <div className="p-4 flex items-center justify-between">
                      <p className="text-sm text-gray-600">
                        Created by{" "}
                        <span className="font-semibold text-green-600">
                          {item.publisher}
                        </span>
                      </p>
                      <Link to={`/recipesDetails/${item.id}`} className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-1 px-4 rounded-lg shadow-sm transition">
                        view recipe
                      </Link>
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
