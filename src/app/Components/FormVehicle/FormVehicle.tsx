"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import SelectformInputVehicle from "./SelectformInputVehicle";
import { Vehicle } from "@/app/types/Vehicle";
import { parseCookies } from "nookies";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


const schemaVehicle = yup.object().shape({
    name: yup.string().required("Por favor ingresa el nombre de su vehículo"),
    type: yup.string()
      .required("Debes seleccionar un vehículo")
      .default("Moto"),
    patent: yup.string()
      .required("Por favor ingresa su patente")
      .matches(/^\d{6}$/, "La patente debe contener exactamente 6 dígitos"),
  });

  type crudTypes = 'CREATE' | 'UPDATE' | 'DELETE';

 

export default function FormVehicle({ typeCrud }: { typeCrud: crudTypes}) {
  const cookies = parseCookies();
  const userId = cookies.userId;
  const token = cookies.token;

  const router = useRouter()
  const [data, setData] = useState();

  const [vehiculoSeleccionado, setvehiculoSeleccionado] = useState({
    vehiculo: "MOTO",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Vehicle>({
    resolver: yupResolver(schemaVehicle),
  });

  const funcionVehiculoSeleccionado = (v: string) => {
    setvehiculoSeleccionado({ vehiculo: v });
  };

  const onSubmit = handleSubmit(async (information) => {
    information.type = vehiculoSeleccionado.vehiculo;
    
    try {
      const response = await fetch(
        `https://pedidos-crombie-production.up.railway.app/vehicles/${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify(information),
        }
      );
      if (response.ok) {
        const responseData = await response.json();
        setData(responseData);
        
        
        
        if(typeCrud === 'CREATE'){
          toast.success("has iniciado sesion correctamente")
          router.push("/user/delivery")
        }

      } else {
        console.error("Error al enviar datos a la API:", response.statusText);
      }
    } catch (error) {
      console.error("Error en la solicitud fetch:", error);
    }
  });

  return (
    <div className="w-full">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-4 w-full items-center"
      >
        <div>
          <h3 className="text-center text-black text-2xl font-medium leading-9">
            Ingrese datos de su vehiculo para continuar 🛵🍕
          </h3>
        </div>

        <div className="w-full">
          <div className="block">
            <label htmlFor="">Nombre del vehiculo</label>
          </div>
          <input
            id="name"
            className="input input-bordered input-primary w-full"
            type="text"
            {...register("name")}
            name="name"
            placeholder="Motomel 125"
          />
          {errors.name?.message ? (
            <p className="h-3 text-red-500">{errors.name?.message}</p>
          ) : (
            <p className="h-3"></p>
          )}
        </div>

        <div className="w-full">
          <div className="block">
            <label htmlFor="">Numero de Patente</label>
          </div>
          <input
            id="patent"
            className="input input-bordered input-primary w-full"
            type="text"
            {...register("patent")}
            name="patent"
            placeholder="abc123"
          />
          {errors.patent?.message ? (
            <p className="h-3 text-red-500">{errors.patent?.message}</p>
          ) : (
            <p className="h-3"></p>
          )}
        </div>

        <div className="w-full">
          <SelectformInputVehicle
            onSelectChange={funcionVehiculoSeleccionado}
          />
        </div>

        <button className="btn btn-primary w-full" color="purple" type="submit">
          Registrate
        </button>
      </form>
    </div>
  );
}
