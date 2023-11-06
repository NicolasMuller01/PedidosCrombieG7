'use client'
import { getOrdersFromLocal } from '@/app/hooks/getOrdersFromLocal'
import React, { useEffect, useState } from 'react'
import { updateOrderStatus } from '../../client/seleccionar/[id]/updateOrderStatus';
import { toast } from 'sonner';

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

  type StatusType = 'ACCEPTED' | 'CANCELLED'  

const page = () => {

    const [orders, setOrders] = useState<OrderItem[]>([])

    const aceptarPedidoFuncion = async(id: string, status: StatusType) => {
     try {
      const estado = await updateOrderStatus(id, status);
      if (status === 'ACCEPTED'){
        toast.success(`Pedido ${id} aceptado con exito!`)
      }else {
        toast.error(`Pedido ${id} rechazado con exito!`)
      }
     } catch (error) {
      console.log(error);
      
     }
    }

    useEffect(() => {

        const fetchData = async () => {
            try {
              const data = await getOrdersFromLocal();
              setOrders(data);
            } catch (error) {
              console.error('Error al obtener los pedidos:', error);
            }
          };
      
          fetchData();
    
    }, [aceptarPedidoFuncion])


    

  return (
    <div className='mt-28 flex align-middle justify-center items-center flex-col'>
        <h3 className='text-2xl font-normal'>Ordenes pendientes</h3>
        {orders != undefined ? (
        orders.map((o) => (
          <div className="flex justify-between border border-black rounded-xl mt-5 max-w-3xl p-5">
            <div className="flex justify-center align-middle flex-col">
              <p className='text-xl'>Id del pedido: </p>
              <p>{o.id}</p>
            </div>
          <div className="flex justify-start">
            <div className="flex justify-center align-middle flex-col">
              <p>Estado del pedido: </p>
              <p>{o.status}</p>
            </div>
          </div>

         <div className='flex flex-row justify-center align-middle items-center'>
         <button className="btn btn-accent rounded-xl" onClick={()=>aceptarPedidoFuncion(o.id,'ACCEPTED')}>
              Aceptar pedido
          </button>

          <button
            className="btn btn-secondary rounded-xl" 
            onClick={()=>aceptarPedidoFuncion(o.id,'CANCELLED')}
          >
              Rechazar
          </button>
         </div>
        </div>
        ))
      )  
        :
        <div>No hay ordenes pendientes</div> 

    }

    </div>
  )
}

export default page