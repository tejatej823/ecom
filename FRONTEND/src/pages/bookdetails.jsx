import React, { useState ,useEffect} from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { addbook } from "../features/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import axios from 'axios';
import Loader from "../components/loader"
const Bookdetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [book,setBook]=useState(null);
  const [error,setError]=useState(null);
  const [loading,setLoading]=useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);})
      .catch((err) => {
        setError("Book not found");
        setLoading(false);
      });
  }, [id]);

  if(error){
    return <h1>ERROR:{error}</h1>
  }
  if(loading){
    return <Loader/>;
  }
  if (!book) return <p className="text-center text-red-500">Book not found!</p>;

  const handleOnChange = (e) => {
    setQuantity(Math.max(1, e.target.value)); 
  }
  const handleAdd = () => {
    dispatch(addbook({ book, quantity }));
    toast.success(`${book.bookName} added to the cart successfully!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };
  return (
    <div className="max-w-md sm:max-w-2xl md:max-w-4xl lg:w-6xl mx-auto p-4">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="flex-1 flex justify-center">
          <img
            src={book.imageURL}
            alt={book.bookName}
            className="w-full h-54 md:h-96 rounded-lg shadow-lg cover"
          />
        </div>
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{book.bookName}</h1>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Author:</span> {book.author}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Genre:</span> {book.genre}
          </p>
          <p className="text-lg font-semibold text-gray-800">
            Price: ₹{book.price}
          </p>
          <p className="text-yellow-500">
            <span className="font-semibold">Rating:</span> {book.rating} ⭐
          </p>
        </div>
      </div>
        <div
          className="mt-8 bg-gray-100 p-4 
      rounded-lg shadow-md space-y-4 flex flex-col items-center "
        >
          <div className="flex items-center gap-4">
            <p className="text-lg font-semibold">Quantity:</p>
            <button
              className="px-3 py-1 border border-gray-400 rounded hover:bg-gray-300 transition"
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              onChange={handleOnChange}
              className="w-16 text-center border border-gray-400 rounded"
              min="1"
            />
            <button
              className="px-3 py-1 border border-gray-400 rounded hover:bg-gray-300 transition"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          <button
            className="w-full md:w-1/2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
            onClick={handleAdd}
          >
            Add to Cart
          </button>
        </div>
      </div>
  );
};
export default Bookdetails;
