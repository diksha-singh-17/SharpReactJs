import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import SignIn from "./SignIn";
import { MemoryRouter } from "react-router-dom";

describe("test cases for signIn page", () => {
  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: {
        setItem: jest.fn(),
        getItem: jest.fn(),
        removeItem: jest.fn(),
        clear: jest.fn(),
      },
      writable: true,
    });
  });
  test("email placeholder is there", () => {
    render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  });

  test("button is working", () => {
    render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  test("signup text is there", () => {
    render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );
    expect(
      screen.getByRole("heading", { level: 1, text: "Sign Up" })
    ).toBeInTheDocument();
  });
  test("on empty submission of form 'getting error message'", () => {
    // console.log = jest.fn();
    render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    const errorText = screen.getByText("Email is empty");
    expect(errorText).toBeInTheDocument();
    // expect(console.log).toHaveBeenCalledWith("successfully signed up!!");
  });
  test("className is present", () => {
    render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );
    const inputBox = screen.getByPlaceholderText("Password");
    expect(inputBox).toHaveClass("mb-3 rounded");
  });

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ data: "response data" }),
    })
  );
  test("checking for succesfull signin", async () => {
    console.log = jest.fn();
    render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );

    const inputElement = screen.getByPlaceholderText("Email");
    fireEvent.change(inputElement, { target: { value: "test1234@test.com" } });
    const passwordElement = screen.getByPlaceholderText("Password");
    fireEvent.change(passwordElement, { target: { value: "Test@1234" } });
    expect(inputElement.value).toBe("test1234@test.com");
    const button = screen.getByRole("button");
    fireEvent.click(button);
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAo7xmAFa3rvDjDEFnZ9VoSTT1Kb7hfK6I",
        expect.objectContaining({
          method: "POST",
          body: JSON.stringify({
            email: "test1234@test.com",
            password: "Test@1234",
            returnSecureToken: true,
          }),
        })
      );
    });
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "mail_token",
      "mockToken"
    );

    // expect(console.log).toHaveBeenCalledWith("successfully signed in!!");
  });
});
