import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "../App";

test("displays application title", () => {
  const { queryByText } = render(<App />);
  const title = queryByText(/Fibonacci calculator/i);
  expect(title).toBeInTheDocument();
});

test("check final of the description", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/starting with 0 and 1/i);
  expect(linkElement).toBeInTheDocument();
});

test("when input is negative then display error", () => {
  const { queryByText, getByLabelText } = render(<App />);

  const input = getByLabelText("fib-input");
  fireEvent.change(input, { target: { value: "-1" } });

  const button = getByLabelText(/calculate/i);
  fireEvent.click(button);

  const error = queryByText(
    /ERROR: Number must be positive between 0 and 1000/i
  );
  expect(error).toBeInTheDocument();
});

test("not displays error when enter in the app", () => {
  const { queryByText } = render(<App />);
  const error = queryByText(
    /ERROR: Number must be positive between 0 and 1000/i
  );
  expect(error).not.toBeInTheDocument();
});

test("not displays result when enter in the app", () => {
  const { queryByLabelText } = render(<App />);
  const result = queryByLabelText(/result/i);
  expect(result).not.toBeInTheDocument();
});

test("when input is positive then display the fibonacci result", () => {
  const { queryByLabelText } = render(<App />);

  const input = queryByLabelText("fib-input");
  fireEvent.change(input, { target: { value: "1" } });

  const button = queryByLabelText(/calculate/i);
  fireEvent.click(button);

  const result = queryByLabelText(/result/i);
  expect(result).toBeInTheDocument();
});

test("when input a number higher than 1000 display error", () => {
  const { queryByText, queryByLabelText } = render(<App />);

  const input = queryByLabelText("fib-input");
  fireEvent.change(input, { target: { value: "1001" } });

  const button = queryByLabelText(/calculate/i);
  fireEvent.click(button);

  const error = queryByText(
    /ERROR: Number must be positive between 0 and 1000/i
  );
  expect(error).toBeInTheDocument();
});
