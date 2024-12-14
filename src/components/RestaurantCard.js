import { CDN_URL } from "../Utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
  
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
      resData?.card.info;
    return (
      <div
        className="res-card"
        style={{
          backgroundColor: "#f0f0f0",
        }}
      >
        <img
          className="res-logo"
          alt="res-logo"
          src={
            CDN_URL
            +
            resData.card.info.cloudinaryImageId
          }
        />
        <h4>{name}</h4>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{avgRating}</h5>
        <h5>{costForTwo}</h5>
      </div>
    );
  };

  export default RestaurantCard;