import RestaurantCard from "./RestaurantCard";
import restList from "../utils/mockData";

const Body = () => {
    return ( 
     <div className="body">
         <div className="search"> Search </div>
         <div className="res-container">
             {
                 restList.map((restaurent) => (
                   <RestaurantCard key={restaurent.id} restData = {restaurent} />
                 ))
             }
 
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