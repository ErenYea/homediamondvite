import { api } from "./axiosClient";

export const submitStep1 = async (data) => {
  const url = "/step1";
  try {
    const response = await api.post(url, data);
    if (response.status == 200) {
      return response.data;
    }
    return response.status;
  } catch (error) {
    throw error;
  }
};
