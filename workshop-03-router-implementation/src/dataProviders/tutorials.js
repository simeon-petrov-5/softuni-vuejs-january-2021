import { setupAxios } from "@/utils/axiosUtils.js";

const axios = setupAxios();
const API_ENDPOINT = "tutorials";

export async function fetchAllTutorials() {
  try {
    const res = await axios.get(API_ENDPOINT);
    return res.data;
  } catch (error) {
    console.error("Unexpectedc error!", error);
    return [];
  }
}

export async function fetchAllTutorialsByTechnology(technology) {
  try {
    const res = await axios.get(API_ENDPOINT, {
      params: {
        technology,
      },
    });
    return res.data;
  } catch (error) {
    console.error("Unexpectedc error!", error);
    return [];
  }
}

export async function fetchSingleTutorial(id) {
  try {
    const res = await axios.get(`${API_ENDPOINT}/${id}`);
    return res.data;
  } catch (error) {
    console.error("Unexpectedc error!", error);
    return [];
  }
}

export async function createTutorial(newTutorial) {
  try {
    const res = await axios.post(API_ENDPOINT, newTutorial);
    return res.data;
  } catch (error) {
    console.error("Unexpectedc error!", error);
    return [];
  }
}
