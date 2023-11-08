'use client'

import ReviewFormDelivery from '@/app/Components/ReviewForm/ReviewFormDelivery'
import ReviewForm from '@/app/Components/ReviewForm/ReviewFormDelivery'
import { useSearchParams } from 'next/navigation'
import React from 'react'


const page = () => {

const searchParams = useSearchParams()
  const rol = searchParams.get('rol')
  const name = searchParams.get('name')

  return (
    <>
    {rol === 'DELIVERY' ? <ReviewFormDelivery name={name}/> : null}
    </>
  )
}

export default page