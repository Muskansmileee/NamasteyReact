import React from "react";
import ReactDOM from "react-dom/client";

const restList = [
{
    "id": "349817",
    "name": "Pizza Hut",
    "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
    "locality": "Sector-79",
    "areaName": "Omaxe World Street",
    "costForTwo": "₹350 for two",
    "cuisines": [ "Pizzas", "Fast food" ],
    "avgRating": 3.9,
    "parentId": "721",
    "avgRatingString": "3.9",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 44,
      "lastMileTravel": 11.9,
      "serviceability": "SERVICEABLE",
      "slaString": "44 mins",
      "lastMileTravelString": "11.9 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-12-26 01:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
},
{
        "id": "468366",
        "name": "Subway",
        "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
        "locality": "Omaxe World Street",
        "areaName": "Sector 81",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Continental",
          "Fast Food",
          "Healthy Food",
          "Salads",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 3.8,
        "parentId": "2",
        "avgRatingString": "3.8",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 41,
          "lastMileTravel": 11.8,
          "serviceability": "SERVICEABLE",
          "slaString": "41 mins",
          "lastMileTravelString": "11.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-26 04:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
},
{
    "id": "722016",
    "name": "Bikaner sweets",
    "cloudinaryImageId": "b18327794f606f157fc6102494b9f12d",
    "locality": "Mohna Road",
    "areaName": "NIT_FBD",
    "costForTwo": "₹200 for two",
    "cuisines": [
      "Desserts"
    ],
    "avgRating": 3.4,
    "veg": true,
    "parentId": "2654",
    "avgRatingString": "3.4",
    "totalRatingsString": "20+",
    "sla": {
      "deliveryTime": 27,
      "lastMileTravel": 5.6,
      "serviceability": "SERVICEABLE",
      "slaString": "27 mins",
      "lastMileTravelString": "5.6 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-12-25 19:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
},
{
    "id": "759296",
    "name": "Bunny's Kitchen",
    "cloudinaryImageId": "4371ea20a925a4be398232931ff0e320",
    "locality": "Huda Market",
    "areaName": "Sector 15_FBD",
    "costForTwo": "₹350 for two",
    "cuisines": [
      "Pizzas",
      "Fast Food",
      "Burgers"
    ],
    "avgRating": 3.7,
    "veg": true,
    "parentId": "376280",
    "avgRatingString": "3.7",
    "totalRatingsString": "20+",
    "sla": {
      "deliveryTime": 31,
      "lastMileTravel": 6.2,
      "serviceability": "SERVICEABLE",
      "slaString": "31 mins",
      "lastMileTravelString": "6.2 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-12-25 22:30:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",

},
{
"id": "318088",
"name": "Biryani House",
"cloudinaryImageId": "rqbv8bz37wyiiorocbtm",
"locality": "Shyam Colony",
"areaName": "Ballabhgarh",
"costForTwo": "₹200 for two",
"cuisines": [
  "Biryani"
],
"avgRating": 3.8,
"parentId": "134",
"avgRatingString": "3.8",
"totalRatingsString": "100+",
"sla": {
  "deliveryTime": 32,
  "lastMileTravel": 7.6,
  "serviceability": "SERVICEABLE",
  "slaString": "32 mins",
  "lastMileTravelString": "7.6 km",
  "iconType": "ICON_TYPE_EMPTY"
},
"availability": {
  "nextCloseTime": "2023-12-25 22:00:00",
  "opened": true
},
"badges": {
  
},
"isOpen": true,
"type": "F",
}
]

const Header = () => {
    return (
        <div className="header">

            <div className="logo-container">
                <img className="logo" 
                src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg"></img>
            </div>

            <div className="nav-items">
               <ul>
                  <li>Home</li>
                  <li>About us</li>
                  <li>Contact us</li>
                  <li>Cart</li>
               </ul>
            </div>
        </div>
    )
}

const RestaurentCard = (props) => {
   const { restData } = props;
   const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } = restData;   //destructure
  // console.log(restData)
   
   return (
     <div className="res-card">

        <div className="res-image-container">
            <img className="res-image" 
            src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
            + cloudinaryImageId} />
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

const Body = () => {
   return ( 
    <div className="body">
        <div className="search"> Search </div>
        <div className="res-container">
            {
                restList.map((restaurent) => (
                  <RestaurentCard key={restaurent.id} restData = {restaurent} />
                ))
            }

            {/* <RestaurentCard 
                restData = {restList[0]}
            />
             <RestaurentCard 
                restData = {restList[1]}
            />
             <RestaurentCard 
                restData = {restList[2]}
            />
             <RestaurentCard 
                restData = {restList[3]}
            />
             <RestaurentCard 
                restData = {restList[4]}
            /> */}

            {/* <RestaurentCard 
                resName="Kfc" 
                cuisine="Burger, fast food" 
            /> */}
        </div>
    </div>
   )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); 