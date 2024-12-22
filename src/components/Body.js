import RestaurantCard from "./RestaurantCard";
// import resList from "../Utils/mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // State Variable - Super powerful variable

  const [listOfRestraunts, setListOfRestraunts] = useState([]);
  const [filteredRestraunt, setFilteredRestraunt] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5194773&lng=77.2182409&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    
    setListOfRestraunts(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  // put the data from json inside this
       
    setFilteredRestraunt(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); // put the data from json inside this
    
  };

  return listOfRestraunts.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);
              const filteredRestraunt = listOfRestraunts.filter((res) => res?.info?.name.toLowerCase().include(searchText).toLowerCase());  // res.data.name(json mei restraunt name kahan hai)
            
              setListOfRestraunts(filteredRestraunt);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestraunts.filter(
              (res) =>
                res?.info?.avgRating > 4.2
            );
            setFilteredRestraunt(filteredList);
          }}
        >
          Top Rated Restraunts
        </button>
      </div>
      <div className="res-container">
        {filteredRestraunt.map((restraunt) => (
          <RestaurantCard key={restraunt?.info?.id} resData={restraunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
