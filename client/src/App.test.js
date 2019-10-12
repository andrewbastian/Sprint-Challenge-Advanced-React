import React from "react";
// no default export, so we're importing everyting from this library
import * as rtl from "@testing-library/react";
// not importing to a variable, since this just overrides jest global variables
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import PlayerCard from "./Components/PlayerCard.js"
// this just allows react-testing-library to do some
// routine cleanup after each test runs (to reset the DOM and such)
afterEach(rtl.cleanup);

test("Render the heading", () => {
  // render our React app into an in-memory DOM so we can test against it
  const wrapper = rtl.render(<App />);

  // element is now our dom element that we can test against
  const element = wrapper.getByText(/player tracker/i);

  // test will fail if element is not visible to our robot eyes
  expect(element).toBeVisible();
});

test("PlayerCard Renders", () => {
  const wrapper = rtl.render(<PlayerCard />);
  const element = wrapper.getByText(/searches/i);
  expect(element).toBeVisible();
});
