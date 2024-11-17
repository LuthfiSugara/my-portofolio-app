'use client'

import React from 'react'
import Link from 'next/link'
import { DropdownMenu } from '@/components/organisms';

const Index = () => {

  return (
    <header>
      <nav className='w-full xl:w-[1024px] flex justify-between md:justify-center items-center gap-4 mx-auto p-4'>
        <Link href="/" className='md:hidden text-white text-2xl md:text-3xl font-bold uppercase'>Luthfi Sugara</Link>
        <div className="hidden md:flex flex-row justify-around gap-4 items-center border border-white p-4 rounded-xl">
          <Link href="/" className='text-white text-sm md:text-md md:text-2xl font-bold uppercase'>Luthfi Sugara</Link>
          <Link href="/" className='text-white text-sm md:text-lg font-medium'>Resume</Link>
          <Link href="/" className='text-white text-sm md:text-lg font-medium'>Documentations</Link>
          <Link href="/" className='text-white text-sm md:text-lg font-medium'>Contact</Link>
        </div>
        <div className="block md:hidden">
          <DropdownMenu>
            <div className="flex flex-col gap-4">
              <Link href="/" className='text-white text-lg md:text-lg font-medium border-b-[1px] border-[#ffffff33] px-4 py-2'>Resume</Link>
              <Link href="/" className='text-white text-lg md:text-lg font-medium border-b-[1px] border-[#ffffff33] px-4 py-2'>Documentations</Link>
              <Link href="/" className='text-white text-lg md:text-lg font-medium border-b-[1px] border-[#ffffff33] px-4 py-2'>Contact</Link>
            </div>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  )
}

export default Index