import Link from "next/link";

export default function () {
    return (
        <div className="container mx-auto max-w-screen-lg pl-20 pr-20 mt-28">

<h1 className="text-center text-2xl font-light pt-10">Configuracion</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-10 pb-10">


                <div className="col-span-1 bg-info mb-3 p-2 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300">
                    <a href="/user/shop/menumanagement">
                        <div className="flex flex-col items-center justify-center p-3">
                            <h4 className="text-white font-semibold text-2xl md:text-lg">Gestionar Menus</h4>
                            <img className="w-2/4 md:w-4/5 p-4 pt-3" src="/Delivery/order.svg" alt="" />
                        </div>
                    </a>
                </div>



                <div className="col-span-1 bg-info mb-3 p-2 rounded-md hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300">
                    <a href="/user/shop/ordersmanagement">
                        <div className="flex flex-col items-center justify-center p-3">
                            <h4 className="text-white font-semibold text-2xl md:text-lg">Gestionar Pedidos</h4>
                            <img className="w-2/4 md:w-4/5 p-4 pt-3" src="/Delivery/check.svg" alt="" />
                        </div>
                    </a>
                </div>



                <div className="col-span-1 bg-info mb-3 p-2 rounded-md hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300">
                    <a href="/Delivery/historial">
                        <div className="flex flex-col items-center justify-center p-3">
                            <h4 className="text-white font-semibold text-2xl md:text-lg">Historial Pedidos</h4>
                            <img className="w-2/4 md:w-4/5 p-4 pt-3" src="/Delivery/check.svg" alt="" />
                        </div>
                    </a>
                </div>

               
                <div className="col-span-1 bg-info mb-3 p-2 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300">
                    <Link href="/user/shop/profile">
                        <div className="flex flex-col items-center justify-center p-3">
                            <h4 className="text-white font-semibold text-2xl md:text-lg">Editar datos</h4>
                            <img className="w-2/4 md:w-4/5 p-4 pt-3" src="/edit.svg" alt="" />
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}
