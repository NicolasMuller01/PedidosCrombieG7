import axios from "axios";
import { parseCookies } from "nookies";
import { toast } from "sonner";

export const getOrdersFromCity = async (state, city) => {

  const cookies = parseCookies();
  const userId = cookies.userId;
  const token = cookies.token;
  const country = "Argentina"

  

  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/orders/accepted`;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const params = {
    country, 
    state,
    city,
  };

  try {
    const response = await axios.get(apiUrl, { ...config, params });
    const arr = response.data;
    return arr;
  } catch (error: any) {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Error response", error.response.data);
        console.error("Error response status", error.response.status);
        console.error("Error response headers", error.response.headers);
    } else if (error.request) {
        // The request was made but no response was received
        console.error("Error request", error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error", error.message);
    }
    console.error("Error config", error.config);
    throw error; 
}

};
