import Resturantcard from "./Resturantcard";
import { restaurants } from "../utils/mockData"
import { useState } from "react";


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(restaurants);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                    onClick={() => {
                        const filteredRestaurants = listOfRestaurants.filter((res) => res.rating > 4.5);
                        setListOfRestaurants(filteredRestaurants);
                        console.log(filteredRestaurants)
                    }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map((rest, id) => {
                        return <Resturantcard key={id} resData={rest} />
                    })
                }
            </div>
        </div>
    )
}

export default Body;