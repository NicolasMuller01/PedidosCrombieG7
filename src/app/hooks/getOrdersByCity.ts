import axios from "axios";
import { parseCookies } from "nookies";
import { toast } from "sonner";

export const getOrdersFromCity = async (state, city) => {
  const cookies = parseCookies();
  const userId = cookies.userId;
  const token = cookies.token;
  const country = "Argentina"

  const apiUrl = `https://pedidos-crombie-production.up.railway.app/orders/accepted`;

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
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    throw error; 
  }
};
