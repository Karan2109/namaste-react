import Resturantcard from "./Resturantcard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  // console.log("Body Gets Rendered")

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204&lng=73.8567&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    // Optional Chaining
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    // console.log(restaurants)
    setListOfRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <h1>Looks like you're offline! Please check your internet connection.</h1>
    );
  }

  return listOfRestaurants === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center">
        <div className="search p-4 m-4">
          <input
            type="text"
            className="search-box border border-gray-400"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-2 border border-black bg-amber-300"
            onClick={() => {
              // filter the resturants cards and update the UI
              // SearchText
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilteredRestaurants(filteredRestaurants);
              // console.log(searchText)
            }}
          >
            Search
          </button>
        </div>
        <div className="px-2">
          <button
            className="px-4 bg-gray-200 rounded-xl"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5,
              );
              setListOfRestaurants(filteredRestaurants);
              // console.log(filteredRestaurants)
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants?.map((rest, id) => {
          return <Resturantcard key={rest.info.id} resData={rest.info} />;
        })}
      </div>
    </div>
  );
};

export default Body;
