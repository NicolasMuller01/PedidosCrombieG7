"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getEatablesById } from "./getEatablesById";
import { parseCookies } from "nookies";
import { postOrder } from "./postOrder";
import { patchOrder } from "./patchOrder";
import { updateOrderStatus } from "./updateOrderStatus";
import { toast } from "sonner";
import { getAddress } from "../getAddres";
import { patchAddressIntoOrder } from "./patchAddressIntoOrder";

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

export default function () {
  const cookies = parseCookies();
  const nombreRestaurante = cookies.localName;
  const idRol = cookies.idRol;
  const router = useRouter()

  const id = useParams().id;
  const [eatables, setEatables] = useState<Eatable[]>();

  const [addedEatables, setAddedEatables] = useState<Eatable[]>([]);

  const [total, setTotal] = useState<Number>();

  const [modalVisible, setModalVisible] = useState(false);

  const showModal = async () => {
    setModalVisible(true);
    const resp = await handleOrderData();

    if (addedEatables) {
      for (let i = 0; i < addedEatables.length; i++) {
        const eatable = addedEatables[i];

        setTimeout(async () => {

          try {      

            const response = await patchOrder(resp, eatable);
          } catch (error) {
            console.error("Error al parchear el eatable:", error);
          }

        }, i * 5000); 
      }
    }

    const clientAddress = await getAddress()
    
    patchAddressIntoOrder(resp, clientAddress.address)

    const updateOrderStatusConst = await updateOrderStatus(resp, 'SEND')
    
    if(!updateOrderStatusConst){
      toast.success("Orden enviada con exito")
      router.push("/user/stagepedido")
    }


  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eatable = await getEatablesById(id.toString());
        setEatables(eatable);
      } catch (error: any) {
        console.error("Error al obtener la dirección:", error.message);
      }
    };
    fetchData();
  }, []);

  const addEatable = (eatable: Eatable) => {
    const updatedEatables = [...addedEatables];
    const existingEatable = updatedEatables.find(
      (item) => item.idEatable === eatable.idEatable
    );

    if (existingEatable) {
      existingEatable.quantity = (existingEatable.quantity || 1) + 1;
    } else {
      eatable.quantity = 1;
      updatedEatables.push(eatable);
    }
    setAddedEatables(updatedEatables);

  };

  useEffect(() => {
    const newTotal = addedEatables.reduce((acc, element) => {
      return acc + element.price * (element.quantity || 1);
    }, 0);

    setTotal(newTotal);
  }, [addedEatables]);

  const handleOrderData = async () => {
    try {
      const response = await postOrder({
        clientId: idRol,
        restaurantId: id.toString(),
      });
      if (response) {
        return response
      } else {
        console.error("La respuesta está vacía");
      }
    } catch (error: any) {
      console.error("Error al obtener la dirección:", error.message);
    }
  };


  return (
    <div className="container mx-auto max-w-screen-2xl pl-10 pr-10 m-28">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <div className="col-span-2">
          <div className="flex-column">
            <div className="border rounded-lg shadow-md">
              <div
                className="hero h-40 bg-base-200"
                style={{ backgroundImage: "url(/Home/chef.jpg)" }}
              ></div>
              <div className="flex items-center justify-between p-4">
                <div className="flex gap-2">
                  <img
                    src="/UserLanding/restaurant.svg"
                    className="w-1/12 border rounded-full p-1"
                    alt=""
                  />
                  <div>
                    <h1>asd</h1>
                    <p>Descuento 20%</p>
                    <p>15-20min - Envio <b>GRATIS</b></p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <img src="/UserLanding/star.svg" className="w-8" alt="" />
                  <p className="text-lg">4</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-5 mb-5">
              {!eatables ? (
                <div>cargando platos</div>
              ) : (
                eatables.map((eatable) => (
                  <div
                    key={eatable.idEatable}
                    className="p-2 border rounded-lg flex-col justify-between items-center"
                  >
                    <div className="flex-col items-center gap-2">
                      <div className="md:flex flex-col items-center justify-center">
                        <img src={`${eatable.photo}`} className="w-16" alt="" />
                        <h1>{eatable.name}</h1>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex-col items-center">
                          <p>{eatable.menuType}</p>
                          <p>${eatable.price}</p>
                        </div>

                        <button onClick={() => addEatable(eatable)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-8 h-8"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="flex-col items-center justify-center border border-gray-200 rounded-xl p-4 shadow-2xl">
            <h3 className="text-center pb-2 text-2xl font-medium">Carrito 🛒</h3>

            {addedEatables.length === 0 ? (
              <h3 className="text-center">El carrito se encuentra vacío</h3>
            ) : (
              
              addedEatables.map((eatable) => (
                
                <div
                  key={eatable.idEatable}

                  className="flex items-center justify-between m-5"
                >
                  <div className="pr-4">
                    <h3>{eatable.quantity}</h3>
                  </div>
                  <div className="flex items-center justify-between gap-3">

                    <img src={eatable.photo} className="w-10" alt="" />
                  </div>

                  <div className="text-center">
                    <h1>{eatable.name}</h1>
                  </div>
                  <div className="flex  justify-center gap-3">
                    <p className="text-sm items-center">${eatable.price}</p>
                  </div>
                </div>
              ))
            )}

            {addedEatables.length === 0 ? null : (

              <div>
                <h3 className="pr-2">Envio <b>GRATIS</b></h3>
                <h3 className="pr-2">Total a pagar ${Number(total)}</h3>

              </div>
            )}

            <div className="flex-col pt-5">
              <div className="flex flex-col w-full">
                <button
                  className={`btn bg-green-300 ${addedEatables.length === 0 && "pointer-events-none opacity-30"
                    }`}
                  onClick={showModal}
                >
                  Confirmar
                </button>
              </div>
            </div>


            {modalVisible && (
              <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-90 z-50">
                <div className="bg-white rounded-lg p-8 max-w-md">
                  <h2 className="text-2xl font-bold mb-4">Generando pedido</h2>
                  <p>
                    Por favor, no cierre esta pestaña mientras generamos su
                    pedido...
                  </p>
                  <div className="flex justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-gray-600"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
