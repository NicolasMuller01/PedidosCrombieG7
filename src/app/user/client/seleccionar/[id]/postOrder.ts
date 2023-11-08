import { parseCookies, setCookie } from "nookies";

const cookies = parseCookies();
const token = cookies.token;

const axios = require("axios");

type DataBody = {
  clientId: string;
  restaurantId: string;
};

export const postOrder = async (bodyData: DataBody) => {
  
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/orders`,
      bodyData, 
      config
    );
    
    if (response) {
      return response.data.id
    } else {
      throw new Error(`Error en la respuesta del servidor: ${response.status}`);
    }
  } catch (error: any) {
    console.error("Error al obtener la dirección:", error.message);
    throw error;
  }
};
