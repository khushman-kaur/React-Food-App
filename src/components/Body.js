import ResCard, { enhancedResCard } from "./ResCard";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";

const Body = () => {
  let [listofRestaurant, setListofRestaurant] = useState([]);
  let [filteredList, setFilteredList] = useState([]);
  let [searchText, setSearchText] = useState("");

  const onlineStat = useOnlineStatus();
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.69540&lng=76.85240&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();

    setListofRestaurant(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setFilteredList(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!onlineStat) {
    return <h1>Looks like you are offline </h1>;
  }

  const { loggedInUser, setUserName } = useContext(UserContext);
  const EnhancedResCard = enhancedResCard(ResCard);

  console.log(listofRestaurant);

  return listofRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-container ">
        <div className="search p-4 m-4">
          <input
            className="border border-solid border-black"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className=" search px-3 py-2 bg-blue-300 mx-2 font-semibold "
            onClick={() => {
              console.log(searchText);

              let filterList = listofRestaurant.filter((item) =>
                item.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredList(filterList);
            }}
          >
            Search
          </button>

          <button
            className=" px-3 py-2 bg-blue-300 mx-4 font-semibold "
            onClick={() => {
              let filterList = listofRestaurant.filter(
                (item) => item.info.avgRatingString > 4.2
              );
              setFilteredList(filterList);
            }}
          >
            Top Rated Restaurants
          </button>
          <label>User Name</label>
          <input
            className="border border-solid border-black px-1"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap  ">
        {filteredList.map((item) => (
          <div className="mx-3 w-50 my-7" key={item.info.id}>
            <Link
              to={"/restaurant/" + item.info.id}
              style={{ textDecoration: "none" }}
            >
              {item?.info?.aggregatedDiscountInfoV3?.header ? (
                <EnhancedResCard resData={item} />
              ) : (
                <ResCard resData={item} />
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
