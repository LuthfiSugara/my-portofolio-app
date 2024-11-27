'use client'

import React from 'react'
import styles from "../styles/myDocumentations.module.css";
import { Image } from '@/components/atoms';
import { Arrow } from '@/public/icons';
import { Londrina_Shadow } from "next/font/google";

const londrinaShadow = Londrina_Shadow({
    weight: '400',
    subsets: ['latin'],
});


const MyDocumentations = () => {

    return (
        // <div className={styles.card}>
        <div className={`relative cursor-pointer w-[400px] h-[250px] ${styles.card}`}>
            <div className={`${styles.cardInner} relative w-full h-full rounded-lg`}>
                {/* Front Side */}
                <div className={`${styles.cardFront} flex flex-col justify-evenly`}>
                    <div className='space-y-4'>
                        <div className='flex gap-2 justify-between'>
                            <h3 
                                className={`${styles.cardTitle} text-3xl font-bold`}
                                style={{ fontFamily: londrinaShadow.style.fontFamily }}
                            >
                                01
                            </h3>
                            <div className={`w-8 bg-white p-2 rounded-full ${styles.icon}`}>
                                <Image
                                    src={Arrow}
                                    alt='documentation'
                                />
                            </div>
                        </div>
                        <h2 className="text-xl font-bold">GIT</h2>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>

                {/* Back Side */}
                <div className={`${styles.cardBack} flex flex-col justify-center`}>
                    <div className='text-2xl font-bold mx-auto'>
                        Coming Soon 🚀
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyDocumentations