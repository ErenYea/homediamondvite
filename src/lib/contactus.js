import { api } from "./axiosClient";

export const submitContactUs = async (data) => {
  const url = "/contact-us";
  try {
    const response = await api.post(url, data);
    return response;
  } catch (error) {
    throw error;
  }
};
