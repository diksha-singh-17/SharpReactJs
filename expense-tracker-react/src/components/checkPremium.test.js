import { render, screen } from "@testing-library/react";
import CheckPremium from "./CheckPremium";

test("check 'text Premiums' is not there", () => {
  render(<CheckPremium />);
  const linkElement = screen.queryByText("Premiums");
  expect(linkElement).not.toBeInTheDocument();
});
