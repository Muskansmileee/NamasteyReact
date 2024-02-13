import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  const { title } = props.menuData;
  const { itemCards } = props.menuData;
  const [ showMenu, setShowMenu ] = useState(false);

  const handelClick = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  }

  return (
    <div>
      {/* Header */}
      <div>
        <div className="menu-header" onClick={handelClick}>
            <span className="menu-title">{title} ({itemCards.length}) </span>
            <span className="down-arrow">⬇️</span>
        </div>
          {/* Accordian body */}
          { 
             showMenu && <ItemList data = {itemCards}/>
          }
      </div>
    </div>
  );
};

export default RestaurantCategory;
