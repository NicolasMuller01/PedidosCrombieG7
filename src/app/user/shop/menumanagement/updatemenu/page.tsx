"use client";

import { parseCookies } from "nookies";
import React, { useEffect, useState } from "react";
import { getMenusByIdLocal } from "./getMenuesByIdLocal";
import Link from "next/link";
import { deleteMenuById } from "./deleteMenuByID";
import { toast } from "sonner";

type Menu = {
  idEatable: string;
  title: string;
  description: string;
  photo: string;
  price: number;
  name: string;
  menuType: string;
};

const Page = () => {
  const [menusValidData, setMenusValidData] = useState<Menu[]>([]); // Inicializa con un arreglo vacío


  const deleteEatable = async (idMenu: string) => {
    try {
      const deletedMenu = await deleteMenuById(idMenu);
      toast.success("Menu eliminado con exito")  
    } catch (error) {
      console.error("Error al obtener los menús:", error);
    }
  };

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const menusData = await getMenusByIdLocal();
        setMenusValidData(menusData);
      } catch (error) {
        console.error("Error al obtener los menús:", error);
      }
    };

    fetchMenus();
  }, [deleteEatable]);


  return (
    <div className="flex flex-col justify-center items-center align-middle mt-28">
      <h3 className="text-2xl mt-20">Menues disponibles</h3>
      {menusValidData.length > 0 ? (
        menusValidData.map((data) => (
          <div key={data.idEatable} className="flex justify-between border border-black rounded-xl mt-5 min-w-full lg:w-[600px] lg:min-w-0 p-5">
            <div className="flex justify-start align-middle items-center">
              <img
                src={data.photo}
                className="h-8 w-8 sm:w-12 sm:h-12 border rounded-full p-1"
                alt=""
              />
              <div className="flex justify-center align-middle flex-col">
                <p className="text-xs sm:text-xl">{data.name}</p>
                <p className="text-xs sm:text-xl">{data.price}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row"> 
            <button className="btn btn-accent rounded-xl w-24 sm:w-36">
              <Link
                key={data.idEatable}
                href={`/user/shop/menumanagement/updatemenu/${data.idEatable}`}
              >
                Actualizar menu
              </Link>
            </button>

            <button
              className="btn btn-secondary rounded-xl w-24 sm:w-36 "
              onClick={() => deleteEatable(data.idEatable)}
            >
                Eliminar menu
            </button>
            </div>
          </div>
        ))
      ) : (
        <p>No hay menús disponibles.</p>
      )}
    </div>
  );
};

export default Page;
