import { parseCookies } from "nookies";
import axios from "axios";

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

export const patchOrder = async (id: string, eatables: Eatable) => {

  try {
    const cookies = parseCookies();
    const token = cookies.token;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.patch(
      `https://pedidos-crombie-production.up.railway.app/orders/${id}/eatable`,
      null,
      {
        headers: config.headers,
        params: { idEatable: eatables.idEatable },
      }
    );
    if (response.status === 200) {
      return eatables;
      
    } else {
      throw new Error(`Error en la respuesta del servidor para el eatable ${eatables.idEatable}: ${response.status}`);
    }
  } catch (error: any) {
    console.error("Error al obtener la dirección:", error.message);
    throw error;
  }
};
