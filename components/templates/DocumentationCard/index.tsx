'use client'

import React from 'react'
import styles from "../../../styles/backflipCard.module.css";
import { Image } from '@/components/atoms';
import { Arrow } from '@/public/icons';
import { Londrina_Shadow } from "next/font/google";
import { Lottie } from '@/components/molecules';
import { Rocket } from '@/public/images';

const londrinaShadow = Londrina_Shadow({
    weight: '400',
    subsets: ['latin'],
});

interface DocumentationCardProps {
    number: string;
    tech: string;
    description: string;
}

const Index = ({number, tech, description}: DocumentationCardProps) => {
    return (
        <div className={`${styles.card} relative cursor-pointer w-[340px] h-[250px]`}>
            <div className={`${styles.cardInner} relative w-full h-full rounded-lg`}>
                {/* Front Side */}
                <div className={`${styles.cardFront} flex flex-col gap-4 bg-[#1c1b42]`}>
                    <div className='space-y-4'>
                        <div className='flex gap-2 justify-between'>
                            <h3 
                                className={`${styles.cardTitle} text-3xl font-bold`}
                                style={{ fontFamily: londrinaShadow.style.fontFamily }}
                            >
                                {number}
                            </h3>
                            <div className={`w-8 bg-white p-2 rounded-full ${styles.icon}`}>
                                <Image
                                    src={Arrow}
                                    alt='documentation'
                                />
                            </div>
                        </div>
                        <h2 className="text-xl font-bold">{tech}</h2>
                    </div>
                    <p className='text-justify'>{description}</p>
                </div>

                {/* Back Side */}
                <div className={`${styles.cardBack} flex flex-col justify-center bg-[#dcdcdc]`}>
                    <div className='flex items-center gap-2 mx-auto'>
                        <p className='text-2xl font-bold'>Coming Soon</p>
                        <Lottie 
                            animationData={Rocket}
                            loop={true}
                            autoplay={true}
                            className='w-12 rotate-45'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index