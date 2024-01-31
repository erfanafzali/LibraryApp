import { useState } from "react";
import { books as bookData } from "../constants/mockData";
import Book from "./Book";
import SideCard from "./SideCard";
import SearchBar from "./SearchBar";
function Books() {
  const [books, setBooks] = useState(bookData);
  const [liked, setLiked] = useState([]);
  const [search, setSearch] = useState([]);

  const likedListHandler = (book, status) => {
    // handle status => when liked === true remove item from likedlist
    if (status) {
      const newLikedList = liked.filter((like) => like.id !== book.id);
      setLiked(newLikedList);
    } else {
      // if handle status false save item to likedlist
      setLiked((liked) => [...liked, book]);
    }
  };

  const searchHandler = () => {
    if (search) {
      const newBooks = bookData.filter((book) => book.title.toLocaleLowerCase().includes(search));
      setBooks(newBooks);
    }else {
      setBooks(bookData)
    }
  };

  return (
    <>
      <SearchBar
        search={search}
        setSearch={setSearch}
        searchHandler={searchHandler}
      />
      <div className=" flex md:flex-row flex-col justify-center w-full items-center md:items-start">
        <div className="w-full">
          {books.map((book) => {
            return (
              <Book
                key={book.id}
                data={book}
                likedListHandler={likedListHandler}
              />
            );
          })}
        </div>
        <div className="flex justify-center items-start ">
          {!!liked.length && (
            <div className="w-72 py-1 px-4 flex justify-center items-center flex-col ">
              <div className=" bg-slate-500 rounded-xl py-4 px-3 w-full ">
                <h1 className="w-full text-lg text-white font-bold text-center mb-2">
                  Favorites
                </h1>
                {liked.map((book) => (
                  <SideCard key={book.id} data={book} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Books;
