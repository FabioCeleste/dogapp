import { listAllBreedsRes } from "../types/services";
import { DogCeoApiInstance, axiosRequest } from "../config/axiosClient";

export const listAllBreeds = async (): Promise<listAllBreedsRes> => {
  try {
    const res = await axiosRequest(
      DogCeoApiInstance,
      "breeds/list/all",
      undefined,
      undefined,
      undefined
    );

    return res as listAllBreedsRes;
  } catch (error) {
    console.log(error);

    return { message: {} };
  }
};
