'use client'

import React from 'react'
import cardStyles from "../../../styles/backflipCard.module.css";
import { Image } from '@/components/atoms';
import { Backend, Frontend } from '@/public/images';

interface IntroductionRightProps {
    className?: string;
}

const IntroductionRight = ({className}: IntroductionRightProps) => {
    
    return (
        <div className={`${className} relative w-full overflow-hidden aspect-square`}>
            <div className={`cursor-pointer w-full h-full p-4 animate-[wiggle_3s_ease-in-out_infinite] ${cardStyles.card}`}>
                <div className={`${cardStyles.cardInner} w-full h-full rounded-lg`}>
                    {/* Front Side */}
                    <div className={`${cardStyles.cardFront} flex flex-col justify-evenly absolute bg-[#1c1b42]`}>
                        <Image 
                            src={Frontend}
                            alt="luthfi sugara" 
                        />
                    </div>

                    {/* Back Side */}
                    <div className={`${cardStyles.cardBack} flex flex-col justify-center absolute bg-[#1c1b42]`}>
                        <Image 
                            src={Backend} 
                            alt="luthfi sugara" 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroductionRight