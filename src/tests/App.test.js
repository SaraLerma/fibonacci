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

test("when input is negative then display error", () => {
  const { queryByText, getByLabelText } = render(<App />);

  const input = getByLabelText('fib-input')
  fireEvent.change(input, { target: { value: '-1' } })
  
  const button = getByLabelText(/calculate/i);
  fireEvent.click(button);  
  
  const error = queryByText(/ERROR: Number must be positive between 0 and 1000/i)
  expect(error).toBeInTheDocument()
});

test("not displays error when enter in the app", () => {
  const { queryByText } = render(<App />); 
  const error = queryByText(/ERROR: Number must be positive between 0 and 1000/i);
  expect(error).not.toBeInTheDocument();
});

test("not displays result when enter in the app", () => {
  const { queryByLabelText } = render(<App />); 
  const result = queryByLabelText(/result/i);
  expect(result).not.toBeInTheDocument();
});