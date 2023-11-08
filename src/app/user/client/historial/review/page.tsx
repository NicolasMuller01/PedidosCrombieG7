'use client'

import ReviewForm from '@/app/Components/ReviewForm/ReviewForm'
import { useSearchParams } from 'next/navigation'
import React from 'react'


const page = () => {

const searchParams = useSearchParams()
  const rol = searchParams.get('rol')
  const name = searchParams.get('name')

  return (
    <>
    <ReviewForm rol={rol} name={name}/>
    </>
  )
}

export default page