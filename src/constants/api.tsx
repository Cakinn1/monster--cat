import axios from "axios";

const baseURL = "https://deezerdevs-deezer.p.rapidapi.com";
const infosEndpoint = "/search"; // Endpoint for getting information
const apiKey = process.env.REACT_APP_API_KEY;

const headers = {
  "X-RapidAPI-Key": apiKey,
  "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
};

export async function fetchDataByQuery(query: string) {
  try {
    const { data } = await axios.get(`${baseURL + infosEndpoint}`, {
      params: { q: query },
      headers,
    });
    return data.data
  } catch (error) {
    throw error;
  }
}
