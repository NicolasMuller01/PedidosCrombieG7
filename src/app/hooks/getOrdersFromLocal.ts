import axios from 'axios';
import { parseCookies } from 'nookies';



export const getOrdersFromLocal = async () => {

const cookies = parseCookies();
const userId = cookies.userId;
const token = cookies.token;

  try {
    const apiUrl = `https://pedidos-crombie-production.up.railway.app/locals/${userId}`;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(apiUrl, config);
    const arr = await response.data.ordersHistory;
    const values = await arr.filter((item) => item.status === 'SEND');
    return values

  } catch (error) {
    console.error('Error al hacer la solicitud:', error);
  }
};
