import { NavLink } from "react-router-dom";

const Header = () => {
  const desktop = "Dark Cloud Recipe";
  const tablet = "D.Cloud Recipe";
  const mobile = "D.C. Recipe";

  return (
    <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
      {/* Logo / Brand */}
      <div className="font-bold text-green-600 text-lg">
        {/* Responsive text - show/hide based on screen */}
        <h1 className="hidden md:block">{desktop}</h1>
        <h1 className="hidden sm:block md:hidden">{tablet}</h1>
        <h1 className="block text-sm sm:hidden">{mobile}</h1>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex items-center gap-3 text-sm font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 border-b-2 border-green-600 pb-1"
                  : "text-gray-700 hover:text-green-600 transition"
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 border-b-2 border-green-600 pb-1"
                  : "text-gray-700 hover:text-green-600 transition"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Recipe"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 border-b-2 border-green-600 pb-1"
                  : "text-gray-700 hover:text-green-600 transition"
              }
            >
              Recipe
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 border-b-2 border-green-600 pb-1"
                  : "text-gray-700 hover:text-green-600 transition"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
