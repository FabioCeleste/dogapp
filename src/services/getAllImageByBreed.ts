import {
  getAllImageByBreedRes,
  getRandomImageByBreedRes,
  listAllSubBreedRes,
} from "../types/services";
import { DogCeoApiInstance, axiosRequest } from "../config/axiosClient";

export const getAllImageByBreed = async (
  breed: string
): Promise<listAllSubBreedRes> => {
  try {
    const res = await axiosRequest(
      DogCeoApiInstance,
      `breed/${breed}/images`,
      undefined,
      undefined,
      undefined
    );

    return res as listAllSubBreedRes;
  } catch (error) {
    console.log(error);

    return { message: [], status: "" };
  }
};
