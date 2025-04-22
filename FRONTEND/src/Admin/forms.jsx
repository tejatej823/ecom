import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../features/bookSlice";

const Admin = () => {
  const [bookDetails, setBookDetails] = useState({
    title: "",
    author: "",
    genre: "",
    price: "",
    rating: "",
    publicationYear: "",
    imageUrl: null,
  });

  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookDetails({ ...bookDetails, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBookDetails({ ...bookDetails, imageUrl: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookDetails.title.trim() && bookDetails.author.trim()) {
      const newBook = {
        ...bookDetails,
        id: Date.now(),
      };
      dispatch(addBook(newBook));
      setBookDetails({
        title: "",
        author: "",
        genre: "",
        price: "",
        rating: "",
        publicationYear: "",
        imageUrl: null,
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={bookDetails.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <input
          type="text"
          name="author"
          value={bookDetails.author}
          onChange={handleChange}
          placeholder="Author"
        />
        <input
          type="text"
          name="genre"
          value={bookDetails.genre}
          onChange={handleChange}
          placeholder="Genre"
        />
        <input
          type="number"
          name="price"
          value={bookDetails.price}
          onChange={handleChange}
          placeholder="Price"
        />
        <input
          type="number"
          name="rating"
          value={bookDetails.rating}
          onChange={handleChange}
          placeholder="Rating"
        />
        <input
          type="number"
          name="publicationYear"
          value={bookDetails.publicationYear}
          onChange={handleChange}
          placeholder="Publication Year"
        />

        <input
          type="file"
          name="imageUrl"
          onChange={handleFileChange}
          accept="image/*"
        />

        {bookDetails.imageUrl && (
          <img
            src={bookDetails.imageUrl}
            alt="Preview"
            style={{ width: "100px", marginTop: "10px" }}
          />
        )}

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default Admin;
