import { act, fireEvent, render, waitFor } from "@testing-library/react-native";
import { BreedHomeItem } from "..";
import React from "react";
import { DogCeoApiInstance } from "../../../config/axiosClient";
import { mockBreedImage } from "./mocks";
import { SubBreedName } from "../styles";
import { mockNavigate } from "../../../../jest/setup";

describe("Breed Home Item", () => {
  jest
    .spyOn(DogCeoApiInstance, "request")
    .mockImplementation(() => Promise.resolve({ data: mockBreedImage }));

  it("should render the Breed Home Item with the retriever breed without sub breed", async () => {
    const { getByText, queryByTestId } = render(
      <BreedHomeItem breed="retriever" searchInput="" subBreed={[]} />
    );

    await waitFor(() => expect(getByText("retriever")).toBeTruthy());

    expect(getByText("retriever")).toBeTruthy();
    expect(queryByTestId("subBreedName")).not.toBeTruthy();
  });

  it("should render the Breed Home Item with the retriever breed with 4 sub breed", async () => {
    const { getByText, queryByTestId } = render(
      <BreedHomeItem
        breed="retriever"
        searchInput=""
        subBreed={["chesapeake", "curly", "flatcoated", "golden"]}
      />
    );

    await waitFor(() => expect(getByText("retriever")).toBeTruthy());

    const subBreedName = queryByTestId("subBreedName");

    expect(subBreedName?.children.length).toEqual(4);

    expect(subBreedName).toBeTruthy();
  });

  it("should go to breed details when held down", async () => {
    const { getByText, getByTestId } = render(
      <BreedHomeItem
        breed="retriever"
        searchInput=""
        subBreed={["chesapeake", "curly", "flatcoated", "golden"]}
      />
    );

    await waitFor(() => expect(getByText("retriever")).toBeTruthy());

    const container = getByTestId("container");

    fireEvent.press(container);

    expect(mockNavigate).toBeCalledTimes(1);
  });
});
