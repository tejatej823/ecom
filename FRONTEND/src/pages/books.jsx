import { useSelector } from "react-redux";
import BookCard from "../components/bookcard";
import Filterpage from "../components/filters";
import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import {useDispatch} from 'react-redux'
import useFilter from '../hooks/filterhook';
import {fetchBookData} from "../features/bookSlice";
import { useEffect } from "react";
import Loader from '../components/loader'
import Searchbar from '../components/searchbar';
const Books = () => {
  const dispatch=useDispatch();
  const {books,error,loading}=useSelector((state)=>state.books);
  const [showSidebar, setShowSidebar] = useState(false);
  const filters=useSelector((state)=>state.filter);
  
  const filterBooks= useFilter(books);
  const displayBooks= filters?filterBooks:books;
  useEffect(() => {
    dispatch(fetchBookData());
  }, []);
  if(loading){
    return <Loader/>;
  }
  if(error){
    return <h1>Error : {error}</h1>;
  }
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <button
        className="lg:hidden flex items-center justify-center bg-blue-500 text-white w-full py-3 gap-2 "
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <FaFilter size={18} />
        <span>{showSidebar ? "Hide Filters" : "Show Filters"}</span>
      </button>
      <div
        className={`${
          showSidebar ? "block" : "hidden"
        } lg:block  lg:w-1/5 bg-blue-50 p-4 h-full lg:sticky lg:top-14 `}
      >
        <Filterpage />
      </div>
      <div className="flex flex-col w-full overflow-y-auto no-scrollbar">
        <Searchbar/>
        <div className="flex flex-wrap justify-between gap-6 p-4 bg-gray-50">
          {displayBooks.map((book, index) => (
            <div key={index} className="h-64 md:h-80 w-[40%] md:w-[30%] lg:w-[20%] xl:w-[15%]">
              <BookCard key={index} book={book} />
            </div>
          ))}
          {displayBooks.length === 0 && (
            <p className="text-center text-gray-500 w-full">
              No books found matching the selected filters.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Books;
