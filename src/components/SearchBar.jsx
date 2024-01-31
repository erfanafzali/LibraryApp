import { FiSearch } from "react-icons/fi";

function SearchBar({ search, setSearch, searchHandler }) {
  return (
    <div className="mt-12 mb-7">
      <div className=" w-full flex justify-start items-center gap-x-3">
        <input
          type="text"
          placeholder="search title ..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          className="w-72 py-1 px-2 bg-slate-400 rounded-xl outline-0 border-0 text-base text-white font-semibold placeholder:text-slate-500 placeholder:font-semibold"
        />
        <button
          onClick={searchHandler}
          className="bg-slate-500 p-2 rounded-full hover:text-slate-700 hover:bg-slate-400 transition-all duration-300">
          <FiSearch className="font-bold text-white text-xl " />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
