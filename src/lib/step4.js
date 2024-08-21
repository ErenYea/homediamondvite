import { api } from "./axiosClient";

export const submitStep4 = async (data) => {
  const url = "/step4";
  // throw Error("Ss");
  // console.log()
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
