import axios from 'axios';
import { parseCookies } from 'nookies';



export const getOrdersFromDeliveryFromUser  = async (name: string | null) => {

const cookies = parseCookies();
const userId = cookies.userId;
const token = cookies.token;


  try {
    
console.log(name);

    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/deliverys/${name}`;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(apiUrl, config);
    

    if(response.status === 200) {
      return response.data.profileReviews.id;
    }

  } catch (error) {
    console.error('Error al hacer la solicitud:', error);
  }
};




