import { useSelector } from "react-redux";
import BookCard from "../components/bookcard";
import Filterpage from "../pages/filters";
import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import {addSearchItem} from '../features/filterSlice';
import {useDispatch} from 'react-redux'
import useFilter from '../hooks/filterhook';
const Books = () => {
  const dispatch=useDispatch();
  const searchItem = useSelector((state) => state.filter.searchItem);
  const [showSidebar, setShowSidebar] = useState(false);
  const handleonchange = (e) => {
    const searchitem=e.target.value;
    dispatch(addSearchItem(searchitem));
  }
  const filteredbooks=useFilter();
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
        <div className="w-full">
          <input
            type="text"
            className="bg-blue-100 w-full border rounded-full mt-5 h-12 pl-6"
            placeholder="Search here............."
            value={searchItem}
            onChange={handleonchange}
          />
        </div>
        <div className="flex flex-wrap gap-6 p-4 bg-gray-50">
          {filteredbooks.map((book, index) => (
            <div key={index} className="h-64 md:h-80 w-[40%] md:w-[30%] lg:w-[20%] xl:w-[15%]">
              <BookCard key={index} book={book} />
            </div>
          ))}
          {filteredbooks.length === 0 && (
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
