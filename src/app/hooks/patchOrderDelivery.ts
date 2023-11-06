import { parseCookies } from "nookies";
import axios from "axios";
import { Address } from "@/app/types/Address";
import { String } from "aws-sdk/clients/cloudhsm";


export const  patchOrderDelivery = async (idOrder: string, idRol: string) => {

  try {
    const cookies = parseCookies();
    const token = cookies.token;

    console.log(idRol);
    

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.patch(
      `https://pedidos-crombie-production.up.railway.app/orders/${idOrder}/delivery/${idRol}`,
      {},
      config
    );
    if (response.status === 200) { 
      return idRol;
      
    } 
  } catch (error: any) {
    console.error("Error al obtener la dirección:", error.message);
    throw error;
  }
};
