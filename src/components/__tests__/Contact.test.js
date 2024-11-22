import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Pages Test Cases", () => {
  it("Should load contact us page", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("should have a submit button", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  it("Should have placeholder with the name", () => {
    render(<Contact />);
    const placeholder = screen.getByPlaceholderText("Email");

    //Assertion
    expect(placeholder).toBeInTheDocument();
  });

  test("should have 3 input boxes", () => {
    render(<Contact />);

    const input = screen.getAllByRole("textbox");

    //Assertion
    expect(input.length).toBe(3);
  });
});
