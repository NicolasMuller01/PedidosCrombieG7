import { parseCookies, setCookie } from "nookies";

const cookies = parseCookies();
const userId = cookies.userId;
const token = cookies.token;

const axios = require("axios");

export const getAddress = async () => {
  try {
    if (!userId) {
      throw new Error("userId no está definido");
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(
      `https://pedidos-crombie-production.up.railway.app/clients/${userId}`,
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
