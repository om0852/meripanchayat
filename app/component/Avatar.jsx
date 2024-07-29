import React, { useEffect, useState } from 'react'

const Avatar = () => {
    const [userData,setUserData]=useState(null);
const fetchUserData=async()=>{
    const response = await fetch("/api/user",{
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({email:localStorage.getItem("email")})
    });
    if(response.status==200){
        const res=await response.json()
        console.log(res)
        setUserData(res)
    }
    
}

    useEffect(()=>{
        fetchUserData();
    },[])
  return (
    <div className='w-full h-full flex flex-col items-center'>
        <h2 className='w-full my-2 text-center'>Welcome to meri panchayat</h2>
        <div className=' rounded-sm border-0 border-red-200 px-4 w-full py-4 h-auto flex flex-row items-center gap-2 '><img className='rounded-full' width={40} src='/merilogo.png'/><span className='text-black'>{userData?.name}</span></div>
        <div className='flex flex-row w-full items-center justify-end px-0'>
        <button className='w-20vh bg-none border-2 px-10 py-2 rounded-md my-2 text-green-600'>Edit</button>
        </div>
    </div>
  )
}

export default Avatar