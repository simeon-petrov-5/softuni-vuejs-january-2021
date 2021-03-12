import { setupAxios } from "@/utils/axiosUtils.js";

const axios = setupAxios();
const API_ENDPOINT = "user";

export async function loginUser(loginData) {
  try {
    await axios.post(`${API_ENDPOINT}/login`, loginData, {
      withCredentials: true,
    });
    return true;
  } catch (error) {
    console.error("Unexpectedc error!", error);
    return false;
  }
}

export async function registerUser(email, password) {
  const body = { email, password };
  try {
    await axios.post(`${API_ENDPOINT}/register`, body, {
      withCredentials: true,
    });
    return true;
  } catch (error) {
    console.error("Unexpectedc error!", error);
    return false;
  }
}

export async function fetchUserProfile() {
  try {
    const res = await axios.get("auth", { withCredentials: true });
    return res.data;
  } catch (error) {
    console.error("Unexpectedc error!", error);
    return null;
  }
}
