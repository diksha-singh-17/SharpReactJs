import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Inbox from "./Inbox";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import MessageDetails from "./Message";

// Mocking the global fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

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

const MockMessage = () => <MessageDetails id="test-id" />;
const MockCompose = () => <div>Compose Component</div>;
test("fetches and displays message", async () => {
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
test("deletes a mail item", async () => {
  fetch.mockImplementationOnce(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockData),
    })
  );
  const consoleLogSpy = jest.spyOn(console, "log").mockImplementation(() => {});

  render(
    <MemoryRouter>
      <Inbox />
    </MemoryRouter>
  );

  // Wait for the emails to be loaded
  await waitFor(() => {
    expect(screen.getByText("testing mail-box1")).toBeInTheDocument();
  });

  // Mock the delete fetch call
  fetch.mockImplementationOnce(() => Promise.resolve({}));

  // Click the delete button for the first email
  const deleteButtons = screen.getAllByText("Delete");
  fireEvent.click(deleteButtons[0]);

  expect(consoleLogSpy).toHaveBeenCalledWith("successfully deleted mail!!");
});
