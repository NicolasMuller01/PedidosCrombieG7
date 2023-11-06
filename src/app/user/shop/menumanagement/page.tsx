import Link from "next/link";
import React from "react";

export default function () {
  return (
    <div className="mt-28">
      <div className="container mx-auto max-w-screen-lg pl-20 pr-20 ">
        <h1 className="text-center text-2xl font-bold pt-10">
          Panel de administracion de menues
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 pb-10">
          <div className="col-span-1 bg-info mb-3 p-2 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300">
            <button>
            <Link href="/user/shop/menumanagement/addmenu">
              <div className="flex flex-col items-center justify-center p-3">
                <h4 className="text-white font-semibold text-2xl md:text-lg">
                  Agregar menu
                </h4>
                <img
                  className="w-2/4 md:w-4/5 p-4 pt-3"
                  src="/Delivery/order.svg"
                  alt=""
                />
              </div>
            </Link>
            </button>
          </div>

          <div className="col-span-1 bg-info mb-3 p-2 rounded-md hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300">
          <Link href="/user/shop/menumanagement/updatemenu">
              <div className="flex flex-col items-center justify-center p-3">
                <h4 className="text-white font-semibold text-2xl md:text-lg">
                  editar menu
                </h4>
                <img
                  className="w-2/4 md:w-4/5 p-4 pt-3"
                  src="/Delivery/check.svg"
                  alt=""
                />
              </div>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};
