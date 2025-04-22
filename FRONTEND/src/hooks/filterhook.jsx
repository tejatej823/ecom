import { useSelector } from "react-redux";
import { useMemo } from "react";

const useFilter = () => {
  const filters = useSelector((state) => state.filter);
  const books = useSelector((state) => state.books);
  
  const filteredBooks=useMemo(() => {
    let filtered = [...books];
    if (filters.selectedGenres.length > 0) {
      filtered = filtered.filter((book) =>
        filters.selectedGenres.includes(book.genre)
      );
    }
    if (filters.searchItem) {
      filtered = filtered.filter((book) =>
        book.title.toLowerCase().includes(filters.searchItem.toLowerCase()) ||
        book.author.toLowerCase().includes(filters.searchItem.toLowerCase())
      );
    }
    if (filters.selectedSort) {
      switch(filters.selectedSort) {
        case "price_ascending":
          filtered.sort((a, b) => a.price - b.price);
          break;
        case "price_descending":
          filtered.sort((a, b) => b.price - a.price);
          break;
        case "rating_ascending":
          filtered.sort((a, b) => a.rating - b.rating);
          break;
        case "rating_descending":
          filtered.sort((a, b) => b.rating - a.rating);
          break;
      }
    }
    return filtered;
  }, [books, filters]);

  return filteredBooks;
};

export default useFilter;