"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { Address } from "@/app/types/Address";
import SelectInputProvincia from "./SelectInputProvincia";
import SelectInputCiudades from "./SelectFormCiudades";
import { parseCookies } from "nookies";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const schemaAddress = yup.object().shape({
  country: yup.string().default("Argentina"),
  state: yup.string().required().default("MISIONES"),
  city: yup.string().required().default("APOSTOLES"),
  CP: yup
    .string()
    .required("por favor ingresa un codigo postal")
    .min(1, "Debe ingresar un codigo postal")
    .max(15, "Ese codigo postal es demasiado largo"),
  street: yup
    .string()
    .required("por favor ingresa una calle")
    .min(3, "Debe ingresar una calle valida")
    .max(50, "Esa calle existe?"),
  number: yup.string().required("Ingrese el numero de su calle"),
  apartment: yup.string(),
});

type crudTypes = 'CREATE' | 'UPDATE' | 'DELETE';

export default function FormAdress({ type, typeCrud}: { type: string, typeCrud: crudTypes }) {
  const cookies = parseCookies();
  const userId = cookies.userId;
  const token = cookies.token;
  const router = useRouter()

  const [provincia, setProvincia] = useState({ provincia: "MISIONES", id: 54 });
  const [ciudad, setCiudad] = useState("APOSTOLES");
  const [data, setData] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Address>({
    resolver: yupResolver(schemaAddress),
  });

  function handleSelectChangeProvincia(value: any) {
    setProvincia(value);
  }

  function handleSelectChangeCiudad(value: string) {
    setCiudad(value);
  }

  const onSubmit = handleSubmit(async (information, e) => {
    e?.preventDefault();
    information.state = provincia.provincia.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s/g, '').toUpperCase();
    information.city = ciudad.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s/g, '').toUpperCase();
    information.country = "Argentina";

    if (type === "CLIENT" && typeCrud === 'CREATE') {
      try {
        const response = await fetch(
          `https://pedidos-crombie-production.up.railway.app/clients/${userId}/adress`,
          {
            method: "PATCH",
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
          toast.success("Cuenta creada con exito")
          router.push("/user/client")
        } else {
          console.error("Error al enviar datos a la API:", response.statusText);
        }
      } catch (error) {
        console.error("Error en la solicitud fetch:", error);
      }

    } else if (type === "LOCAL" && typeCrud === "CREATE") {
      try {
        const response = await fetch(
          `https://pedidos-crombie-production.up.railway.app/locals/${userId}/address`,
          {
            method: "PATCH",
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
          toast.success("Cuenta creada con exito")
          router.push("/user/shop")
        } else {
          console.error("Error al enviar datos a la API:", response.statusText);
        }
      } catch (error) {
        console.error("Error en la solicitud fetch:", error);
      }
    }
  });

  return (
    <div className="w-full">
      <form className="flex flex-col items-center gap-4" onSubmit={onSubmit}>
        <div>
          <h3 className="text-center text-black text-2xl font-medium leading-9">
            Direccion
          </h3>
        </div>

        <SelectInputProvincia onSelectChange={handleSelectChangeProvincia} />

        <SelectInputCiudades
          onSelectChangeCiudad={handleSelectChangeCiudad}
          id={provincia.id}
        />

        <div className="w-full">
          <div className="block">
            <label>Ingrese su codigo postal</label>
          </div>
          <input
            type="text"
            placeholder="3016"
            className="input input-bordered input-primary w-full"
            {...register("CP")}
          />
          {errors.CP?.message ? (
            <p className="h-3 text-red-500">{errors.CP?.message}</p>
          ) : (
            <p className="h-3"></p>
          )}
        </div>

        <div className="w-full">
          <div className="block">
            <label>Ingrese el nombre de su calle</label>
          </div>
          <input
            type="text"
            placeholder="calle 17"
            className="input input-bordered input-primary w-full"
            {...register("street")}
          />
          {errors.street?.message ? (
            <p className="h-3 text-red-500">{errors.street?.message}</p>
          ) : (
            <p className="h-3"></p>
          )}
        </div>

        <div className="w-full">
          <div className="block">
            <label>Ingrese la altura en la cual vive</label>
          </div>
          <input
            type="text"
            placeholder="2578"
            className="input input-bordered input-primary w-full"
            {...register("number")}
          />
          {errors.number?.message ? (
            <p className="h-3 text-red-500">{errors.number?.message}</p>
          ) : (
            <p className="h-3"></p>
          )}
        </div>

        <div className="w-full">
          <div className="block">
            <label>numero de departamento</label>
          </div>
          <input
            type="text"
            placeholder="1A"
            className="input input-bordered input-primary w-full"
            {...register("apartment")}
          />
        </div>

        <button className="btn btn-primary w-full" type="submit">
          Address
        </button>
      </form>
    </div>
  );
}
