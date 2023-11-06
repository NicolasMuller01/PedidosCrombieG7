"use client"
import { useState } from "react";

export default function () {

    const [estadoPedido, setEstadoPedido] = useState(0);
    const [progreso, setProgreso] = useState(0);
    const estados = ['estado-gris', 'estado-amarillo', 'estado-verde', 'estado-verde-medio', 'estado-verde-oscuro', 'estado-rojo'];
    const coloresFondo = ['gray', 'yellow', 'green', 'limegreen', 'darkgreen', 'red'];
    const nombresColores = ['Waiting', 'Onprep', 'Prep', 'OnItsway', 'Received', 'Canceled'];

    if (progreso > 100) {
        setProgreso(0);
    }
    const handleClick = () => {
        if (estadoPedido < estados.length - 1) {
            setEstadoPedido(estadoPedido + 1);
        } else {
            setEstadoPedido(0);
        }
        setProgreso(progreso + 20);
    }

        return (
            <div className="container mx-auto max-w-screen-lg pl-20 pr-20">
                <h1 className="text-center text-2xl font-bold pt-10">Pedido</h1>

                <div className="space-y-4 mt-5 mb-5">


                    <div className="border border-black rounded-xl pt-8 p-4">
                        <div className="flex items-center justify-between">

                            <div className="flex items-center justify-center gap-3">
                                <div>
                                    <h1 className="text-center text-xl font-medium">Cliente</h1>
                                    <p className="text-center">Nicolas Muller</p>
                                    <p className="text-center">Los lapachos 123</p>
                                </div>
                            </div>


                            <div className="flex items-center justify-center gap-3">
                                <div>
                                    <h1 className="text-center text-xl font-medium">Restaurante</h1>
                                    <p className="text-center">Mc Donald</p>
                                    <p>Bv Galvez 842</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-3">
                                <div>
                                    <h1 className="text-center text-xl font-medium">Repartidor</h1>
                                    <p className="text-center">Armando Paredes</p>
                                    <p className="text-center">Bicicleta</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-10 pl-5 p-8">

                            <div className="flex items-center justify-center gap-3">
                                <div>
                                    <h1 className="text-center text-xl font-medium">Cantidad</h1>
                                    <p className="text-center">x3</p>
                                </div>
                            </div>


                            <div className="flex items-center justify-center gap-3">
                                <div>
                                    <h1 className="text-center text-xl font-medium">Informacion</h1>
                                    <p className="text-center">Hamburguesa completa</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-3">
                                <div>
                                    <h1 className="text-center text-xl font-medium">Precio</h1>
                                    <p className="text-center">$ 1500</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <progress className="progress progress-primary w-full h-4" value={progreso} max="100"></progress>
                    </div>
                    <div className="flex items-center justify-evenly">
                        <button
                            className="border w-1/2 rounded-full p-3 text-center"
                            onClick={handleClick}
                            style={{ backgroundColor: coloresFondo[estadoPedido] }}
                        >
                            {nombresColores[estadoPedido]}
                        </button>
                    </div>
                </div>

            </div>
        );
    }