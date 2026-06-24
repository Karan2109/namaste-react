import Resturantcard from "./Resturantcard";
import { useState, useEffect } from "react";


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204&lng=73.8567&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // Optional Chaining
        const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setListOfRestaurants(restaurants)
    }

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                    onClick={() => {
                        const filteredRestaurants = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4.5
                        );
                        setListOfRestaurants(filteredRestaurants);
                        console.log(filteredRestaurants)
                    }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants?.map((rest, id) => {
                        return <Resturantcard key={rest.info.id} resData={rest.info} />
                    })
                }
            </div>
        </div>
    )
}

export default Body;