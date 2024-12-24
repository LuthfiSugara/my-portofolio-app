'use client'

import React from 'react'
import Link from 'next/link'
import { DropdownMenu } from '@/components/organisms';
import useDisclosure from '@/hooks/useDisclosure';

const Index = () => {
  const {isOpen, onClose, onOpen} = useDisclosure();

  return (
    <header className='p-4 fixed top-0 left-0 right-0 z-50 bg-white' style={{background: 'linear-gradient(rgb(40 28 115), rgb(30, 0, 54))'}}>
      <nav className='w-full xl:w-[1024px] flex justify-between md:justify-center items-center gap-4 mx-auto'>
        <div className="hidden md:flex flex-row justify-around gap-4 items-center border border-white p-4 rounded-xl">
          <Link href="/" className='text-white text-sm md:text-md md:text-2xl font-bold uppercase'>Luthfi Sugara</Link>
          <Link href={process.env.APP_URL + '#resume'} className='text-white text-sm md:text-lg font-medium'>Resume</Link>
          <Link href={process.env.APP_URL + '#documentations'} className='text-white text-sm md:text-lg font-medium'>Documentations</Link>
          <Link href={process.env.APP_URL + '#contact'} className='text-white text-sm md:text-lg font-medium'>Contact</Link>
        </div>
        <div className="block md:hidden">
          <Link href="/" className='text-white text-xl md:text-3xl font-bold uppercase'>Luthfi Sugara</Link>
          <DropdownMenu isOpen={isOpen} onToggle={isOpen ? onClose : onOpen}>
            <div className="flex flex-col gap-4">
              <Link onClick={onClose} href={process.env.APP_URL + '#resume'} className='text-white text-lg md:text-lg font-medium border-b-[1px] border-[#ffffff33] px-4 py-2'>Resume</Link>
              <Link onClick={onClose} href={process.env.APP_URL + '#documentations'} className='text-white text-lg md:text-lg font-medium border-b-[1px] border-[#ffffff33] px-4 py-2'>Documentations</Link>
              <Link onClick={onClose} href={process.env.APP_URL + '#contact'} className='text-white text-lg md:text-lg font-medium border-b-[1px] border-[#ffffff33] px-4 py-2'>Contact</Link>
            </div>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  )
}

export default Index