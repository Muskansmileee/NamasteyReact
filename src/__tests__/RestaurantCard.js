import { render, screen } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard";
import { withPromotedLabel } from "../components/RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import PROMOTED_MOCK_DATA from "../mocks/resCardPromotedMock.json"
import "@testing-library/jest-dom";

/* how to pass props and make mock data */
/* higher order component */

test("should render restaurant Card component with Props Data ", () => {
  render(<RestaurantCard restData = {MOCK_DATA}/>)

  const name = screen.getByText("Pizza Hut");
  expect(name).toBeInTheDocument();
})

test("should render restaurant Card component with Promoted label ", () => {
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    render(<RestaurantCardPromoted restData = {PROMOTED_MOCK_DATA}/>);
  
    const name = screen.getByText("Burger King");
    expect(name).toBeInTheDocument();
    
    const label = screen.getByText("Promoted");
    expect(label).toBeInTheDocument();
})


