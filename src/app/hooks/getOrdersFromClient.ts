import axios from 'axios';
import { parseCookies } from 'nookies';



export const getOrdersFromClient = async () => {

const cookies = parseCookies();
const userId = cookies.userId;
const token = cookies.token;

  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/clients/${userId}`;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(apiUrl, config);
    if(response.status === 200) {
      return response.data;
    }
   

  } catch (error) {
    console.error('Error al hacer la solicitud:', error);
  }
};
