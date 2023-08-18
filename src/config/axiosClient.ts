import axios, { AxiosInstance, Method } from "axios";

import { DOGCEO_API_URL } from "./env";

export const DogCeoApiInstance = axios.create({
  baseURL: DOGCEO_API_URL,
});

export const axiosRequest = async (
  instance: AxiosInstance,
  url: string,
  method?: Method,
  data?: any,
  headers?: any,
  params?: any
) => {
  try {
    const response = await instance.request({
      method: method || "GET",
      url,
      data,
      headers,
      timeout: 15000,
      params,
    });
    return response.data;
  } catch (error: any) {
    console.error(
      `[${method || "GET"}] ${instance.getUri() + url}`,
      data,
      headers,
      error,
      typeof error?.response?.data === "string" &&
        error?.response?.data?.includes("html")
        ? "[HTML ERROR RESPONSE]"
        : error?.response?.data
    );
    return error?.response?.data || null;
  }
};
