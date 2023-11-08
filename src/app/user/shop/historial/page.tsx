"use client";

import { getAllOrdersFromLocal } from "@/app/hooks/getAllOrdersFromLocal";
import { getOrdersFromLocal } from "@/app/hooks/getOrdersFromLocal";
import { useEffect, useState } from "react";

type Order = {
  date: string;
  id: string;
  menuList: Array<any>; // Cambia 'any' al tipo correcto si tienes información específica sobre menuList
  status: string;
  totalPrice: number;
};

const Page = () => {
  const [localOrders, setlocalOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllOrdersFromLocal();
        setlocalOrders(data.ordersHistory)
        
      } catch (error) {
        console.error("Error al obtener los pedidos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto max-w-screen-lg pl-20 pr-20 pt-5 pb-5 mt-28">
      <h3 className="text-center text-2xl font-bold">Historial de Pedidos</h3>

      <div className="pt-10 pb-10">
        {localOrders.length > 0 ? (
          <div>
            {localOrders?.map((o) => (
              <div
                key={o.id}
                className="flex flex-col items-center p-4 md:flex-row md:items-center md:justify-between border border-slate-300 rounded-xl gap-2 mt-5"
              >
                <div className="text-center md:text-left">
                  <div>
                    <h3 className="text-base font-bold text-center">fecha</h3>
                    <p>{o.date.slice(0,10)}</p>
                  </div>
                </div>

                <div className="text-center">
                  <div>
                  <h3 className="text-base font-bold text-center">Estado</h3>
                    <p>{o.status}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center">
            Toma una orden para visualizar el historial
          </div>
        )}
      </div>
    </div>
  );
}
export default Page