import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json";
import ResCard, { enhancedResCard } from "../ResCard";
import "@testing-library/jest-dom";

it("Should render ResCard Component", () => {
  render(<ResCard resData={MOCK_DATA} />);

  const ItemCard = screen.getByText("Bansal Amritsari Kulcha");

  expect(ItemCard).toBeInTheDocument();
});

it("Should render EnhancedResCard Component", () => {
  const EnhancedResCard = enhancedResCard(ResCard);
  render(<EnhancedResCard resData={MOCK_DATA} />);

  const ItemCard = screen.getByText("30% OFF UPTO ₹75");

  expect(ItemCard).toBeInTheDocument();
});
