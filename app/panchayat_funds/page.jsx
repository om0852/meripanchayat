"use client"
import React from 'react'
import { useGlobalContext } from '../context/context'

const Page = () => {
    const {setOpenSidebar}=useGlobalContext();
  return (
    <div onClick={()=>setOpenSidebar(false)} className='w-full h-[90vh]'>Page</div>
  )
}

export default Page