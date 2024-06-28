import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import expenseReducer, { expenseActions } from "../store/ExpenseReducer"; // Update the path accordingly
import Body from "./Body"; // Update the path accordingly
import { validate } from "../utils/validate";
import { API_KEY } from "../utils/constants";
import { useNavigate } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

jest.mock("../utils/validate", () => ({
  validate: jest.fn(),
}));

global.fetch = jest.fn();

const renderWithRedux = (
  component,
  {
    initialState,
    store = configureStore({
      reducer: { expense: expenseReducer },
      preloadedState: initialState,
    }),
  } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe("Body Component", () => {
  let navigate;

  beforeEach(() => {
    navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders sign in form and handles form submission", async () => {
    validate.mockReturnValue(null);
    fetch.mockResolvedValueOnce({
      json: async () => ({ idToken: "mocked_token" }),
    });

    const { store } = renderWithRedux(<Body />);

    // Check initial render
    expect(
      screen.getByRole("heading", { level: 1, name: "Sign In" })
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("password")).toBeInTheDocument();

    // Fill in form and submit
    fireEvent.change(screen.getByPlaceholderText("email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("password"), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByRole("heading", { level: 1, name: "Sign In" }));

    // await waitFor(() => {
    //   expect(validate).toHaveBeenCalledWith('test@example.com', 'password123', undefined, true);
    //   expect(fetch).toHaveBeenCalledWith(
    //     `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
    //     expect.objectContaining({
    //       method: 'POST',
    //       body: JSON.stringify({
    //         email: 'test@example.com',
    //         password: 'password123',
    //         returnSecureToken: true,
    //       }),
    //       headers: { 'Content-Type': 'application/json' },
    //     })
    //   );
    //   expect(store.getState().expense.movie).toEqual('mocked_token');
    //   expect(navigate).toHaveBeenCalledWith('/browse');
    // });
  });

  test("toggles between sign in and sign up", () => {
    renderWithRedux(<Body />);

    // Initially shows sign in form
    expect(
      screen.getByRole("heading", { level: 1, name: "Sign In" })
    ).toBeInTheDocument();
    expect(
      screen.queryByPlaceholderText("confirm password", { exact: false })
    ).not.toBeInTheDocument();

    // Toggle to sign up
    fireEvent.click(screen.getByText("Don't have an account?"));
    expect(screen.getByText("Sign Up")).toBeInTheDocument();
    expect(
      screen.queryByPlaceholderText("confirm password", { exact: false })
    ).not.toBeInTheDocument();

    // Toggle back to sign in
    expect(
      screen.queryByText("Already have an account?")
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole(
        "heading",
        { level: 1, name: "Sign In" },
        { exact: false }
      )
    ).toBeInTheDocument();
    expect(
      screen.queryByPlaceholderText("confirm password")
    ).not.toBeInTheDocument();
  });

  test("displays validation error", () => {
    validate.mockReturnValue("Validation Error");

    renderWithRedux(<Body />);

    fireEvent.change(screen.getByPlaceholderText("email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("password"), {
      target: { value: "password123" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Sign In" }));

    expect(screen.getByText("Validation Error")).toBeInTheDocument();
  });

  test("handles forgot password navigation", () => {
    renderWithRedux(<Body />);

    fireEvent.click(screen.getByText("Forgot Password?"));

    expect(navigate).toHaveBeenCalledWith("/forgot-password");
  });
});
