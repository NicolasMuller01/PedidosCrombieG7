'use client'

import axios from "axios";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import { getOrdersFromLocal } from "../hooks/getOrdersFromLocal";

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


const ButtonStage = () => {

  const [orders, setOrders] = useState<OrderItem[]>([])

    const cookies = parseCookies();
    const userId = cookies.userId;
    const token = cookies.token;

    const fetchData = async() => {
     
      const values = await getOrdersFromLocal()
      setOrders(values)
      
    };
  
    useEffect(() => {
      fetchData();
      const intervalId = setInterval(fetchData, 10000);
      return () => {
        clearInterval(intervalId);
      };
    }, [userId, token]);



  return (
    <div className="fixed bottom-16 right-16">
      <a href="/user/shop/ordersmanagement">
        <button className="p-3 bg-purple-700 rounded-xl">
        <div className="w-6 h-6 bg-red-500 text-white text-center rounded-full absolute -top-2 -right-2">
        <p className="text-xs mt-1">{!orders ? "0" : orders.length}</p>
      </div>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAPdJREFUSEvt1TFKA1EUheFv3EKwsBGsrN2BsTFdmuAeBCuxERtFG7Gw0j2kSicYCHEFFq5AGytxB6IE3iDM8HKTCSFNpnrMve/85525M1NY8lUsWd+sgB6OcZAMjfCAQWRwFsAdzjJCl7iaBokAR+gngWs8pvUJLtL6EMMcJAK8Yg+nuK+ITAA3eEanKeAHG9jEV0VkC5/4Rqsp4DdtzJ00qtemaIz9aDKC+gvaZU/VWeloQca/8RygvB9FUK3X+lcOmDequU+wBtTeg2hqosjWzyBKSBjRB7ZDmekN79jJfYu6uMVuQ8gbzvGUAzTUzW+L/mgLA/8AfTkzGXPdr4UAAAAASUVORK5CYII=" />
        </button>
      </a>
    </div>
  );
};

export default ButtonStage;
