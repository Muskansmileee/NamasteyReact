import Body from "../components/Body";
import { render, screen, fireEvent } from "@testing-library/react";
import MOCK_DATA from "../mocks/resList.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

/* Making changes to the global fetch function for jsdom for api call.
how to use 'act', 'browser router'.
how to give input value from 'firevent'.
This comes under integration testing where it involves changes in more than 1 component.
Here, body and restaurant card component involves changes.
 */

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("should render the Body component with Search button and search rest List for Milan", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  let cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(9);
  /* 
     error that fetch is not defined.
     fetch is given by browser. Not by react or js.
     jsdom is like browser but dont has fetch.
     we have to write mock fetch funtion.
    */

  /* 
     warning:  When testing, code that causes React state updates should be wrapped into act(...): 
      act(() => {
        fire events that update state 
      }
      act returns a promise and takes an async call back function which renders the component.
     */

  const searchBtn = screen.getByRole("button", { name: "Search" });
  expect(searchBtn).toBeInTheDocument();

  /* write something inside search box and click search */

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, {
    target: { value: "milan" },
  }); /* this object here is simulating what we get inside 'e' event in body component */

  fireEvent.click(searchBtn);

  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(1);
});

test("should filter top rated restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  let cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(9);

  const topRatedResButton = screen.getByText("Top Rated restaurants");
  expect(topRatedResButton).toBeInTheDocument();

  fireEvent.click(topRatedResButton);
  cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(4);

});
