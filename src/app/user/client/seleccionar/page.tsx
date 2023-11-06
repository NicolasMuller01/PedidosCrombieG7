"use client";
import { useEffect, useState } from "react";
import { getAddress } from "./getAddres";
import { getLocalByCity } from "./getLocalByCity";
import { parseCookies, setCookie } from "nookies";
import Link from "next/link";
import { array } from "yup";

type Menu = {
  idEatable: string;
  title: string;
  description: string;
  photo: string;
  price: number;
  name: string;
  menuType: string;
};

type Address = {
  idAddress: string;
  country: string;
  state: string;
  CP: string;
  city: string;
  street: string;
  number: string;
  apartment: string;
};

type Local = {
  id: string;
  localName: string;
  description: string;
  type: string;
  menus: Menu[];
  address: Address;
};

export default function () {
  const cookies = parseCookies();
  const userId = cookies.userId;
  const token = cookies.token;

  const [validLocal, setValidLocal] = useState<Local[]>();

  const [validMenu, setValidMenu] = useState<Local[]>();

  const [filtredData, setFiltredData] = useState<Local[]>();

  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedAddress = await getAddress();
        const { country, state, city } = fetchedAddress.address;
        const fetchedCity = await getLocalByCity({ country, state, city });
        setValidLocal(fetchedCity);
      } catch (error: any) {
        console.error("Error al obtener la dirección:", error.message);
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const bsq = e.target.value
    setBusqueda(bsq);
    handleSearch()
    nameMenuSelected()
  };

  const handleSearch = async () => {

    const element = validLocal?.filter( (parametros) => {
      if(parametros.localName.toLowerCase().includes(busqueda.toLowerCase())){        
        return parametros
      }
    })
    setFiltredData(element); 
  };

  const nameMenuSelected = () =>{

    const arr: Local[] = []

    const element = validLocal?.filter( (parametros) => {
      parametros.menus.forEach(element => {    
        if(element.name.toLowerCase().includes(busqueda.toLowerCase())){       
          arr.push(parametros)
        }
      });
    }) 

    const filteredData = arr.filter((item, index, self) => {
      const lowerCaseName = item.localName.toLowerCase();
      // Comparamos en minúsculas
      return self.findIndex((i) => i.localName.toLowerCase() === lowerCaseName) === index;
    });

    setValidMenu(filteredData); 
  }

  const saveDataLocal = (data) => {
    setCookie(null, 'localName', data.localName , {
      maxAge: 60 * 60 * 24 * 7, 
      path: '/',
    });
  }

  return (

    <div className="container mx-auto max-w-screen-lg pl-10 pr-10 m-28">
      <div className="flex justify-between items-center mt-5">
        <input
          type="text"
          placeholder="Nombre del restaurante"
          className="input input-bordered w-full"
          onChange={handleInputChange}
        />
      </div>

      <div className="grid grid-cols-3  md:grid-cols-6 gap-4 pt-5">
        <div className="md:col-span-1 bg-orange-400 rounded-xl p-2 hover:bg-indigo-500 duration-300">
     
            <div className="flex flex-col items-center justify-center">
              <img src="/UserLanding/burguer.svg" className="w-1/2" alt="" />
              <h3 className="text-base font-bold text-white">Restaurante</h3>
            </div>
      
        </div>

        <div className="md:col-span-1 bg-green-500 rounded-xl p-2 hover:bg-indigo-500 duration-300">
         
            <div className="flex flex-col items-center justify-center">
              <img src="/UserLanding/groceries.svg" className="w-1/2" alt="" />
              <h3 className="text-base md:text-xl font-bold text-white">
                Supermercado
              </h3>
            </div>
      
        </div>

        <div className="md:col-span-1 bg-yellow-500 mb-0 p-2 rounded-md hover:bg-indigo-500 duration-300">
  
            <div className="flex flex-col items-center justify-center">
              <img src="/UserLanding/iceCream.svg" className="w-1/2" alt="" />
              <h3 className="text-base md:text-xl font-bold text-white">
                Heladeria
              </h3>
            </div>

        </div>

        <div className="md:col-span-1 bg-green-500 mb-0 p-2 rounded-md hover:bg-indigo-500 duration-300">
       
            <div className="flex flex-col items-center justify-center h-full">
              <img src="/UserLanding/drinks.svg" className="w-1/2" alt="" />
              <h3 className="text-base md:text-xl font-bold text-white">
                Bebida
              </h3>
            </div>
    
        </div>

        <div className="md:col-span-1 bg-red-500 mb-0 p-2 rounded-md hover:bg-indigo-500 duration-300">
  
            <div className="flex flex-col items-center  justify-center">
              <img src="/UserLanding/bakery.svg" className="w-1/2" alt="" />
              <h3 className="text-base md:text-xl font-bold text-white">
                Panaderia
              </h3>
            </div>

        </div>

        <div className="md:col-span-1 bg-purple-500 p-2 mb-0 text-center rounded-md hover:bg-indigo-500 duration-300">
            <div className="flex flex-col items-center justify-center">
              <img src="/UserLanding/pharmacy.svg" className="w-1/2" alt="" />
              <h3 className="text-base md:text-xl font-bold text-white">
                Farmacia
              </h3>
            </div>
        </div>
      </div>

      <div className="space-y-4 mt-5 mb-5 ">
        {!validLocal ? (
          <div className="items-center mx-auto">
            <p className="text-3xl text-red-500 font-bold text-center m-10">No se han encontrado locales en tu zona</p>
          </div>
        ) : (
          <>
          <h3 className="text-2xl  m-10 font-ligth text-center">Locales disponibles en tu ciudad</h3>
            {busqueda === "" ? 
            validLocal.map((data) => (
              <button onClick={() => saveDataLocal(data)}>
                <Link href={`/user/client/seleccionar/${data.id}`}>
                  <div
                    className="flex items-center justify-between border rounded-xl p-4 m-2 shadow-xl transition-transform hover:scale-[1.05] duration-500"
                    key={data.id}
                  >
                    <img
                      src="/UserLanding/restaurant.svg"
                      className="w-1/12 border rounded-full p-1"
                      alt=""
                    />
                    <div>
                      <h1 className="text-xl font-semibold">{data.localName}</h1>
                      <p>Descuento 20%</p>
                      <p>15-20min - Envio <b>GRATIS</b></p>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <img src="/UserLanding/star.svg" className="w-8" alt="" />
                      <p className="text-lg">4</p>
                    </div>
                  </div>
                </Link>
              </button>
            ))
          :
          filtredData?.map((data) => (
            <button onClick={() => saveDataLocal(data)}>  
              <Link href={`/user/client/seleccionar/${data.id}`}>
                <div
                  className="flex items-center justify-between border shadow-xl transition-transform hover:scale-[1.05] duration-500 rounded-xl p-4"
                  key={data.id}
                >
                  <img
                    src="/UserLanding/restaurant.svg"
                    className="w-1/12 border rounded-full p-1"
                    alt=""
                  />
                  <div>
                    <h1>{data.localName}</h1>
                    <p>Descuento 20%</p>
                    <p>15-20min - Envio <b>GRATIS</b></p>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <img src="/UserLanding/star.svg" className="w-8" alt="" />
                    <p className="text-lg">4</p>
                  </div>
                </div>
              </Link>
            </button>
          ))}
          </>
        )}
      </div>
      <h3 className="text-2xl font-light text-center m-10">Locales que poseen la comida que buscas</h3>
      {validMenu ? 
       validMenu.map((data) => (
        <button onClick={() => saveDataLocal(data)}>  
          <Link href={`/user/client/seleccionar/${data.id}`}>
            <div
              className="bg-gray-500 flex items-center justify-between border shadow-xl transition-transform hover:scale-[1.05] duration-500 rounded-xl p-4"
              key={data.id}
            >
              <img
                src="/UserLanding/restaurant.svg"
                className="w-1/12 border rounded-full p-1"
                alt=""
              />
              <div>
                <h1>{data.localName}</h1>
                <p>Descuento 20%</p>
                <p>15-20min - Envio <b>GRATIS</b></p>
              </div>
              <div className="flex items-center justify-center gap-3">
                <img src="/UserLanding/star.svg" className="w-8" alt="" />
                <p className="text-lg">4</p>
              </div>
            </div>
          </Link>
        </button>
      ))
      : <div className="text-red-400 text-xl font-bold text-center">no se ha encontrado ese menu en ningun local por tu zona</div>
    }
    </div>
  );
}
