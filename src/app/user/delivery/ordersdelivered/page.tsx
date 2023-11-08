"use client";
import { getOrdersFromLocal } from "@/app/hooks/getOrdersFromLocal";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { updateOrderStatus } from "../../client/seleccionar/[id]/updateOrderStatus";
import { toast } from "sonner";
import InputFindCity from "@/app/Components/InputFindCity/InputFindCity";
import { patchOrderDelivery } from "@/app/hooks/patchOrderDelivery";
import { parseCookies } from "nookies";
import { getOrdersFromDelivery } from "@/app/hooks/getOrdersFromDelivery";


type Order = {
  date: string;
  id: string;
  status: string;
  totalPrice: number;
};

type StatusType = "RECEIVED";

const page = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const cookies = parseCookies();  
  const idRol = cookies.userId;

  useEffect(() => {
    async function fetchData() {
      try {
       const data = await getOrdersFromDelivery();
       setOrders(data)
      } catch (error) {
        console.error('Error al obtener los pedidos:', error);
      }
    }

    fetchData()
  }, []);


  const tomarPedidoFuncion = async (idOrder) => {
    try {
      const value = await updateOrderStatus(idOrder, "RECEIVED");
      try {
      const deliveryToOrder = await patchOrderDelivery(idOrder, idRol);

      toast.success(`Usted ha entregado el pedido ${idOrder} con exito!`);
      setOrders(orders.filter((o) => o.id != idOrder));
      } catch (error) {
        toast.error("Algo salio mal!");
      }
    } catch (error) {
      toast.error("Algo salio mal!");
    }
  };

  return (
    <div className="mt-28 flex align-middle justify-center items-center flex-col">
      <h3 className="text-2xl font-normal mt-10">Ordenes en posesion</h3>
      {orders.length > 0 ? (
        orders.map((o) => (
          <div className="flex justify-between border border-black rounded-xl mt-5 max-w-3xl p-5">
            <div className="flex justify-center align-middle flex-col">
              <p className="text-xl">Id del pedido: </p>
              <p>{o.id}</p>
            </div>
            <div className="flex justify-start">
              <div className="flex justify-center align-middle flex-col">
                <p>Fecha</p>
                <p>{o.date}</p>
              </div>
              <div className="flex justify-center align-middle flex-col">
                <p>Estado</p>
                <p>{o.status}</p>
              </div>
              <div className="flex justify-center align-middle flex-col">
              <button
                className="btn btn-accent rounded-xl"
                onClick={() => tomarPedidoFuncion(o.id)}
              >
              Pedido <br></br>Entregado
              </button>
            </div>
            </div>

           
          </div>
        ))
      ) : (
        <div>no posee ordenes</div>
      )}
    </div>
  );
};

export default page;
