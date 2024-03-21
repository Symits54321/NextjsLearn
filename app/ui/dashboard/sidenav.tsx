'use client';

import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useState } from 'react';



export default function SideNav() {

  const [slideState,setslideState]= useState(false);


  return (
  
     <div className='flex grow flex-row h-screen md:h-full shrink-0'>
      <div className={clsx("flex h-full flex-col px-3 py-4 md:px-2 shrink-0  overflow-hidden",
      {
        'w-0 px-0 hidden' : slideState === false,
      },
      )}>
      {/* top section  */}
      <Link
        className="mb-2 flex h-30 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className=" h-30 text-white w-40 ">
          <AcmeLogo />
        </div>
      </Link>
      {/* main section  */}
      <div>
         
          <div className="flex grow flex-col justify-between space-x-2  md:space-x-0 md:space-y-2">
            <NavLinks />
            <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
            <form className='flex-shrink-0 h-30'>
              <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                <PowerIcon className="w-6" />
                <div className="hidden md:block">Sign Out</div>
              </button>
            </form>
          </div>
         
      </div>
     
    </div>
     {/* right long slide button   */}
     <div className='w-5 h-100 bg-slate-300 flex flex-col align-middle justify-center'>
      <div className='h-20 bg-blue-500 flex flex-col '>
       <button onClick={() => setslideState(prevState => !prevState)}
            className={clsx('h-5 w-5 p-0 my-auto mx-auto text-white', {
              '-rotate-90 translate-y-1 translate-x-0.5': slideState,
              'rotate-90 -translate-y-1 -translate-x-0.5': !slideState
            })}
            
             >
            
            ^^^^
       </button>
      </div>
     </div>



     </div>
  
  
  );
}
