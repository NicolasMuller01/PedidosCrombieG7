import axios from "axios";
import { parseCookies } from "nookies";
import { toast } from "sonner";

export const getOrdersIdType = async (type: string) => {
  const cookies = parseCookies();
  const userId = cookies.userId;
  const token = cookies.token;

  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/orders/${userId}/${type}`;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };


  try {
    const response = await axios.get(apiUrl, { ...config});
    const arr = await response.data;
    return arr;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    throw error; 
  }
};
