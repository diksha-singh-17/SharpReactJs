import { fireEvent, render, screen } from "@testing-library/react";
import SignUp from "./SignUp";

describe("test sign-up page", () => {
  test("email placeholder is there", () => {
    render(<SignUp />);
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  });

  test("button is working", () => {
    render(<SignUp />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  test("signup text is there", () => {
    render(<SignUp />);
    expect(
      screen.getByRole("heading", { level: 1, text: "Sign Up" })
    ).toBeInTheDocument();
  });
  test("on empty submission of form 'getting error message'", () => {
    // console.log = jest.fn();
    render(<SignUp />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    const errorText = screen.getByText("Email is empty");
    expect(errorText).toBeInTheDocument();
    // expect(console.log).toHaveBeenCalledWith("successfully signed up!!");
  });
  test("className is present", () => {
    render(<SignUp />);
    const inputBox = screen.getByPlaceholderText("Confirm Password");
    expect(inputBox).toHaveClass("mb-3 rounded");
  });
});
