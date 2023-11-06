import { parseCookies } from "nookies";
import axios from "axios";
import { Address } from "@/app/types/Address";

type DataBody = {
  clientId: string;
  restaurantId: string;
};

type Eatable = {
  idEatable: string;
  title: string;
  description: string;
  photo: string;
  price: number;
  name: string;
  menuType: string;
  quantity?: number;
};

export const  patchAddressIntoOrder = async (id: string, address: Address) => {

  try {
    const cookies = parseCookies();
    const token = cookies.token;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.patch(
      `https://pedidos-crombie-production.up.railway.app/orders/${id}/address`,
      address,
      {
        headers: config.headers,
      }
    );
    if (response.status === 200) { 
      return address;
      
    } 
  } catch (error: any) {
    console.error("Error al obtener la dirección:", error.message);
    throw error;
  }
};
