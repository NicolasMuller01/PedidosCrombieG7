'use client'

import ReviewFormDelivery from '@/app/Components/ReviewForm/ReviewFormDelivery'
import ReviewFormLocal from '@/app/Components/ReviewForm/ReviewFormLocal'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const Page = () => {
  const searchParams = useSearchParams()
  const rol = searchParams.get('rol')
  const name = searchParams.get('name')

  return (
    <>
      {rol === 'DELIVERY' ? <ReviewFormDelivery name={name}/> : <ReviewFormLocal name={name}/>}
    </>
  )
}

export default Page
