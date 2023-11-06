import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { useState } from 'react';
import { RegisterRepartidor } from './RegisterRepartidor/RegisterRepartidor';
import { RegisterLocal } from "./RegisterLocal/RegisterLocal";
import { User } from "@/app/types/User"
import SelectInputUserType from "../SelectInputUserType/SelectInputUserType";
import { toast } from "sonner";
import router from "next/router";
import { useRouter } from "next/navigation";


const schema = yup
  .object({
    name: yup.string()
      .required("por favor ingresa su nombre"),
    lastName: yup.string()
      .required("por favor ingresa su apellido"),
    email: yup.string()
      .required("Por favor ingrese su correo electrónico")
      .email()
      .max(100, "Máximo 100 caracteres para su correo electrónico."),
    phoneNumber: yup.string()
      .required("Por favor ingrese su número de teléfono")
      .min(9, "Su número debe tener al menos 9 caracteres")
      .max(15, "Máximo 30 caracteres para su número de teléfono."),
    password: yup.string()
      .required("Por favor ingrese su contraseña")
      .min(5, "Este campo debe tener al menos 5 caracteres")
      .max(30, "Este campo debe tener un máximo de 30 caracteres"),
    role: yup
      .string()
      .required("Debe seleccionar una opción")
      .default("CLIENT"),
    createdAt: yup
    .date().default(() => new Date()),
  })
  .required("Este campo es obligatorio.");

export default function RegisterForm() {

  const [rol, setRol] = useState("CLIENT");
  const [formValue, setFormValue] = useState(false);
  const [data, setData] = useState("CLIENT");
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: yupResolver(schema)
  })

  function handleSelectChange(value: string) {
    setRol(value);
  }

  const onSubmit = handleSubmit(async (information, e) => {
    e?.preventDefault();
    information.role = rol
    setFormValue(true)
    setData(rol)
    //enviar estos datos a la api para crear el objeto
    try {
      const response =  fetch('https://pedidos-crombie-production.up.railway.app/auth/register', {
        method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(information)
        })
      if ((await response).ok) {
        toast.success("te has registrado correctamente, ahora inicia sesion")
        router.push("/login")
      } 
    } catch (error) {
      console.log(error);
    }
  })

  return (
    <div className="max-w-xl w-full bg-base-100">

      <form className={formValue === false ? `flex flex-col gap-4 w-full items-center` : "hidden"} onSubmit={onSubmit}>
        <div>
          <h3 className='text-center text-black text-2xl font-medium leading-9'>Registrate para comenzar 🍕</h3>
        </div>

        <div className="w-full">
          <div className="block">
            <label htmlFor="">Ingrese su nombre</label>
          </div>
          <input
            id="name"
            className="input input-bordered input-primary w-full"
            type="name"
            {...register("name")}
            name="name"
            placeholder="Nombre"
          />
          {errors.name?.message ? <p className="h-3 text-red-500">{errors.name?.message}</p> : <p className="h-3"></p>}
        </div>

        <div className="w-full">
          <div className="block">
            <label htmlFor="">Ingrese su apellido</label>
          </div>
          <input
            id="apellido"
            className="input input-bordered input-primary w-full"
            type="apellido"
            {...register("lastName")}
            name="lastName"
            placeholder="Apellido"
          />
          {errors.lastName?.message ? <p className="h-3 text-red-500">{errors.lastName?.message}</p> : <p className="h-3"></p>}
        </div>

        <div className="w-full">
          <div className="block">
            <label htmlFor="">Ingrese su email</label>
          </div>
          <input
            id="email"
            className="input input-bordered input-primary w-full"
            type="email"
            {...register("email")}
            name="email"
            placeholder="Email"
          />
          {errors.email?.message ? <p className="h-3 text-red-500">{errors.email?.message}</p> : <p className="h-3"></p>}
        </div>

        <div className="w-full">
          <div className="block">
            <label htmlFor="">Ingrese su numero de telefono</label>
          </div>
          <input
            id="tel"
            className="input input-bordered input-primary w-full"
            type="tel"
            {...register("phoneNumber")}
            name="phoneNumber"
            placeholder="Telefono"
          />
          {errors.phoneNumber?.message ? <p className="h-3 text-red-500">{errors.phoneNumber?.message}</p> : <p className="h-3"></p>}
        </div>

        <div className="w-full">
          <div className="mb-2 block">
            <label htmlFor="">Ingrese su contraseña</label>
          </div>
          <input
            id="password"
            className="input input-bordered input-primary w-full"
            type="password"
            {...register("password")}
            name="password"
            placeholder="contraseña"
          />
          {errors.password?.message ? <p className="h-3 text-red-500">{errors.password?.message}</p> : <p className="h-3"></p>}
        </div>


        <SelectInputUserType title="Registrarme como"
          onSelectChange={handleSelectChange}
        />

        <button type="submit" className="btn btn-primary w-full">Continuar</button>

      </form>
    </div>
  )
}


