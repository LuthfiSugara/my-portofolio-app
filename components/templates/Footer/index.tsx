import { Image } from '@/components/atoms'
import { Github, Linkedin } from '@/public/icons'
import Link from 'next/link'
import React from 'react'
import globalContent from "../../../constant/content/global.json";

const Index = () => {
    return (
        <footer className='bg-[#1c1b42] mt-32 px-4 md:px-16'>
            <div className='w-[95%] max-w-[1280px] mx-auto'>
                <div className='flex flex-col md:flex-row gap-4 justify-between items-center py-20'>
                    <div className='w-full md:w-[50%]'>
                        <p className='text-2xl font-bold mb-2'>Luthfi Sugara</p>
                        <p className='text-md'>Full stack Software Developer / Frontend Developer / Backend Developer.</p>
                        <p>Currently working full-time as a Software Developer at 
                            <Link href={globalContent.link.gic} target='__blank' className='underline ml-2'>Global Investa Capital.</Link>
                        </p>
                    </div>

                    <div className='w-full md:w-[50%] space-y-2'>
                        <p className='text-xl font-bold text-start md:text-end'>Social Media</p>
                        <div className="flex flex-wrap justify-start md:justify-end gap-2">
                            <Link href='https://github.com/LuthfiSugara' target="_blank" className={`block p-2 rounded-full my-auto`}>
                                <div className="w-7">
                                    <Image src={Github} alt="github" />
                                </div>
                            </Link>

                            <Link href='https://www.linkedin.com/in/luthfi-sugara/' target="_blank" className={`block p-2 rounded-full my-auto`}>
                                <div className="w-6">
                                    <Image src={Linkedin} alt="linkedin" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='border-t-2 border-white mt-4 py-12'>
                    <p className='text-white text-center'>© Copyright 2024. Made by Luthfi Sugara</p>
                </div>
            </div>
        </footer>
    )
}

export default Index