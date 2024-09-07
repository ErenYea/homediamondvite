import { api } from "./axiosClient";

export const companyData = async (name) => {
    const url = "/getCompany";
    const data = {
        name:name
    }
  try {
    const response = await api.post(url, data);
    if (response.status == 200) {
        const responsedata = JSON.parse(response.data.data)
        console.log(responsedata)
      return responsedata;
    }
    return response.status;
  } catch (error) {
    throw error;
  }
}