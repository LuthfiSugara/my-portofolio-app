'use client'

import { Button, Image } from '@/components/atoms'
import useBreakPoint from '@/hooks/useBreakPoint'
import { Download, Github, Linkedin } from '@/public/icons'
import Link from 'next/link'
import React, { useRef } from 'react'

interface IntroductionLeftProps {
    className?: string;
}

const IntroductionLeft = ({className}: IntroductionLeftProps) => {
    const layoutRef = useRef<HTMLDivElement | null>(null);
    const layoutWidth = useBreakPoint(layoutRef);

    return (
        <div className={`${className} w-full space-y-4`}>
            <h1 className="text-4xl md:text-[3rem] font-bold">Hello I'm</h1>
            <h1 className="text-3xl md:text-[3rem] font-bold text-[#A49DED]">Luthfi Sugara</h1>
            <p className="text-justify">Full-Stack Software Developer with 5 years Structuring, Develop and Implementing interactive applications. I have focused on developing scalable and well-documented code. I enjoy working collaboratively but can also run with projects independently. Motivated to advance and expand my skill set through targeted mentorship and challenging projects.</p>

            <div className={`${layoutWidth < 300 ? '' : ''} flex flex-wrap items-center gap-4 sm:gap-3 md:gap-4 mt-8`}>
                <Button 
                    onClick={() => console.log('click')} 
                    className={`flex items-center gap-4 border-2 py-2 px-6 rounded-full`}
                >
                    <p className="text-sm md:text-lg font-semibold">Download CV</p>
                    <div className="w-7">
                        <Image src={Download} alt="download cv" />
                    </div>
                </Button>

                <Link href='https://github.com/LuthfiSugara' target="_blank" className={`relative border-2 p-2 rounded-full my-auto`}>
                    <div className="w-7">
                        <Image src={Github} alt="github" />
                    </div>
                </Link>

                <Link href='https://www.linkedin.com/in/luthfi-sugara/' target="_blank" className={`relative border-2 p-2 rounded-full my-auto`}>
                    <div className="w-6 h-6">
                        <Image src={Linkedin} alt="linkedin" className='' />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default IntroductionLeft