import { Provider } from "react-redux";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header"
import appStore from "../utils/appStore";
import "@testing-library/jest-dom";

/* click */

test('should render header component with a login button', () => {
  render(
    <BrowserRouter>
        <Provider store = {appStore}>
        <Header/>
        </Provider>
    </BrowserRouter>
  );

  /* Jsdom starts render the component in isolation.
    now jsdom understands jsx, react, js code 
    but it doesnot understand redux code inside header component- useSelector
    we have to provide redux store to the header.
    just like we provide store to our whole application.
    
    again Link error comes because its not part of react. we have to provide router
    to this header.it doesnot have router right now.After giving browser router,
    the app will understand the link.
  */

  const loginButton = screen.getByRole("button", { name: "Login" });
  expect(loginButton).toBeInTheDocument();

})

test('should render header component with a Cart items as 0', () => {
    render(
      <BrowserRouter>
          <Provider store = {appStore}>
          <Header/>
          </Provider>
      </BrowserRouter>
    );

   // const cartItems = screen.getByText("Cart (0 items)");
   /* 
      we can pass regex over here also when using text to compare   
   */
    const cartItems = screen.getByText(/Cart/); 
    expect(cartItems).toBeInTheDocument();
  
})

test('should change Login Button to Logout on click', () => {
    render(
      <BrowserRouter>
          <Provider store = {appStore}>
          <Header/>
          </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"}); 
   
    /* use fireEvent to click button */
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "Logout"}); 

    expect(logoutButton).toBeInTheDocument();
  
})

