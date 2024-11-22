import useRestaurantMenu from "../../utils/useRestaurantMenu";
import { CDN_URL } from "../../utils/constants";
import Shimmer from "./Shimmer";
import { useState } from "react";
import RestaurantCategory from "./RestaurantCategory";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info;

  if (!restaurantInfo) {
    return <Shimmer />;
  }

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        c.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

  const {
    name,
    cuisines,
    cloudinaryImageId,
    costForTwoMessage,
    avgRatingString,
  } = restaurantInfo;

  return (
    <div className="text-center my-0 mx-auto">
      <div className="text-center my-0 mx-auto">
        <h1 className="font-bold text-2xl mt-11">{name}</h1>
        <h3 className="font-semibold text-lg mb-10">{cuisines.join(", ")}</h3>
        <img
          className="food-img  mx-auto"
          src={CDN_URL + cloudinaryImageId}
        ></img>
        {/* <h4>{costForTwoMessage}</h4> */}
        <h4 className="font-medium text-base mb-6">
          Rating: {avgRatingString}
        </h4>
        <h2 className="font-bold text-2xl font-mono mb-5">~~~ Menu ~~~</h2>
      </div>
      {/* ACCORDION FOR CATEGORIES */}
      <div className=" pb-10 ">
        {categories.map((categories, index) => (
          <RestaurantCategory
            key={categories?.card?.card.title}
            data={categories?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
