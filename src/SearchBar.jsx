import React, { useState } from "react";
import "./Products.css";

function SearchBar({ onSearch, onCancel, displaySearch, setDisplaySearch }) {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    onSearch(input);
    setInput("");
    setDisplaySearch(true);
  };
  const handleCancel = () => {
    onCancel();
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search_div">
      <div className="input_wrapper">
        <button className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            height="50px"
            width="50px"
          >
            <path
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="1.5"
              stroke="#fff"
              d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
            ></path>
            <path
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="1.5"
              stroke="#fff"
              d="M22 22L20 20"
            ></path>
          </svg>
        </button>
        <input
          className="search_bar"
          type="text"
          placeholder="Search..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      {displaySearch && (
        <button className="cancel_btn" onClick={handleCancel}>
          X
        </button>
      )}
    </div>
  );
}

export default SearchBar;
