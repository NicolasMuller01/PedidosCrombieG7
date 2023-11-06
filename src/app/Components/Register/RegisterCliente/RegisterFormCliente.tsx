'use client';

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useState } from 'react';



export default function RegisterFormCliente() {

  const [negocioSeleccionado, setNegocioSeleccionado] = useState("Restaurante")

  const onSubmit = handleSubmit(async (information , e: any) => {
    e.preventDefault()
    information.tipoNegocio = negocioSeleccionado;
    console.log(information );
  });

  return (
    <div className="w-full">
      
    </div>
  )
}


