import { api } from "./axiosClient";

export const submitStep3 = async (data) => {
  const url = "/step3";
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
