import { parseCookies } from "nookies";
import axios from "axios";

export const  postReviews = async (idRol: any, information: any) => {

  try {
    const cookies = parseCookies();
    const token = cookies.token;
    const userId = cookies.userId;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const params = {
        idClient: userId,
        idUser: idRol,
      };
      
      const path = `${process.env.NEXT_PUBLIC_API_URL}/reviews/${params.idClient}/${params.idUser}`;
      
      const response = await axios.post(path, { information }, config);
      
      if (response.status === 200) {
        console.log(response.status);
        
        return response.status;
      }
  } catch (error: any) {
    console.error("Error al obtener la dirección:", error.message);
    throw error;
  }
};
