import Link from 'next/link';
import React from 'react'
import { BsFilePostFill } from "react-icons/bs";
function navbar() {
  return (
<div className=" font-mono w-full flex justify-between items-center shadow-lg p-2 z-50 bg-slate-800 rounded-sm ">

  <Link href="/">   <div className=" text-2xl  text-slate-200 "><BsFilePostFill/></div></Link>
   
  <Link href="/createPost" className=' text-slate-200  text-xl'> Create Post</Link>
    </div>
  )
}

export default navbar