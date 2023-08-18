import { DogCeoApiInstance, axiosRequest } from "../config/axiosClient";

export const listAllBreeds = async () => {
  try {
    const res = await axiosRequest(
      DogCeoApiInstance,
      "breeds/list/all",
      undefined,
      undefined,
      undefined
    );

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
