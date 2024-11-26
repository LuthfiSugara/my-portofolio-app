'use client'

import React, { useState } from 'react'
import styles from "../styles/introductionRight.module.css";
import { Image } from '@/components/atoms';
import { Backend, Frontend } from '@/public/images';

interface IntroductionRightProps {
    className?: string;
}

const IntroductionRight = ({className}: IntroductionRightProps) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className={`${className} w-full`}>
            <div
                className={`${styles.imageContainer}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setIsHovered(true)}
            >
                <Image 
                    src={Frontend} 
                    alt="luthfi sugara" 
                    className={`${styles.image} ${isHovered ? styles.hidden : styles.visible}`}
                />
                <Image 
                    src={Backend} 
                    alt="luthfi sugara" 
                    className={`${styles.image} ${isHovered ? styles.visible : styles.hidden}`}
                />
            </div>
        </div>
    )
}

export default IntroductionRight