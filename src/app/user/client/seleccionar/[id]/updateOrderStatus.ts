import { parseCookies } from "nookies";
import axios from "axios";


type typeStatus = 
  | 'WAITING'      
  | 'SEND'         
  | 'CANCELLED' 
  | 'ACCEPTED'    
  | 'DELIVERED'  
  | 'RECEIVED'

export const updateOrderStatus = async (id: string, statusValue: typeStatus) => {

  try {
    const cookies = parseCookies();
    const token = cookies.token;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/orders/${id}/status`,
      {status: statusValue},
      {
        headers: config.headers,
      }
    );
    if (response.status === 200) {

      return statusValue; 
    }
  } catch (error: any) {
    console.error("Error al obtener la dirección:", error.message);
    throw error;
  }
};
