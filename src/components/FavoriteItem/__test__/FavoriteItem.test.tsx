import { fireEvent, render, waitFor } from "@testing-library/react-native";
import { FavoriteItem } from "..";
import React from "react";
import { DogCeoApiInstance } from "../../../config/axiosClient";
import { mockNavigate } from "../../../../jest/setup";

describe("Favorite Item", () => {
  it("should render a list with akita head and 5 images", async () => {
    const { getByText, getByTestId } = render(
      <FavoriteItem breedName="akita" />
    );

    const flatList = getByTestId("flatList");

    expect(getByText("akita")).toBeTruthy();
    await waitFor(() => expect(flatList.props.data.length).toBe(5));
  });

  it("should remove favorite status when pressing the heart button and add back again when pressing the outline hear", async () => {
    const { getByText, getByTestId } = render(
      <FavoriteItem breedName="retriever" />
    );

    const flatList = getByTestId("flatList");
    const favoriteButtonView = getByTestId("favoriteButtonView");
    const heartOutline = getByTestId("heartOutline");

    await waitFor(() => expect(flatList.props.data.length).toBe(5));

    fireEvent.press(favoriteButtonView);

    await waitFor(() => expect(heartOutline).toBeTruthy());

    fireEvent.press(favoriteButtonView);

    await waitFor(() => expect(getByTestId("heart")).toBeTruthy());
  });

  it("should go to the details page when pressing a breed image", async () => {
    const { getAllByTestId, getByTestId } = render(
      <FavoriteItem breedName="retriever" />
    );

    const flatList = getByTestId("flatList");

    await waitFor(() => expect(flatList.props.data.length).toBe(5));

    const breedImgView = getAllByTestId("breedImgView");

    fireEvent.press(breedImgView[0]);

    await waitFor(() => {
      expect(mockNavigate).toBeCalledTimes(1);
    });
  });
});
