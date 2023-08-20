import { render, waitFor } from "@testing-library/react-native";
import { ListBreedImagesDetails } from "..";
import { imgs } from "./mocks";
import React from "react";

describe("ListBreed Images Details", () => {
  it("should render a list of breed images with 6 items", async () => {
    const { getByTestId, getByText } = render(
      <ListBreedImagesDetails imgsUrls={imgs} />
    );

    await waitFor(() => expect(getByText("retriever")).toBeTruthy());

    const flatList = getByTestId("flatList");

    expect(flatList.props.data.length).toBe(5);
  });
});
