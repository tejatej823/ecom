import {useSelector} from "react-redux"
import { addSearchItem } from "../features/filterSlice";
import { useDispatch } from "react-redux";

const Searchbar=()=>{
  const searchItem = useSelector((state) => state.filter.searchItem);
  const dispatch = useDispatch();
  const handleonchange = (e) => {
    const searchitem = e.target.value;
    dispatch(addSearchItem(searchitem));
  };

    return (
      <>
        <div className="w-full">
          <input
            type="text"
            className="bg-blue-100 w-full border rounded-full mt-5 h-12 pl-6"
            placeholder="Search here............."
            value={searchItem}
            onChange={handleonchange}
          />
        </div>
      </>
    );
}
export default Searchbar;