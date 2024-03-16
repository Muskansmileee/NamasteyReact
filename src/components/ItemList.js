import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/contants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({data}) => {

  const dispatch = useDispatch();
  const handelAddItem = (item) => {
   // Dispatch an action
   dispatch(addItem(item));     //action.payload is item 
  }

  return (
    <div className="menu-body">
        {data.map((item) => (
          <div className="flex" key={item.card.info.id} data-testid="resItems">
            <div className="menu-body-item">
                <span> {item.card.info.name} </span>
                <span>₹ {item.card.info.price/100}</span>
                <span className="menu-description"> {item.card.info.description} </span>
            </div>  
            <div>
              <img className="menu-img" src={CDN_URL + item.card.info.imageId}/>

              <button className="add-button"
              onClick={() => handelAddItem(item)}
              >Add +</button>

            </div>
          </div>
        ))}
    </div>
  );
};

export default ItemList;
