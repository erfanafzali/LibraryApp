import { useState } from "react";
import { FaHeart } from "react-icons/fa";

function Book({ data, likedListHandler }) {
  const { title, author, country, image, pages } = data;
  const [like, setLike] = useState(false);

  const likeHandler = () => {
    //get data and status like
    likedListHandler(data, like);
    setLike((like) => !like);
  };

  return (
    <div className="w-full flex justify-start items-center gap-x-4 bg-slate-700 mb-5 rounded-lg overflow-hidden">
      <img src={image} alt="" className="w-20" />
      <div className="w-full flex flex-col justify-center items-start gap-y-2">
        <div className="w-full flex justify-between items-center pr-6">
          <span className="text-base md:text-xl text-slate-400 font-bold">
            {title}
          </span>
          <button onClick={likeHandler} className="">
            <FaHeart
              className={`text-lg md:text-2xl  ${
                like
                  ? "text-red-500 transition-all ease-in-out duration-500"
                  : "text-slate-400"
              }`}
            />
          </button>
        </div>
        <h3 className="font-semibold text-base md:text-lg text-slate-300">
          {author}
        </h3>
        <div className="flex justify-start items-center gap-x-4 text-slate-400 text-xs md:text-sm">
          <span>{country}</span>
          <span>{pages} pages</span>
        </div>
      </div>
    </div>
  );
}

export default Book;
