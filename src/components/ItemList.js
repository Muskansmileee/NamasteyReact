import { CDN_URL } from "../utils/contants";

const ItemList = ({data}) => {
  console.log(data);

  return (
    <div className="menu-body">
        {data.map((item) => (
          <div className="flex" key={item.card.info.id}>
            <div className="menu-body-item">
                <span> {item.card.info.name} </span>
                <span>₹ {item.card.info.price/100}</span>
                <span className="menu-description"> {item.card.info.description} </span>
            </div>  
            <div>
              <img className="menu-img" src={CDN_URL + item.card.info.imageId}/>
              <button className="add-button">Add +</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ItemList;
