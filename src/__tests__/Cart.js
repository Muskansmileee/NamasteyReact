import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../components/RestaurantMenu";
import RES_MENU_MOCK from "../mocks/resMenu.json";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Header from "../components/Header";
import Cart from "../components/Cart";
import "@testing-library/jest-dom";

/* the promise.resolve returns a json , will convert that to json and will return a promise.resolve 
 and this time we will resolve with our mock data */

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RES_MENU_MOCK);
    },
  });
});

test("should load my restaurent menu component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={ appStore }>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const resItems = screen.getAllByTestId("resItems");
  expect(resItems.length).toBe(20);

  const addBtn = screen.getAllByRole("button", {name: "Add +"});
  fireEvent.click(addBtn[0]);

  /* now we dont have header component but how can we test cart in header updated ? 
   add header component as well in render.
   I can also include my cart component to check for items in cart.
  */

   const cartItemsHeader = screen.getByText("Cart (1 items)");
   expect(cartItemsHeader).toBeInTheDocument();

   fireEvent.click(cartItemsHeader);

   const cartItemsAtCartPage = screen.getAllByTestId("cartItems");
   expect(cartItemsAtCartPage.length).toBe(1);
});
