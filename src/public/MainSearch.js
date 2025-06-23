import { Link } from "react-router-dom";

const Mainsearch = ({ fullSearch }) => {
  return (
    <div className="search max-w-md mx-auto my-8 px-4">
      <div className="main-input">
        <Link to="/Recipe">
          <input
            type="text"
            onChange={fullSearch}
            placeholder="Full Food Search"
            className="w-full px-4 py-2 border border-green-400 rounded-md shadow-sm text-green-800 placeholder-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </Link>
      </div>
    </div>
  );
};

export default Mainsearch;
