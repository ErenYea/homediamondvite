import { api } from "./axiosClient";

export const submitStep2 = async (data) => {
  const url = "/step2";
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
