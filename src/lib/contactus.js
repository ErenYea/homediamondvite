import { api } from "./axiosClient";

export const submitContactUs = async (data) => {
  const url = "/contact";
  try {
    const senddata = {
      email_from: data.email,
      subject: "Email from " + data.name,
      body: data.message,
    };
    const response = await api.post(url, senddata);
    return response;
  } catch (error) {
    throw error;
  }
};
