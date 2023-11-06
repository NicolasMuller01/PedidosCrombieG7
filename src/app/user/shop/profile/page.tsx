'use client'

import { FormAddTitleAndTypeLocal } from '@/app/Components/FormAddTitleAndTypeLocal/FormAddTitleAndTypeLocal';

const page = () => {

  return (
    <div className='flex mx-auto justify-center align-middle items-center mt-28'>
      <FormAddTitleAndTypeLocal typeCrud='UPDATE'/>
    </div>
  )
}

export default page