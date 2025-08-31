
import { GlobeAltIcon,ArrowLongRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

import srcimage from "./dashboard.jpg"
 
export default function Page() {
  return (
  <div className='w-full bg-blue-400 h-30 content-center' >
    <div className='flex p-4 content-center items-center text-lg'>
    <GlobeAltIcon className='w-20 h-20 '/>
    <span className='text-3xl'>vercel pro</span>
    </div>
    <div className='full flex mt-5 p-10 justify-center'>
        <div className='w-300 h-full columns-md mt-50 text-xl'>   
              <h1 className='text-lg font-bold'>welcome to vercel pro</h1>
              <p>this is the example  <a className='text-blue-600 cursor-pointer'href='https://nextjs.org/'>next.js learn course</a>, </p>
              <p>brought to you by vercel</p>
              <a className='flex 'href='/dashboard'>
              <button className='flex  items-center bg-blue-400 cursor-pointer rounded-md p-1 mt-2 h-10 text-sm'> login <ArrowLongRightIcon className='w-10 h-10'/></button>
              </a>
        </div>
<Image src={srcimage} alt="dashboard image"width={800}height={1000}/>
      </div>
  </div>
  )
}