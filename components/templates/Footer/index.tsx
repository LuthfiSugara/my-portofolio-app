import { Image } from '@/components/atoms'
import { Github, Linkedin } from '@/public/icons'
import Link from 'next/link'
import React from 'react'

const Index = () => {
    return (
        <footer className='bg-[#1c1b42] mx-auto mt-20 px-4 md:px-16 pt-12'>
            <div className='flex flex-col md:flex-row gap-4 justify-between items-center mb-12'>
                <div className='w-full md:w-[50%]'>
                    <p className='text-2xl font-bold'>Luthfi Sugara</p>
                    <p className='text-md'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>

                <div className='w-full md:w-[50%] space-y-2'>
                    <p className='text-xl font-bold text-start md:text-end'>Social Media</p>
                    <div className="flex flex-wrap justify-start md:justify-end gap-4">
                        <Link href='https://github.com/LuthfiSugara' target="_blank" className={`relative border-2 p-2 rounded-full my-auto`}>
                            <div className="w-7">
                                <Image src={Github} alt="github" />
                            </div>
                        </Link>

                        <Link href='https://www.linkedin.com/in/luthfi-sugara/' target="_blank" className={`relative border-2 p-2 rounded-full my-auto`}>
                            <div className="w-6">
                                <Image src={Linkedin} alt="linkedin" className='' />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='border-t-2 border-white mt-4 py-4'>
                <p className='text-white text-center'>© Copyright 2024. Made by Luthfi Sugara</p>
            </div>
        </footer>
    )
}

export default Index