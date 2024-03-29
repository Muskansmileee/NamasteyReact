import React, { lazy, Suspense, useEffect, useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
//import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
    const [userName, setUserName] = useState();
    useEffect(() => {
        //logic to authenticate and get data
        const data = { name : 'Muskan Gupta'};
        setUserName(data.name);
    },[]);

    return (
        <Provider store = {appStore}>
            <UserContext.Provider value={{loggedInUser : userName, setUserNameFunction:setUserName}}>
                <div className="app">
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children:[
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: <Suspense fallback = {<h1>Loading...</h1>}>
                            <Grocery/>
                        </Suspense>
            },
            {
                path: "/cart",
                element: <Cart />
            },
        ],
        errorElement: <Error />   //if there is any error , load error component.
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<AppLayout />); 
root.render(<RouterProvider router={appRouter} />);