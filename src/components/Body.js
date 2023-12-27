import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import restList from "../utils/mockData";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);                                         
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.351351&lng=77.34024&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
        const jsonResponse = await data.json();
        //optional chaining
        const listOfRestaurantObjectArray = (jsonResponse?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        let resArray = [] ;
        listOfRestaurantObjectArray.map((res) => {
            resArray.push(res.info);
        })    
        setListOfRestaurant(resArray);
    }

    //conditional rendering
    if(listOfRestaurant.length === 0){
        return <Shimmer /> 
    }

    return ( 
     <div className="body">
         <div className="filter"> 
            <button className="filter-btn"
            onClick={() => {
                //filter logic
                const updatedRestList = listOfRestaurant.filter(
                    (res) => res.avgRating > 4
                )
                console.log(updatedRestList)
                setListOfRestaurant(updatedRestList);
            }}
            >
                Top Rated restaurants.
            </button>
        </div>
         <div className="res-container">
             {
                 listOfRestaurant.map((restaurent) => (
                   <RestaurantCard key={restaurent.id} restData = {restaurent} />
                 ))
             }
         </div>
     </div>
    )
}

export default Body;