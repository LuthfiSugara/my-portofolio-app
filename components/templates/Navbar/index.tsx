import Link from 'next/link'
import React from 'react'

const Index = () => {
  return (
    <header>
      <nav className='w-[1024px] flex flex-row justify-around gap-4 items-center mx-auto mt-8 border border-white p-4 rounded-xl'>
        <Link href="/" className='text-white text-2xl font-bold'>Luthfi Sugara</Link>
        <Link href="/" className='text-white text-lg font-medium'>My Work</Link>
        <Link href="/" className='text-white text-lg font-medium'>Experience</Link>
        <Link href="/" className='text-white text-lg font-medium'>Educations</Link>
        <Link href="/" className='text-white text-lg font-medium'>Skills</Link>
        <Link href="/" className='text-white text-lg font-medium'>Documentations</Link>
        <Link href="/" className='text-white text-lg font-medium'>Contact</Link>
      </nav>
    </header>
  )
}

export default Index