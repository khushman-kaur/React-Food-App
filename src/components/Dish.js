import { IMG_URL } from "../../utils/constants";

const Dish = (props) => {
  const { resData } = props;
  const { name, defaultPrice, ratings, imageId, price, finalPrice } =
    resData?.card?.info;

  return (
    <div className="recipeCard">
      <div className="item-left">
        <h2 className="itemName"></h2>
        <h3>{name}</h3>
        <h4>
          ₹
          {defaultPrice
            ? defaultPrice / 100
            : finalPrice
            ? finalPrice / 100
            : price / 100}
        </h4>
        <p>
          {ratings.aggregatedRating.rating
            ? ratings.aggregatedRating.rating
            : " "}
        </p>
      </div>
      <div className="item-right">
        <img className="img-dish" src={IMG_URL + imageId}></img>
        <button>Add</button>
      </div>
    </div>
  );
};

export default Dish;
