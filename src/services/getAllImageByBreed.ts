import {
  getAllImageByBreedRes,
  getRandomImageByBreedRes,
} from "../types/services";
import { DogCeoApiInstance, axiosRequest } from "../config/axiosClient";

export const getAllImageByBreed = async (
  breed: string
): Promise<getAllImageByBreedRes> => {
  try {
    const res = await axiosRequest(
      DogCeoApiInstance,
      `breed/${breed}/images`,
      undefined,
      undefined,
      undefined
    );

    return res as getAllImageByBreedRes;
  } catch (error) {
    console.log(error);

    return { message: [], status: "" };
  }
};
