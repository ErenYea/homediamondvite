import { api } from "./axiosClient";

export const submitremovedata = async (data) => {
  const url = "/removedata";
  try {
    const response = await api.post(url, data);
    return response;
  } catch (error) {
    throw error;
  }
};
