import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import restList from "../utils/mockData";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState(restList);                                         

    return ( 
     <div className="body">
         <div className="filter"> 
            <button className="filter-btn"
            onClick={() => {
                //filter logic
                const updatedRestList = listOfRestaurant.filter(
                    (res) => res.avgRating > 3.5
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
             
             {/* previously we wrote restList.map ... */}
 
             {/* <RestaurantCard 
                 restData = {restList[0]}
             />
              <RestaurantCard 
                 restData = {restList[1]}
             />
              <RestaurantCard 
                 restData = {restList[2]}
             />
              <RestaurantCard 
                 restData = {restList[3]}
             />
              <RestaurantCard 
                 restData = {restList[4]}
             /> */}
 
             {/* <RestaurantCard 
                 resName="Kfc" 
                 cuisine="Burger, fast food" 
             /> */}
         </div>
     </div>
    )
}

export default Body;