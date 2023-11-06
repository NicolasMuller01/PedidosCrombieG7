export default function () {
    return (
        <div className="container mx-auto max-w-screen-lg pl-20 pr-20 pt-5 pb-5">
            <h1 className="text-center text-2xl font-bold">Historial de Pedidos</h1>
            <input type="text" placeholder="Buscar pedidos" className="input input-bordered w-full mt-5" />

            <div className="pt-10 pb-10">

                <div className="flex flex-col items-center p-4 md:flex-row md:items-center md:justify-between border border-slate-300 rounded-xl gap-2">
                    <div className="text-center md:text-left">
                        <div>
                            <h1 className="text-base font-bold text-center">Restaurante</h1>
                            <p className="">
                                <span className="inline">San Martin</span>
                                <span className="mx-1 inline">1948</span>
                            </p>
                            <p>
                                <span className="inline">Restaurante</span>
                                <span className="mx-1 inline">La City Sport</span>
                            </p>
                        </div>
                    </div>
                    <div className="text-center md:text-left">
                        <div>
                            <h1 className="text-base font-bold text-center">Repartidor</h1>
                            <p className="">
                                <span className="inline">Bicicleta</span>
                            </p>
                            <p>
                                <span className="inline">Nicolas</span>
                                <span className="mx-1 inline">Muller</span>
                            </p>
                        </div>
                    </div>
                    <div className="text-center md:text-right">
                        <div>
                            <h1 className="text-base font-bold text-center">Cliente</h1>
                            <p className="">
                                <span className="inline">Bv.Galvez</span>
                                <span className="mx-1 inline">1948</span>
                            </p>
                            <p>
                                <span className="inline">Leandro</span>
                                <span className="mx-1 inline">Perez</span>
                            </p>
                        </div>
                    </div>
                    <div className="text-center">
                        <div>
                            <h1 className="text-base font-bold text-center">Envio</h1>
                            <p className="">
                                <span className="inline">Comida</span>
                            </p>
                            <p>
                                <span className="inline">Hamburguesa</span>
                            </p>
                        </div>
                    </div>
                    

                    <div className="flex gap-2">
                        <button className=" bg-green-400 p-3 border rounded-2xl hover:bg-green-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Info
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center p-4 md:flex-row md:items-center md:justify-between border border-slate-300 rounded-xl">
                    <div className="text-center md:text-left">
                        <div>
                            <h1 className="text-base font-bold text-center">Restaurante</h1>
                            <p className="">
                                <span className="inline">San Martin</span>
                                <span className="mx-1 inline">1948</span>
                            </p>
                            <p>
                                <span className="inline">Restaurante</span>
                                <span className="mx-1 inline">La City Sport</span>
                            </p>
                        </div>
                    </div>
                    <div className="text-center md:text-left">
                        <div>
                            <h1 className="text-base font-bold text-center">Repartidor</h1>
                            <p className="">
                                <span className="inline">Bicicleta</span>
                            </p>
                            <p>
                                <span className="inline">Nicolas</span>
                                <span className="mx-1 inline">Muller</span>
                            </p>
                        </div>
                    </div>
                    <div className="text-center md:text-right">
                        <div>
                            <h1 className="text-base font-bold text-center">Cliente</h1>
                            <p className="">
                                <span className="inline">Bv.Galvez</span>
                                <span className="mx-1 inline">1948</span>
                            </p>
                            <p>
                                <span className="inline">Leandro</span>
                                <span className="mx-1 inline">Perez</span>
                            </p>
                        </div>
                    </div>
                    <div className="text-center">
                        <div>
                            <h1 className="text-base font-bold text-center">Envio</h1>
                            <p className="">
                                <span className="inline">Comida</span>
                            </p>
                            <p>
                                <span className="inline">Hamburguesa</span>
                            </p>
                        </div>
                    </div>
                    

                    <div className="flex gap-2">
                        <button className=" bg-green-400 p-3 border rounded-2xl hover:bg-green-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Info
                        </button>
                    </div>
                </div>


        </div>
    );
}