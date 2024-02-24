import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import restList from "../utils/mockData";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLabel } from "./RestaurantCard";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const userContextData = useContext(UserContext);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.351351&lng=77.34024&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonResponse = await data.json();  
    //const jsonResponse = restList; // uncomment this when using promoted feature
    //optional chaining
    const listOfRestaurantObjectArray =
      jsonResponse?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    let resArray = [];
    listOfRestaurantObjectArray.map((res) => {
      resArray.push(res.info);
    });
    setListOfRestaurant(resArray); 
    console.log(listOfRestaurant);
    setfilteredRestaurant(resArray); 
  };

  const searchRestaurant = () => {
    let filterArray = listOfRestaurant.filter((res) => {
                            let resName = (res.name).toLowerCase();
                            if(resName.includes(searchText))return res;
                      })       
    setfilteredRestaurant(filterArray);
  }

  const onlineStatus = useOnlineStatus();
  if(onlineStatus == false) {
     return <h1>Looks like you're offline!! Please check your internet connection.</h1>
  }

  //conditional rendering
  if (listOfRestaurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
                setSearchText(e.target.value)
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              //Filter the restaurant cards and update the UI
              // I need search text
               searchRestaurant();
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="filter-btn"
            onClick={() => {
              //filter logic
              const updatedRestList = listOfRestaurant.filter(
                (res) => res.avgRating > 4
              );
              console.log(updatedRestList);
              setfilteredRestaurant(updatedRestList);
            }}
          >
            Top Rated restaurants.
          </button>
        </div>
        <div>
          <label>UserName:</label>
          <input className="changeUserName" 
          value = {userContextData.loggedInUser}
          onChange = {(e) => {
            userContextData.setUserNameFunction(e.target.value);
          }}></input>  
        </div>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurent) => (
        <Link 
            key={restaurent.id}
            to={"/restaurants/" + restaurent.id}>  

            {/* If restaurent is promoted then add promoted label to it */
                 restaurent.promoted ? <RestaurantCardPromoted restData={restaurent}/> 
                                     : <RestaurantCard  restData={restaurent} /> 
            }     
           
        </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
