import { parseCookies, setCookie } from "nookies";

const cookies = parseCookies();
const token = cookies.token;

const axios = require("axios");

export const getEatablesById = async (id: string) => {
  try {

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/locals/${id}/menus`,
      config
    );

    if (response.status === 200) {
      const eatables = response.data;
      return eatables;
    }
  } catch (error: any) {
    console.error("Error al obtener la dirección:", error.message);
    throw error;
  }
};
