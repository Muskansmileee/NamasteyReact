import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  const { title } = props.menuData;
  const { itemCards } = props.menuData;
  const [ openMenu , setOpenMenu ] = useState(true);

  const handelClick = () => {
    openMenu ? props.setShowIndexAtChild() :  props.setShowIndexAtChild(true);
    setOpenMenu(!openMenu);
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
             props.showMenu && <ItemList data = {itemCards}/>
          }
      </div>
    </div>
  );
};

export default RestaurantCategory;
