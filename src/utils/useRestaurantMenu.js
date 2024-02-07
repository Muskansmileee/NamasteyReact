//write use , react will know its a hook. Its for menu of particular restaurant having resId.
//its job is to return the restaurent information.
//Make an api call and extract the data.
import { useState, useEffect } from "react";
import { MENU_API } from "../utils/contants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState([]);

    //fetchData
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch( MENU_API + resId);
        const json = await data.json();
        console.log(json.data);
        setResInfo(json?.data);
    };
    return resInfo;
}

export default useRestaurantMenu;