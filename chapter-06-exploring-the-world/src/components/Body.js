import SearchBox from "./Searchbox";
import RestrauntList from "./RestrauntCardList";
import { SWIGGEY_GET_DATA_URL } from "../constants";
import { useEffect, useState } from "react";
import ShimmerUi from "./shimmer";

const Body = () => {
  const [restrauntList, setRestrauntList] = useState([]);
  const [filterRestrauntList, setFilterRestrauntList] = useState(restrauntList);

  async function getRestrauntList() {
    try {
      const data = await fetch(SWIGGEY_GET_DATA_URL);
      const json = await data.json();
      setRestrauntList(json.data?.cards[2].data.data.cards);
      setFilterRestrauntList(json.data?.cards[2].data.data.cards);
    } catch (error) {
      console.log(error);
    }
  }

  function filterSearch(searchText) {
    const filteredRestrauntList = restrauntList.filter((restraunt) => {
      return restraunt.data.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
    setFilterRestrauntList(filteredRestrauntList);
  }

  useEffect(() => {
    getRestrauntList();
  }, []);

  return (
    <>
      <SearchBox filterSearch={filterSearch} />
      {restrauntList?.length === 0 ? (
        <ShimmerUi />
      ) : filterRestrauntList.length > 0 ? (
        <RestrauntList restrauntList={filterRestrauntList} />
      ) : (
        <h1>No search result found !</h1>
      )}
    </>
  );
};

export default Body;
