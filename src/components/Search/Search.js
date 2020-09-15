import React, { useContext, useEffect } from "react";
import { GithubContext } from "../../config";
import { useHistory } from "react-router-dom";
import "./Search.css";

const Search = () => {
  const { search, setSearch, getSearch } = useContext(GithubContext);
  const history = useHistory();

  useEffect(() => {
    history.push("/overview");
  }, []);

  return (
    <div className="formWrapper">
      <form onSubmit={getSearch}>
        <input
          type="text"
          autoFocus
          placeholder="search for a user..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
