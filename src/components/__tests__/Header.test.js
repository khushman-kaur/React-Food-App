import Header from "../Header";
import { Provider } from "react-redux";
import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load my Header Component with Login Button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginBtn = screen.getByRole("button", { name: "Login" });
  //Assertion
  expect(loginBtn).toBeInTheDocument();
});

it("Should render  Header Component with cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cart = screen.getByText(/Cart/);
  //Assertion
  expect(cart).toBeInTheDocument();
});

it("Should change the Login Button to Logout on click ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginBtn = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginBtn);

  const logOutBtn = screen.getByRole("button", { name: "Logout" });
  //Assertion
  expect(logOutBtn).toBeInTheDocument();
});
