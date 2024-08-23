import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-slate-100">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link
          to="/"
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold flex flex-wrap items-center"
        >
          <span className="px-2 py-1 gradient-bg rounded-lg text-slate-700">
            Prince's
          </span>
          <span className="text-slate-600">EState</span>
        </Link>
        <form className="bg-white p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>

          <Link to="/sign-in">
            <li className="text-slate-700 hover:underline">Sign In</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};
export default Header;
