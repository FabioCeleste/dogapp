import { act, fireEvent, render, waitFor } from "@testing-library/react-native";
import { BreedDetailsHeader } from "..";
import React from "react";
import { setItemMock } from "../../../../jest/setup";

describe("Breed Details Header", () => {
  it("should render breed details header with retriever breed and 4 sub breeds", async () => {
    const { getByText, queryByTestId } = render(<BreedDetailsHeader />);

    await waitFor(() => expect(getByText("retriever")).toBeTruthy());

    const subBreedName = queryByTestId("subBreeds");

    expect(getByText("retriever")).toBeTruthy();

    expect(subBreedName?.children.length).toEqual(4);
  });

  it("should add breed to favorite when click in heart icon and remove after press again", async () => {
    const { getByText, getByTestId, queryByTestId } = render(
      <BreedDetailsHeader />
    );

    await waitFor(() => expect(getByText("retriever")).toBeTruthy());

    const favoriteButton = getByTestId("favoriteButton");

    fireEvent.press(favoriteButton);

    await waitFor(() => expect(getByTestId("heart")).toBeTruthy());

    fireEvent.press(favoriteButton);

    await waitFor(() => expect(queryByTestId("heart")).not.toBeTruthy());
  });
});
