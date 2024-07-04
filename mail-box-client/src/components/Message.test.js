import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Message from "./Message";

// Mocking the global fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

test("fetches and displays message", async () => {
  const mockData = {
    body: "This is a test message body",
    email: "test@example.com",
    id: "test-id",
    newTime: "10:00 AM",
    read: false,
    subject: "Test Subject",
  };

  fetch.mockImplementationOnce(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockData),
    })
  );

  render(<Message id="test-id" />);

  expect(screen.getByText("Loading...")).toBeInTheDocument();

  const textFiled = await waitFor(() => screen.findByText("Test Subject"));
  expect(textFiled).toBeInTheDocument();
  expect(screen.getByText("This is a test message body")).toBeInTheDocument();
});

test("handles fetch error", async () => {
  fetch.mockImplementationOnce(() => Promise.reject(new Error("API is down")));

  render(<Message id="test-id" />);

  const errorMessage = await waitFor(() => screen.findByText("Loading..."));
  expect(errorMessage).toBeInTheDocument();
  expect(screen.queryByText("Test Subject")).not.toBeInTheDocument();
});
