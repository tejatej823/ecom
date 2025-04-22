import { useNavigate } from "react-router-dom";

const Bookcard = ({ book }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/books/${book.id}`);
  };

  return (
    <div
      className="border rounded shadow w-full h-full flex flex-col cursor-pointer bg-gray-100"
      onClick={handleOnClick}
    >
      <div className="h-3/5 w-[100%]">
        <img
          src={book.imageUrl}
          alt={book.title}
          className="w-full h-full object-cover rounded-t"
        />
      </div>

      {/* Content section taking 30% of the card height */}
      <div className="h-2/5 p-3 flex flex-col justify-around">
        <h2 className="text-lg font-bold overflow-hidden whitespace-nowrap text-ellipsis">
          {book.title}
        </h2>

        <p className="text-gray-700 text-sm overflow-hidden whitespace-nowrap text-ellipsis">
          ₹{book.price}
        </p>
        <button className="w-full bg-black text-white font-semibold py-1 rounded hover:bg-gray-800">
          Buy
        </button>
      </div>
    </div>
  );
};

export default Bookcard;
