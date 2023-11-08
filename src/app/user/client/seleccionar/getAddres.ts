import { parseCookies, setCookie } from "nookies";
import axios from "axios";


export const getAddress = async () => {

  const cookies = parseCookies();
  const userId = cookies.userId;
  const token = cookies.token;

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/clients/${userId}`,
      config
    );

    if (response.status === 200) {
      const address = response.data;
      return address;
    }
  } catch (error: any) {
    console.error("Error al obtener la dirección:", error.message);
    throw error;
  }
};
