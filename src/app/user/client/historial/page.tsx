"use client";
import { getOrdersFromClient } from "@/app/hooks/getOrdersFromClient";
import { getOrdersFromDelivery } from "@/app/hooks/getOrdersFromDelivery";
import { getOrdersFromDeliveryFromUser } from "@/app/hooks/getOrdersFromDeliveryFromUser";
import { getOrdersIdType } from "@/app/hooks/getOrdersIdType";
import Link from "next/link";
import { useEffect, useState } from "react";

type Order = {
  date: string;
  id: string;
  status: string;
};

type MyCustomType = {
  id: string;
  date: string;
  client: {
    id: string;
    type: string;
  };
  delivery?: {
    id: string;
  };
  local: {
    id: string;
    localName: string;
    description: string;
    type: string;
  };
  status: string;
  totalPrice: number;
};

const Page = () => {
  const checkStatus = (status: string) => {
    if (status === "WAITING") {
      return (
        <span className="mx-1 inline text-gray-800">generando pedido</span>
      );
    } else if (status === "SEND") {
      return (
        <span className="mx-1 inline text-gray-400">
          En espera del restaurante
        </span>
      );
    } else if (status === "CANCELLED") {
      return <span className="mx-1 inline text-red-500">Cancelado</span>;
    } else if (status === "ACCEPTED") {
      return (
        <span className="mx-1 inline text-yellow-500">
          El restaurante esta preparando su pedido
        </span>
      );
    } else if (status === "DELIVERED") {
      return (
        <span className="mx-1 inline text-orange-500">
          Su pedido esta en camino
        </span>
      );
    } else if (status === "RECEIVED") {
      return <span className="mx-1 inline text-green-500">Recibido</span>;
    }
  };

  const [orders, setOrders] = useState<MyCustomType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getOrdersIdType("client");
        setOrders(data);
      } catch (error) {
        console.error("Error al obtener los pedidos:", error);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="container mx-auto max-w-screen-lg pl-20 pr-20 pt-5 pb-5 mt-28">
      <h1 className="text-center text-2xl font-bold">Historial de Pedidos</h1>

      <div className="pt-10 pb-10">
        {orders.length > 0 ? (
          <div>
            {orders?.map((o) => (
              <div
                key={o.id}
                className="flex flex-col items-center p-4 md:flex-row md:items-center md:justify-between border border-slate-300 rounded-xl gap-2 mt-5"
              >
                <div className="text-center md:text-left">
                  <div>
                    <h3 className="text-base font-bold text-center">Estado</h3>
                    <p>{orders && checkStatus(o.status)}</p>
                  </div>
                </div>
                <div className="text-center md:text-center">
                  <div>
                    <p>
                      <span className="inline font-bold">Restaurante</span>
                      <p>{o.local.localName}</p>
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <div>
                    <p>
                      <span className="inline font-bold">
                        Repartidor numero
                      </span>
                      <p>{o.delivery?.id}</p>
                    </p>
                  </div>
                </div>

                {o.status === "RECEIVED" && (
                  <div className="flex gap-2 flex-col">
                    <Link
                      href={{
                        pathname: "/user/client/historial/review",
                        query: {
                          name: o.local.localName,
                          rol: "LOCAL",
                          idUser: o.local.id,
                          idOrder: o.id,
                        },
                      }}
                      className="btn btn-neutral p-3 pointer-events-none opacity-50 bg-gray-300 text-gray-600 cursor-not-allowed "
                      title="Esta acción no está disponible"
                    >
                      <b>Puntuar Local</b>⭐
                    </Link>
                    <Link
                      href={{
                        pathname: "/user/client/historial/review",
                        query: {
                          name: o.delivery?.id,
                          rol: "DELIVERY",
                          idUser: o.delivery?.id,
                          idOrder: o.id,
                        },
                      }}
                      className="btn btn-neutral pointer-events-none opacity-50 bg-gray-300 text-gray-600 cursor-not-allowed"
                      title="Esta acción no está disponible"
                    >
                      <b>Puntuar Delivery</b>⭐
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center">
            Realiza una orden para visualizar el historial
          </div>
        )}
      </div>
    </div>
  );
};
export default Page;
