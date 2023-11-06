'use client'

import { useParams } from 'next/navigation';
import React from 'react'
import FormMenu from "@/app/Components/FormMenu/FormMenu";
import { setCookie } from 'nookies';

const page = () => {
const id = useParams().id;

setCookie(null, 'menuId', id.toString(), {
    maxAge: 60 * 60 * 24 * 7, 
    path: '/',
});

  return (
    <div className='flex flex-col justify-center align-middle items-center mt-28'>
        <h3 className='text-xl mb-10'>Selecciona un menu para editar</h3>
        <FormMenu typeCrud='UPDATE'/>
    </div>
  )
}

export default page