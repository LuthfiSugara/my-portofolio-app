'use client'

import Image, { ImageLoader, ImageProps } from 'next/image'
import React, { memo, useEffect, useState } from 'react'
import { ImageError } from '@/public/images';
import './index.css';

interface CustomImageProps extends ImageProps {
    className?: string
    fallbackSrc?: string;
}

const Index = memo(({className, fallbackSrc, ...props}: CustomImageProps) => {
    const [imageSrc, setImageSrc] = useState(props.src),
    [isLoaded, setIsLoaded] = useState<boolean>(false);

    const handleError = () => {
        if (fallbackSrc) {
            setImageSrc(fallbackSrc);
        }
        setImageSrc(ImageError);
    };

    const handleLoad = () => {
        setIsLoaded(true);
    };

    useEffect(() => {
        setImageSrc(props.src);
    }, [props.src]);

    return (
        <div className={`shimmer-wrapper`}>
            {!isLoaded && <div className="shimmer"></div>}
            <Image 
                src={imageSrc} 
                alt={props.alt} 
                loading='lazy'
                width={props.width}
                height={props.height}
                layout={props.layout} 
                objectFit={props.objectFit}
                objectPosition={props.objectPosition}
                placeholder={props.placeholder}
                className={`${className} ${isLoaded ? '' : 'image-hidden'}`}
                onLoad={handleLoad}
                onError={handleError}
            />
        </div>
    )
});

export default Index