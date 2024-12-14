import RestaurantCard from "./RestaurantCard";
import resList from "../Utils/mockdata";
import {useState} from "react";
 
const Body = () => {
  // State Variable - Super powerful variable

  const [listOfRestraunts, setListOfRestraunts] = useState(resList);
  // Normal JS Variable
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestraunts.filter(
              (res) => res.card?.info?.avgRating > 4
            );
            setListOfRestraunts(filteredList);
          }}
        >
          Top Rated Restraunts
        </button>
      </div>
      <div className="res-container">
        {listOfRestraunts.map((restraunt) => (
          <RestaurantCard key={restraunt.card?.info?.id} resData={restraunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
