"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRef, useState } from "react";
import { Eatable } from "@/app/types/Eatable";
import { uploadFile } from "@/app/firebase/config";
import { parseCookies } from 'nookies';
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const schemaMenu = yup.object().shape({
  title: yup.string().required("Ingrese un nombre para su menu"),
  description: yup.string().required("Debes Ingresar una descripcion"),
  photo: yup.string(),
  price: yup.string().required("Ingrese el precio del producto"),
  menuType: yup.string(),
  name: yup.string()
});

type typeCrud = "CREATE" | "UPDATE" | "DELETE"

export default function FormMenu({counter, typeCrud} : {counter:any,  typeCrud: typeCrud}) {

  const router = useRouter()

const cookies = parseCookies();
const userId = cookies.userId;
const token = cookies.token;
const menuId = cookies.menuId;


  const [menuType, setmenuType] = useState("SWEET");
  const [image, setImage] = useState("")


  const handleImageChange = async (e: any) => {
    const result = uploadFile(e.target.files[0]);
    setImage(`https://firebasestorage.googleapis.com/v0/b/pedidoscrombie.appspot.com/o/${result}?alt=media&token=406f19f0-245c-41f7-bab2-94e65f069f2c&_gl=1*1nd0eqb*_ga*MTQ4Nzg3NjI4Ni4xNjk1NzYyMTA5*_ga_CW55HF8NVT*MTY5ODU4MzEwMy45LjEuMTY5ODU4NjEzNC41OC4wLjA.`)    
  };


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Eatable>({
    resolver: yupResolver(schemaMenu),
  });


  const handleChange = (e: { target: { value: string } }) => {
    if (e.target.value === "dulce") {
      setmenuType("SWEET");
    } else if (e.target.value === "salado") {
      setmenuType("SALTY");
    } else {
      setmenuType("BEBERAGE");
    }
  };

  const onSubmit = handleSubmit(async (information, e: any) => {
    e.preventDefault();
    information.menuType = menuType;
    information.photo = image;      
    if(typeCrud === "CREATE"){
      try {
        const response = await fetch(`https://pedidos-crombie-production.up.railway.app/eatables/${userId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify(information),
        });
        if (response.ok) {
          if (typeof counter === 'function') {
            counter(1);
          }
        } 
      } catch (error) {
        console.error("Error en la solicitud fetch:", error);
      }
    }else if(typeCrud === "UPDATE"){
      try {
        const response = await fetch(`https://pedidos-crombie-production.up.railway.app/eatables/${menuId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify(information),
        });
        if (response.ok) {
          toast.success("Menu actualizado con exito")
          router.push("/user/shop/menumanagement")
        } 
      } catch (error) {
        console.error("Error en la solicitud fetch:", error);
      }
    }
  });



  return (
    <div className="w-max mx-auto max-w-2xl items-center justify-center align-middle">
      <form className="flex flex-col items-center" onSubmit={onSubmit}>
        <div className="block mb-3 w-full">
          <label className="font-medium">Nombre del menu</label>
          <input
            type="text"
            className="input input-bordered input-primary w-full"
            placeholder="Hamburguesas con papas"
            {...register("title")}
            name="title"
          />
          {errors.title?.message ? (
            <p className="h-3 text-red-500">{errors.title?.message}</p>
          ) : (
            <p className="h-3"></p>
          )}
        </div>

        <div className="block mb-3 w-full">
          <label className="font-medium">Nombre del alimento</label>
          <input
            type="text"
            className="input input-bordered input-primary w-full"
            placeholder="Hamburguesa"
            {...register("name")}
            name="name"
          />
        </div>

        <div className="block mb-5 w-full">
          <label className="font-medium">Descipcion del menu</label>
          <input
            type="text"
            className="input input-bordered input-primary w-full"
            placeholder="hamburguesa de 200g con queso cheddar y papas fritas"
            {...register("description")}
            name="description"
          />
          {errors.description?.message ? (
            <p className="h-3 text-red-500">{errors.name?.message}</p>
          ) : (
            <p className="h-3"></p>
          )}
        </div>

        <div className="block mb-5 w-full">
          <label className="font-medium">Precio</label>
          <input
            type="number"
            className="input input-bordered input-primary w-full"
            placeholder="2000"
            {...register("price")}
            name="price"
          />
        </div>

        <div className="mb-5 w-full flex flex-col">
          <label className="font-medium">Ingrese una imagen ilustrativa</label>
          <input
            type="file"
            className="file-input file-input-bordered file-input-primary w-full max-w-xs"
            onChange={handleImageChange}
          />
        </div>

        <div className="block mb-5 w-full">
          <label className="font-medium">Ingrese el tipo de comida</label>
          <select
            className="select select-primary w-full"
            onChange={handleChange}
          >
            <option>dulce</option>
            <option>salado</option>
            <option>bebida</option>
          </select>
        </div>
        <button className="btn btn-primary w-full" type="submit">
          Agregar menu
        </button>
      </form>
    </div>
  );
}
