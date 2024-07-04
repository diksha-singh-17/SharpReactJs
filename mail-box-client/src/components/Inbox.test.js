import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Inbox from "./Inbox";
import { MemoryRouter } from "react-router-dom";

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
    "-O0tKxTmSa4YdNKstik-": [
      {
        body: "testing mail-box1",
        email: "abc6@test.com",
        id: "abc6@test.com",
        newTime: "9:35:18 PM",
        read: false,
        subject: "testing all mails1",
      },
    ],
    "-O0tLn2f1GwQYyzklFEF": [
      {
        body: "testing mail-box2",
        email: "email8@test.com",
        id: "email8@test.com",
        newTime: "9:38:57 PM",
        read: false,
        subject: "testing all mails",
      },
    ],
  };

  fetch.mockImplementationOnce(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockData),
    })
  );

  render(
    <MemoryRouter>
      <Inbox />
    </MemoryRouter>
  );

  expect(screen.getByText("No mail available")).toBeInTheDocument();
  const message = await waitFor(() => screen.findByText("testing mail-box1"));
  const message1 = await waitFor(() => screen.findByText("testing mail-box2"));
  expect(message1).toBeInTheDocument();
  expect(message).toBeInTheDocument();
  expect(screen.getByText("testing all mails1")).toBeInTheDocument();
  expect(screen.getByText("testing all mails")).toBeInTheDocument();
});

test("handles fetch error", async () => {
  fetch.mockImplementationOnce(() => Promise.reject(new Error("API is down")));

  render(
    <MemoryRouter>
      <Inbox />
    </MemoryRouter>
  );

  const errorMessage = await waitFor(() =>
    screen.findByText("No mail available")
  );
  expect(errorMessage).toBeInTheDocument();
  expect(screen.queryByText("Test Subject")).not.toBeInTheDocument();
});
