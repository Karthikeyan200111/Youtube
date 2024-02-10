import { IconButton } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchItem, setSearchItem] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchItem) {
      navigate(`search/${searchItem}`);
    }
    setSearchItem("");
  };
  return (
    <div className="text-white p-4">
      <div className="flex h-auto">
        <form onSubmit={handleSubmit}>
          <div className="inline-block md:w-80">
            <input
              placeholder="Search...."
              className="md:px-6 md:py-3 px-1 py-1 rounded-lg text-black md:w-80 w-40"
              type="text"
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
            />
          </div>

          <div className="inline-block">
            <IconButton
              type="submit"
              sx={{ p: "10px", color: "red" }}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
