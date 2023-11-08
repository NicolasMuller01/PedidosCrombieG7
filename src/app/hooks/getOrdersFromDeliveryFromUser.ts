import axios from 'axios';
import { parseCookies } from 'nookies';



export const getOrdersFromDeliveryFromUser  = async (rol: string ,name: string) => {

const cookies = parseCookies();
const userId = cookies.userId;
const token = cookies.token;

  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/deliverys/${userId}`;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(apiUrl, config);
    
    console.log(response.data);
    

    if(response.status === 200) {
      return response.data.ordersHistory;
    }

  } catch (error) {
    console.error('Error al hacer la solicitud:', error);
  }
};




