"use client";


import React, { useEffect, useState } from "react";
import { updateOrderStatus } from "../../client/seleccionar/[id]/updateOrderStatus";
import { toast } from "sonner";
import InputFindCity from "@/app/Components/InputFindCity/InputFindCity";
import { patchOrderDelivery } from "@/app/hooks/patchOrderDelivery";
import { parseCookies } from "nookies";

type Address = {
  idAddress: string;
  country: string;
  state: string;
  CP: string;
  city: string;
  street: string;
  number: string;
  apartment: string;
};

type Order = {
  address: Address;
  date: string;
  id: string;
  status: string;
  totalPrice: number;
};

type StatusType = "DELIVERED";

const Page = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const cookies = parseCookies();  
  const idRol = cookies.userId;

  
  const handleDataOrders = (data: any) => {  
    setOrders(data);
    if (data.length > 0) {
      toast.success("Se han encontrado pedidos");
    } else {
      toast.error("No se han encontrado pedidos");
    }
  };

  const tomarPedidoFuncion = async (idOrder: any) => {
    try {
      const value = await updateOrderStatus(idOrder, "DELIVERED");
      try {
      const deliveryToOrder = await patchOrderDelivery(idOrder, idRol);

      toast.success(`Pedido ${idOrder} tomado con exito!`);
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
      <InputFindCity handleData={handleDataOrders} />
      <h3 className="text-2xl font-normal mt-10">Ordenes pendientes</h3>
      {orders.length > 0 ? (
        orders.map((o) => (
          <div key={o.id} className="flex justify-between border border-black rounded-xl mt-5 max-w-3xl p-5">
            <div className="flex justify-center align-middle flex-col">
              <p className="text-xs sm:text-xl">Id del pedido: </p>
              <p className="text-xs sm:text-xl">{o.id}</p>
            </div>
            <div className="flex justify-start">
              <div className="flex justify-center align-middle flex-col">
                <p className="text-xs sm:text-xl">Direccion del cliente</p>
                <p className="text-xs sm:text-xl">{o.address.street}</p>
                <p className="text-xs sm:text-xl">{o.address.number}</p>
              </div>
            </div>

            <div className="flex flex-row justify-center align-middle items-center">
              <button
                className="btn btn-accent rounded-xl w-24 sm:w-36"
                onClick={() => tomarPedidoFuncion(o.id)}
              >
                Tomar pedido
              </button>
            </div>
          </div>
        ))
      ) : (
        <div>No hay ordenes pendientes</div>
      )}
    </div>
  );
};

export default Page;
