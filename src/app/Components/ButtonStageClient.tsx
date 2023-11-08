"use client";
import axios from "axios";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import { getOrdersFromClient } from "../hooks/getOrdersFromClient";

type MenuItem = {
  description: string;
  idEatable: string;
  menuType: string;
  name: string;
  photo: string;
  price: number;
  title: string;
};

type OrderItem = {
  date: string;
  id: string;
  menuList: MenuItem[];
  status: string;
  totalPrice: number;
};

const ButtonStageClient = () => {
  const [orders, setOrders] = useState<OrderItem[]>([]);

  const cookies = parseCookies();
  const userId = cookies.userId;
  const token = cookies.token;

  const fetchData = async () => {
    try {
      const response = await getOrdersFromClient();

      const values = (await response.ordersHistory) || [];

      const filteredOrders = values.filter(
        (order: any) => order.status === "DELIVERED"
      );
      setOrders(filteredOrders);
    } catch (error) {
      console.error("Error al obtener los pedidos:", error);
    }
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 10000000*300000);

    return () => {
      clearInterval(intervalId);
    };
  }, [userId, token]);

  const hasDeliveredOrders = orders.some(
    (order) => order.status === "DELIVERED"
  );

  return (
    <div className="fixed bottom-16 right-16 z-1000">
      <a href="/user/client/historial">
        <button className="p-3 bg-purple-700 rounded-xl">
          <div
            className={`w-6 h-6 ${
              hasDeliveredOrders ? "bg-orange-500" : "bg-red-500"
            } text-white text-center rounded-full absolute -top-2 -right-2`}
          >
            <p className="text-xs mt-1">
              {hasDeliveredOrders ? orders.length : "0"}
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-moped"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M18 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
            <path d="M5 16v1a2 2 0 0 0 4 0v-5h-3a3 3 0 0 0 -3 3v1h10a6 6 0 0 1 5 -4v-5a2 2 0 0 0 -2 -2h-1"></path>
            <path d="M6 9l3 0"></path>
          </svg>
        </button>
      </a>
    </div>
  );
};

export default ButtonStageClient;
