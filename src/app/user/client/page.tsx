export default function () {
    return (
        <div className="container mx-auto max-w-screen-lg pl-5 pr-5 m-28">
            <h1 className="text-center text-2xl font-bold pb-5">BIENVENIDO QUE DESEA DISFRUTAR HOY!</h1>

            <div className="grid grid-cols-3 grid-rows-3 gap-4 mb-0 ">


                <div className="col-span-1 row-span-1 bg-warning mb-0 p-2 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300">
                    <a href="/user/client/seleccionar">
                        <div className="flex flex-col items-center justify-center">
                            <img src="/UserLanding/burguer.svg" className="w-1/2" alt="" />
                            <h3 className="text-base md:text-xl font-bold text-white">Resturante</h3>
                        </div>
                    </a>
                </div>



                <div className="col-span-2 bg-green-500 mb-0 p-2 flex rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300">
                    <a href="/user/client/seleccionar">
                        <div className="flex flex-col items-center justify-center">
                            <img src="/UserLanding/groceries.svg" className="w-1/5" alt="" />
                            <h3 className="text-base md:text-xl font-bold text-white">Mercado</h3>
                        </div>
                    </a>
                </div>



                <div className="row-span-2 bg-green-500 mb-0 p-2 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300">
                    <a href="/user/client/seleccionar">
                        <div className="flex flex-col items-center justify-center h-full">
                            <img src="/UserLanding/drinks.svg" className="w-1/2" alt="" />
                            <h3 className="text-base md:text-xl font-bold text-white">Bebidas</h3>
                        </div>
                    </a>
                </div>



                <div className="bg-yellow-500 mb-0 p-2 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300">
                    <a href="/user/client/seleccionar">
                        <div className="flex flex-col items-center justify-center">
                            <img src="/UserLanding/iceCream.svg" className="w-1/2" alt="" />
                            <h3 className="text-base md:text-xl font-bold text-white">Helado</h3>
                        </div>
                    </a>
                </div>

                <div className="row-span-1 bg-red-500 mb-0 p-2 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300">
                    <a href="/user/client/seleccionar">
                        <div className="flex flex-col items-center  justify-center">
                            <img src="/UserLanding/bakery.svg" className="w-1/2" alt="" />
                            <h3 className="text-base md:text-xl font-bold text-white">Panaderia</h3>
                        </div>
                    </a>
                </div>

                <div className="col-span-2 bg-purple-500 p-2 mb-0 text-center rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300">
                    <a href="/user/client/seleccionar">
                        <div className="flex flex-col items-center justify-center ">
                            <img src="/UserLanding/pharmacy.svg" className="w-1/4" alt="" />
                            <h3 className="text-base md:text-xl font-bold text-white">Farmacia</h3>
                        </div>
                    </a>
                </div>

            </div>


            <div className="carousel w-full pt-10 pb-10">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="/UserLanding/promos/1.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="/UserLanding/promos/2.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="/UserLanding/promos/3.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
}