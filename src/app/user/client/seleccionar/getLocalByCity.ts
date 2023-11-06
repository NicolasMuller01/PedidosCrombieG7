import { parseCookies, setCookie } from "nookies";
import axios from "axios";

const cookies = parseCookies();
const userId = cookies.userId;
const token = cookies.token;

export const getLocalByCity = async ({ country, state, city }) => {
  try {
    const headers = {
        Authorization: `Bearer ${token}`,
      };

    if (!userId) {
      throw new Error("userId is not defined");
    }

    const response = await axios.get('https://pedidos-crombie-production.up.railway.app/locals/city', {
      params: {
        country,
        state,
        city,
      },
      headers,
    });
    return response.data;
  } catch (error) {
    console.error('Error while making the request:', error);
  }
};
