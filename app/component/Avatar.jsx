import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context/context';

const Avatar = () => {
const {userData}=useGlobalContext();
  return (
    <div className='w-full h-full flex flex-col items-center'>
        <h2 className='w-full my-2 text-center'>Welcome to meri panchayat</h2>
        <div className=' rounded-sm border-0 border-red-200 px-4 w-full py-4 h-auto flex flex-row items-center gap-2 '><img className='rounded-full h-[5vh] box-shadow' width={40} height={40} src={userData.profile==""?'/merilogo.png':userData.profile}/><span className='text-black'>{userData?.name}</span></div>
        <div className='flex flex-row w-full items-center justify-end px-0'>
        <Link href="/edit" className='w-20vh hover:text-white hover:bg-sky-700 bg-none border-2 px-10 py-2 rounded-md my-2 text-green-600'>Edit</Link>
        </div>
    </div>
  )
}

export default Avatar