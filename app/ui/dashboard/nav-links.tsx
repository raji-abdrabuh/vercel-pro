"use client"
import React from 'react'
import Link from 'next/link'
import links from '@/app/dashboard/links'
import clsx from 'clsx';
import {GlobeAltIcon} from "@heroicons/react/24/outline"
import { usePathname } from 'next/navigation';


function NavLinks() {
  const pathname=usePathname();
  
  console.log(pathname)

  return (
    <div className=' text-center w-100 text-xl '>
       <div className='w-full bg-blue-400 h-30 content-center' >
    <div className='flex p-4 content-center items-center text-lg'>
    <GlobeAltIcon className='w-20 h-20 '/>
    <span className='text-3xl'>vercel pro</span>
    </div>
  </div>
   {links.map((link)=>{
       const LinkIcon = link.icon;
       console.log(link.href)
        return(
 <Link
  key={link.name}
  href={link.href}
  className={clsx(
    'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
   {"bg-yellow-600 color-white-600":link.href+'/'===pathname},
  )}
>
  <LinkIcon className="'w-10 h-10 mr-5'"/>
  <p>{link.name}</p>
</Link>


        )})}
      </div>)}
  
 

export default NavLinks