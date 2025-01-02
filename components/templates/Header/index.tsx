'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import useDisclosure from '@/hooks/useDisclosure';
import styles from './index.module.css';
import { Image } from '@/components/atoms';
import { Close, Menu } from '@/public/icons';

const Index = () => {
  const {isOpen, onClose, onOpen} = useDisclosure(),
  [isPageScrolled, setIsPageScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsPageScrolled(true);
    } else {
      setIsPageScrolled(false);
    }
  };

  return (
    <header className='p-4 fixed top-0 left-0 right-0 z-50 bg-white' id='navbar' style={{background: isPageScrolled ? '#0c0340' : 'transparent'}}>
      <nav className='w-full xl:w-[1024px] flex justify-between md:justify-center items-center gap-4 mx-auto'>
        <div className="hidden md:flex flex-row justify-around gap-4 items-center border border-white p-4 rounded-xl">
          <Link href="/" className='text-white text-sm md:text-md md:text-2xl font-bold uppercase'>Luthfi Sugara</Link>
          <Link href={process.env.APP_URL + '#resume'} className='text-white text-sm md:text-lg font-medium'>Resume</Link>
          <Link href={process.env.APP_URL + '#documentations'} className='text-white text-sm md:text-lg font-medium'>Documentations</Link>
          <Link href={process.env.APP_URL + '#contact'} className='text-white text-sm md:text-lg font-medium'>Contact</Link>
        </div>
        <div className="block md:hidden">
          <Link href="/" className='text-white text-xl sm:text-2xl md:text-3xl font-bold uppercase'>Luthfi Sugara</Link>
          <button onClick={isOpen ? onClose : onOpen} className={styles.menuIcon}>
            <div className="w-6">
              <Image
                src={isOpen ? Close : Menu}
                alt='menu'
              />
            </div>
          </button>

          <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
            <ul className={styles.menuItems}>
              <div className="flex flex-col gap-4">
                <Link onClick={onClose} href={process.env.APP_URL + '#resume'} className='text-white text-lg md:text-lg font-medium border-b-[1px] border-[#ffffff33] px-4 py-2'>Resume</Link>
                <Link onClick={onClose} href={process.env.APP_URL + '#documentations'} className='text-white text-lg md:text-lg font-medium border-b-[1px] border-[#ffffff33] px-4 py-2'>Documentations</Link>
                <Link onClick={onClose} href={process.env.APP_URL + '#contact'} className='text-white text-lg md:text-lg font-medium border-b-[1px] border-[#ffffff33] px-4 py-2'>Contact</Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Index