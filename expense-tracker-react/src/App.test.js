import { render, screen } from "@testing-library/react";
import CheckPremium from "./components/CheckPremium";
import ForgotPassword from "./components/ForgotPassword";
import { MemoryRouter } from "react-router-dom";

test("renders learn react link", () => {
  render(<CheckPremium />);
  const linkElement = screen.getByText("Premium");
  expect(linkElement).toBeInTheDocument();
});
test('check " Enter the Email with which you have registered." is present', () => {
  render(
    <MemoryRouter>
      <ForgotPassword />
    </MemoryRouter>
  );
  const linkElement = screen.getByPlaceholderText("email");
  expect(linkElement).toBeInTheDocument();
});

test('check "loader" is present', () => {
  render(
    <MemoryRouter>
      <ForgotPassword />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(
    "Enter the Email with which you have registered."
  );
  expect(linkElement).toBeInTheDocument();
});

test('check "button" is present', () => {
  render(
    <MemoryRouter>
      <ForgotPassword />
    </MemoryRouter>
  );
  const linkElement = screen.getByRole("button");
  expect(linkElement).toBeInTheDocument();
});

test('check "loading... is present', () => {
  render(
    <MemoryRouter>
      <ForgotPassword />
    </MemoryRouter>
  );
  const linkElement = screen.getByRole("button");
  expect(linkElement).toBeInTheDocument();
});

test('check "login link" is present', () => {
  render(
    <MemoryRouter>
      <ForgotPassword />
    </MemoryRouter>
  );
  const linkElement = screen.getByText("Login");
  expect(linkElement).toBeInTheDocument();
});
test('check "send link" is present', () => {
  render(
    <MemoryRouter>
      <ForgotPassword />
    </MemoryRouter>
  );
  const linkElement = screen.getByText("Send Link");

  expect(linkElement).toBeInTheDocument();
});

test('check "Daily Expense text" is present', () => {
  render(
    <MemoryRouter>
      <ForgotPassword />
    </MemoryRouter>
  );
  const linkElement = screen.getByText("Already a user?", { exact: false });

  expect(linkElement).toBeInTheDocument();
});

test("renders 'button role' link", () => {
  render(<CheckPremium />);
  const linkElement = screen.getByRole("button");
  expect(linkElement).toBeInTheDocument();
});
test("check 'text Premiums' is not there", () => {
  render(<CheckPremium />);
  const linkElement = screen.queryByText("Premiums");
  expect(linkElement).not.toBeInTheDocument();
});
