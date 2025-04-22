import { LiaFilterSolid } from "react-icons/lia";
import { useSelector } from "react-redux";
import { genereCheckboxReducer, addSortType } from "../features/filterSlice";
import { useDispatch } from "react-redux";
const Filterpage = () => {
  const all_sorting = [
    "price_ascending",
    "price_descending",
    "rating_ascending",
    "rating_descending",
  ];
  const filters = useSelector((state) => state.filter);
  console.log(filters);
  const books = useSelector((state) => state.books);
  const genre = books.map((book) => book.genre);
  const unique_genre = [...new Set(genre)];
  const selected_sort = filters.selectedSort;
  const selected_genre = filters.selectedGenres;
  const handlesort = (sort) => {
    dispatch(addSortType(sort));
  };
  const handlegenre = (genre) => {
    dispatch(genereCheckboxReducer(genre));
  };
  const dispatch = useDispatch();
  return (
    <div className="h-auto overflow-y-auto p-4 bg-white rounded-md shadow-lg">
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <h2 className="text-2xl font-bold text-blue-500">Filters</h2>
        <LiaFilterSolid className="text-2xl text-blue-500" />
      </div>
      <div className="space-y-4">
        <p className="text-lg font-semibold text-gray-700">Filter by Genre:</p>
        <ul className="space-y-2">
          {unique_genre.map((g, index) => (
            <li key={index} className="flex items-center gap-2">
              <input
                type="checkbox"
                id={`genre-${index}`}
                checked={selected_genre.includes(g)}
                onChange={() => handlegenre(g)}
                className="h-4 w-4 accent-blue-500"
              />
              <label
                htmlFor={`genre-${index}`}
                className="text-sm text-gray-800 cursor-pointer"
              >
                {g}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-4 mt-4">
        <p className="text-lg font-semibold text-gray-700">Sort by :</p>
        <ul className="space-y-2">
          {all_sorting.map((sort, index) => (
            <li key={index}>
              <input
                type="radio"
                value={sort}
                checked={sort === selected_sort}
                onChange={() => handlesort(sort)}
                className="h-2 w-4 accent-blue-500"
              />
              <label className="text-sm text-gray-800 cursor-pointer">
                {sort}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filterpage;
