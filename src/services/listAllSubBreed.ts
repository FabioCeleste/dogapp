import { listAllSubBreedRes } from "../types/services";
import { DogCeoApiInstance, axiosRequest } from "../config/axiosClient";

export const listAllSubBreed = async (
  breed: string
): Promise<listAllSubBreedRes> => {
  try {
    const res = await axiosRequest(
      DogCeoApiInstance,
      `breed/${breed}/list`,
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
