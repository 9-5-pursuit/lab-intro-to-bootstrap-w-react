import React, { createContext, useState } from "react";
import postData from "./data/posts.json";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(postData);
  const [showAlert, setShowAlert] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();
    const searchText = event.target.value.toLowerCase();
    setSearchTerm(searchText);

    if (searchText === "") {
      setFilteredPosts(postData);
      setShowAlert(false);
    } else {
      const filtered = postData.filter(
        (post) =>
          post.title.toLowerCase().includes(searchText) ||
          post.location.toLowerCase().includes(searchText)
      );
      setFilteredPosts(filtered);
      setShowAlert(filtered.length === 0);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        filteredPosts,
        showAlert,
        handleSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
