'use client'
import React, { useState } from 'react'
import FormMenu from '../FormMenu/FormMenu'
import { toast } from 'sonner'
import { FormAddTitleAndTypeLocal } from '../FormAddTitleAndTypeLocal/FormAddTitleAndTypeLocal';

type crudTypes = 'CREATE' | 'UPDATE' | 'DELETE';

export const FormMenuesRegisterLocal = ({ typeCrud }: { typeCrud: crudTypes}) => {

    const [receivedNumber, setReceivedNumber] = useState(0);

    const handleCounter = (value: number) => {
      setReceivedNumber(receivedNumber + value);
    };

    const validatior = () => {
        if(receivedNumber < 3){
            receivedNumber != 0 ? toast.success(`has agregado 1 menu, faltan ${3 - receivedNumber}`) : null
            return <FormMenu typeCrud={typeCrud} counter={handleCounter}/>
        }else{
          return <FormAddTitleAndTypeLocal typeCrud='CREATE'/>
        }
    }

  return (
    <div className='w-full'>
      <h3 className='text-center text-black text-2xl font-medium leading-9 mb-5'>ingrese algunos datos para continuar</h3>
        { validatior() }
    </div>
  )
}
