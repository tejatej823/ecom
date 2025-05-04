import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom';
import {removebook} from '../features/cartSlice';
const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate=useNavigate();
  if (cartItems.length === 0) {
    return <p>Your cart is empty.</p>;
  }
const handleonclick=(id)=>{
    navigate(`/books/${id}`)
}
const handleremove=(id)=>{
    dispatch(removebook(id));
}
  return (
    <div className="cart-container">
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="cart-card flex justify-between items-center p-4 border-b"
        >
          <div className="flex items-center space-x-4">
            <img
              src={item.imageURL}
              alt={item.bookName}
              className="w-24 h-32 object-cover rounded"
              onClick={() => handleonclick(item.id)}
            />
            <div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-500">by {item.author}</p>
              <p className="text-xl text-gray-700">₹{item.price}</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-lg">Quantity: {item.quantity}</p>
            <button className="mt-2 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600" onClick={()=>handleremove(item.id)}>
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="total-price mt-4 p-4">
        <h2 className="font-bold text-xl">
          Total Price: ₹
          {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}
        </h2>
      </div>
    </div>
  );
};

export default Cart;
