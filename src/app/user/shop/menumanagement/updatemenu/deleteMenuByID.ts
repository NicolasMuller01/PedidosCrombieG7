import { parseCookies } from "nookies";
import axios from "axios";

export const deleteMenuById = async (idMenu: string) => {
  try {

    const cookies = parseCookies();
    const token = cookies.token;

    if (!token) {
      throw new Error("El token no está definido");
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.delete(
      `https://pedidos-crombie-production.up.railway.app/eatables/${idMenu}`,
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