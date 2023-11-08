import axios from 'axios';
import { parseCookies } from 'nookies';



export const getAllOrdersFromLocal = async () => {

const cookies = parseCookies();
const userId = cookies.userId;
const token = cookies.token;

  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/locals/${userId}`;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(apiUrl, config);
    return response.data

  } catch (error) {
    console.error('Error al hacer la solicitud:', error);
  }
};
