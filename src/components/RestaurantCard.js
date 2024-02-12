import { CDN_URL } from "../utils/contants";

const RestaurantCard = (props) => {
    const { restData } = props;
    const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } = restData;   //destructure
   // console.log(restData)
    
    return (
        <div className="res-card">
            
            <div className="res-image-container">
                <img className="res-image" 
                src={ CDN_URL + cloudinaryImageId } />
            </div>
    
            <div className="res-details">
                <h3> {name} </h3>
                <h4> {cuisines.join(", ")} </h4>
                <h4> {avgRating} rating </h4>
                <h4> {costForTwo} </h4>
                <h4> {sla.deliveryTime} minutes </h4>
    
                {/* <h3> {restData.name} </h3>
                <h4> {restData.cuisines.join(", ")} </h4>
                <h4> {restData.avgRating} rating </h4>
                <h4> { restData.costForTwo} </h4>
                <h4> {restData.sla.deliveryTime} minutes </h4> */}
            </div>
    
        </div>
    )
}

//higher order component
export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
           <div>
            <label className="promoted">Promoted</label>
            <RestaurantCard {...props}/>
           </div>
        )
    }
}
export default RestaurantCard;