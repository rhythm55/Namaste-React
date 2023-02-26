import SearchBox from "./Searchbox";
import RestrauntList from "./RestrauntCardList";
import { restrauntList } from "../constants";
import { useState } from "react";

const Body = () => {
  const [filterRestrauntList, setFilterRestrauntList] = useState(restrauntList);
  function filterSearch(searchText) {
    const filteredRestrauntList = restrauntList.filter((restraunt) =>
      {
        return restraunt.data.name.toLowerCase().includes(searchText.toLowerCase())
    }
    );
    setFilterRestrauntList(filteredRestrauntList);
  }

  return (
    <>
      <SearchBox filterSearch={filterSearch} />
      <RestrauntList restrauntList={filterRestrauntList} />
    </>
  );
};

export default Body;
