import { useState } from "react";

const SearchBox = (props) => {
  const [searchText, setSearchText] = useState();
  return (
    <>
      <input
        type="text"
        className="search-box"
        placeholder="Search"
        value={searchText}
        onChange={(event) => {
          setSearchText(event.target.value)
        }}
      />
      <button 
      className="search-btn"
      onClick={()=>{
        props.filterSearch(searchText)
      }}>Search</button>
    </>
  );
};

export default SearchBox;
