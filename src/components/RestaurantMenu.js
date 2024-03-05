import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API, MENU_ITEM_IMAGE } from "../utils/contants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const {resId} = useParams();
  const resInfo = useRestaurantMenu(resId); //custom hook
  const [ showIndex, setShowIndex ] = useState(0);

 // console.log(resInfo);

  if (resInfo.length === 0) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[0]?.card?.card?.info || {}; // we cannot destructure undefined or empty array , becoz code is trying to find name inside null or empty array
  const { itemCards } =
    resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.categories?.[0] || 
    resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card || 
    {};

  //console.log(itemCards);
  
  const categories = resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => 
    c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  )
  console.log(categories);

  return (
    <div className="restaurant-menu">
      <h1> {name} </h1>
      <p>
        {" "}
        {cuisines?.join(", ")} - {costForTwoMessage}{" "}
      </p>
      <h2>Menu</h2>
      {/* <ul>
         {itemCards.map((item) => (
          <div key={item.card.info.id} className="menu-item-container">
            <li className="menu-item" >
              {item.card.info.name}
              <p className="price-font">Rs.{item.card.info.price / 100}</p>
            </li>
            <img className="menu-img"
              src = { MENU_ITEM_IMAGE + item.card.info.imageId} />
          </div>
        ))} 
      </ul> */}

     { categories.map((category, index) => (
      <div key={category.card.card.title}>
          <RestaurantCategory 
           menuData = {category?.card?.card}
           key={category.card.card.title} 
           showMenu = {index == showIndex ? true : false}
           setShowIndexAtChild = {(collapseALL) => {
            collapseALL ? setShowIndex(null) : setShowIndex(index)
           }}
           />
      </div>
     ))}

    </div>
  );
};

export default RestaurantMenu;
