"use client";
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from 'next/link';
import { getOrdersFromDeliveryFromUser } from '@/app/hooks/getOrdersFromDeliveryFromUser';


type Reseña = {
    title: string,
    description: string,
    puntuaction?: number
}


const schemaMenu = yup.object().shape({

    title: yup.string().required("ingrese un titulo para esta reseña"),
    description: yup.string().required("Debes Ingresar una descripcion"),
    punctuation: yup.number(),
  
  });

export default function ReviewFormLocal({name}:{name: string}) {
  const [rating, setRating] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Reseña>({
    resolver: yupResolver(schemaMenu),
  });

  const handleRatingChange = (value: any) => {
    setRating(value);
  };

  const onSubmit = handleSubmit(async (information, e) => {
    e?.preventDefault();
    information.puntuaction = rating
    console.log(information);
      try {
        const delivery = await getOrdersFromDeliveryFromUser(name)
      } catch (error) {
        console.log(error);
        
      }  
})

  return (
    <div className="container mx-auto max-w-screen-lg pl-10 pr-10 m-28">
    <form onSubmit={onSubmit}>
    <h3 className="text-3xl font-semibold text-center">Reseña al Local {name}</h3>

      <div className="flex-col items-center justify-center">
        <div className="pt-8 space-y-2">
          <p>Titulo</p>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            id="title"
            placeholder="Comida Riquisima"
            {...register("title")}
            name="title"
          />
        </div>
        {errors.title?.message ? <p className="h-3 text-red-500">{errors.title?.message}</p> : <p className="h-3"></p>}

        <div className="pt-8">
          <div className="rating space-x-10">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value}>
                <input
                  type="radio"
                  name="puntuaction"
                  className={`mask mask-star ${value <= rating ? "bg-yellow-400" : "bg-black"}`}
                  checked={rating === value}
                  onChange={() => handleRatingChange(value)}
                />
              </label>
            ))}
          </div>
        </div>

        <div className="pt-8">
          <div className="form-control space-y-2">
            <p>Reseña</p>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Tu reseña"
              {...register("description")}
              name="description"
            ></textarea>
          </div>
          {errors.description?.message ? <p className="h-3 text-red-500">{errors.description?.message}</p> : <p className="h-3"></p>}
        </div>

        <div className="flex items-center justify-end pt-10 space-x-4">
          <Link href='/user/client/historial' className="btn btn-active bg-red-500">Cancelar</Link>
          <button className="btn btn-active bg-green-400" type='submit'>Enviar</button>
        </div>
      </div>
    </form>
    </div>
  );
}
