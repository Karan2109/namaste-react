import Resturantcard from "./Resturantcard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer"


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [searchText, setSearchText] = useState("")

    // console.log("Body Gets Rendered")

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204&lng=73.8567&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // Optional Chaining
        const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        // console.log(restaurants)
        setListOfRestaurants(restaurants)
        setFilteredRestaurants(restaurants)
    }

    return listOfRestaurants === 0 ? (
        <Shimmer />
    ) :
        (
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
                        <button onClick={() => {
                            // filter the resturants cards and update the UI
                            // SearchText
                            const filteredRestaurants = listOfRestaurants.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            )
                            setFilteredRestaurants(filteredRestaurants)
                            // console.log(searchText)
                        }}>Search</button>
                    </div>
                    <button className="filter-btn"
                        onClick={() => {
                            const filteredRestaurants = listOfRestaurants.filter(
                                (res) => res.info.avgRating > 4.5
                            );
                            setListOfRestaurants(filteredRestaurants);
                            // console.log(filteredRestaurants)
                        }}>
                        Top Rated Restaurants
                    </button>
                </div>
                <div className="res-container">
                    {
                        filteredRestaurants?.map((rest, id) => {
                            return <Resturantcard key={rest.info.id} resData={rest.info} />
                        })
                    }
                </div>
            </div>
        )
}

export default Body;