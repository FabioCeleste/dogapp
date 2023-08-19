import { getRandomImageByBreedRes } from "../types/services";
import { DogCeoApiInstance, axiosRequest } from "../config/axiosClient";

export const getRandomImageByBreed = async (
  breed: string
): Promise<getRandomImageByBreedRes> => {
  try {
    const res = await axiosRequest(
      DogCeoApiInstance,
      `breed/${breed}/images/random`,
      undefined,
      undefined,
      undefined
    );

    return res as getRandomImageByBreedRes;
  } catch (error) {
    console.log(error);

    return { message: "", status: "" };
  }
};
