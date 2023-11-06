'use client'

import FormMenu from '@/app/Components/FormMenu/FormMenu'
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react'
import { toast } from 'sonner';

const Page = () => {
  const router = useRouter()
  const [receivedNumber, setReceivedNumber] = useState(0);

  const handleCounter = (value: number) => {
    setReceivedNumber(receivedNumber + value);
  };

  const validator = () => {
    if (receivedNumber === 1) {
      toast.success("menu agregado exitosamente")
      router.push("/user/shop/menumanagement")
    }
  }

  // Llama a `validator` cada vez que `receivedNumber` cambie
  useEffect(() => {
    validator();
  }, [receivedNumber]);

  return (
    <div className='flex justify-center align-middle mt-28'>
      <FormMenu typeCrud='CREATE' counter={handleCounter} />
    </div>
  )
}

export default Page;
