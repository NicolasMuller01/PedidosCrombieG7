import Link from "next/link";
import NavBar from "./Components/NavClient";
import NavGeneral from "./Components/NavGeneral";
import ButtonStage from "./Components/ButtonStage";

export default function Home() {
  return (
    <div className="">
      <NavGeneral />
      <div className="hero min-h-screen z-0 relative">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url(/Home/Portada.jpg)",
            filter: "blur(3px)",
            zIndex: -1,
          }}
        />
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <div className="flex justify-between">
            <h1 className="mb-5 text-[2.5rem] sm:text-[2.9rem] font-bold w-max"><div className="bg-primary inline h-20 w-max"><span>Pedidos</span></div>Crombie🍕</h1>
            </div>
             <p className="mb-5 sm:text-xl text-justify text-white drop-shadow-xl">
             <b> Pedidos crombie es la aplicación definitiva para satisfacer tus
              antojos gastronómicos con comodidad y rapidez. </b>Ya sea que estés
              buscando una deliciosa comida casera, un plato étnico auténtico o
              simplemente una entrega de tu restaurante favorito, Pedidos
              crombie te conecta con una amplia variedad de opciones culinarias
              a solo un toque de distancia.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 mb-20 ">
        <div className="flex flex-col xl:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex flex-col items-center flex-1 ">
            <div className="card w-96 bg-base-100 shadow-xl border h-[600px] mb-10 xl:mb-0">
              <figure className="px-10 pt-10">
                <img
                  src="/Home/Cliente.jpg"
                  alt="Shoes"
                  className="rounded-xl w-[90%]"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Cliente</h2>
                <p>
                  Crear una cuenta es sencillo y rápido. Regístrate ahora y
                  descubre una nueva forma de disfrutar de la comodidad en tus
                  compras diarias. ¡Únete a nosotros hoy y aprovecha al máximo
                  tu experiencia de compra con nosotros
                </p>
                <div className="card-actions">
                  <Link href="/register" className="btn btn-primary">
                    Registrarse
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center flex-1">
            <div className="card w-96 bg-base-100 shadow-xl border h-[600px] mb-10 xl:mb-0">
              <figure className="px-10 pt-10">
                <img
                  src="/Home/DeliveryMan.png"
                  alt="Shoes"
                  className="rounded-xl w-[85%]"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Repartidor</h2>
                <p>
                  Únete a nuestra red de repartidores y comienza a disfrutar de
                  la flexibilidad y las oportunidades que ofrecemos. Trabaja
                  según tus propios términos y genera ingresos mientras haces
                  entregas. ¡Regístrate hoy y prepárate para una experiencia de
                  reparto enriquecedora!
                </p>
                <div className="card-actions">
                  <Link href="/register" className="btn btn-primary">
                    Registrarse
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center flex-1">
            <div className="card w-96 bg-base-100 shadow-xl border h-[600px]">
              <figure className="px-10 pt-10">
                <img
                  src="/Home/chef.jpg"
                  alt="Shoes"
                  className="rounded-xl h-40 object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Restaurante</h2>
                <p>
                  Regístrate y forma parte de nuestra comunidad gastronómica.
                  Únete a otros chefs y emprendedores culinarios exitosos y
                  lleva tus sabores a donde nunca imaginaste. Estamos aquí para
                  servirte en el camino hacia el éxito gastronómico. ¡Regístrate
                  hoy y prepárate para llevar tus delicias culinarias a un
                  público hambriento de sabor!
                </p>
                <div className="card-actions">
                  <button className="btn btn-primary">Registrate</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pl-10 pr-10">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div>
              <h1 className="text-5xl font-bold pb-12 text-center">
                ¿Porque trabajar con <b>nosotros?</b>
              </h1>

              <div className="hero-content flex flex-col lg:flex-row-reverse">
                <div className="flex flex-col md:ml-40 items-start justify-start space-y-6">
                <div className="flex gap-2">
                    <input
                      type="checkbox"
                      checked={true}
                      className="checkbox checkbox-primary"
                    />
                    <h3 className="pb-2 font-medium text-lg">Marketing efectivo</h3>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      checked={true}
                      className="checkbox checkbox-primary"
                    />
                    <h3 className="pb-2 font-medium text-lg">Incremento en las ventas</h3>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      checked={true}
                      className="checkbox checkbox-primary"
                    />
                    <h3 className="pb-2 font-medium text-lg">Ampliación de la visibilidad</h3>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      checked={true}
                      className="checkbox checkbox-primary"
                    />
                    <h3 className="pb-2 font-medium text-lg">Gestión simplificada de pedidos</h3>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      checked={true}
                      className="checkbox checkbox-primary"
                    />
                    <h3 className="pb-2 font-medium text-lg">
                      Recopilación de datos y retroalimentación
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      checked={true}
                      className="checkbox checkbox-primary"
                    />
                    <h3 className="pb-2 font-medium text-lg">
                      Flexibilidad y conveniencia para tus clientes
                    </h3>
                  </div>
                </div>
                <img src="/Home/man.png" className="w-1/5 lg:block hidden" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
