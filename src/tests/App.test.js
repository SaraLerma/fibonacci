import React from "react";
import { render, fireEvent} from "@testing-library/react";
import App from "../App";

test("check is found title", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Fibonacci calculator/i);
  expect(linkElement).toBeInTheDocument();
});

test("check is part of the description", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/starting with 0 and 1/i);
  expect(linkElement).toBeInTheDocument();
});

/*test("check that works Github anchor", () => {
  const { getByText } = render(<App />);
  const gitBtn = getByText(/GitHub/i);
  fireEvent.click(gitBtn); 
});*/

test("execute fibonacci", () => {
  const { getByText, getByLabelText } = render(<App />);
  //text -1 in the input
  const input = getByLabelText('fib-input');
  fireEvent.change(input, { target: { value: '-1' } });//lanzar un evento

  //button click
  const button = getByText(/Calculate/i);
  fireEvent.click(button);  

  //display error text?
  const error = getByText(/ERROR: Enter a positive number/i);
  expect(error).toBeInTheDocument();
});

