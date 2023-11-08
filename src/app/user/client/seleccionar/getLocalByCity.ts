import { parseCookies, setCookie } from "nookies";
import axios from "axios";



export const getLocalByCity = async ({ country, state, city } : {country: any, state: any, city: any}) => {

  const cookies = parseCookies();
const userId = cookies.userId;
const token = cookies.token;
  try {
    const headers = {
        Authorization: `Bearer ${token}`,
      };

    if (!userId) {
      throw new Error("userId is not defined");
    }

    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/locals/city`, {
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
