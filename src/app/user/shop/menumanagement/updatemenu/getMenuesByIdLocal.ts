import { parseCookies } from "nookies";
import axios from "axios";

export const getMenusByIdLocal = async () => {
  try {
    const cookies = parseCookies();
    const userId = cookies.userId;
    const token = cookies.token;

    if (!token) {
      throw new Error("El token no está definido");
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.get(
      `https://pedidos-crombie-production.up.railway.app/locals/${userId}/menus`,
      { headers }
    );

    if (response.status === 200) {
      const menus = response.data;
      return menus;
    }
  } catch (error:any) {
    console.error("Error al obtener la dirección:", error.message);
    throw error;
  }
};

