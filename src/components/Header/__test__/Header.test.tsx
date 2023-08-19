import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Header } from "../index";
import { mockGoBack } from "../../../../jest/setup";

describe("Header", () => {
  describe("render header with route name", () => {
    it("show the header with Home name", () => {
      const { getByText } = render(<Header />);

      expect(getByText("Home")).toBeTruthy();
    });

    it("if have a route to go back, the app should return when pressing the back button", () => {
      const { getByTestId } = render(<Header />);

      const backButton = getByTestId("backButton");

      fireEvent.press(backButton);
      fireEvent.press(backButton);

      expect(mockGoBack).toBeCalledTimes(1);
    });
  });
});
