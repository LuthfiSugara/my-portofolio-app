'use client'

import Image, { ImageLoader } from 'next/image'
import React, { memo, useEffect, useState } from 'react'
import { ImageProps } from './image.type';
import { imageBlur, imageError } from '@/public/images';
import './index.css';


const Index = memo(({src, alt, ...props}: ImageProps) => {
    const [imageSrc, setImageSrc] = useState(src),
    [isLoaded, setIsLoaded] = useState<boolean>(false);

    const handleError = () => {
        if (props.fallbackSrc) {
            setImageSrc(props.fallbackSrc);
        }
        setImageSrc(imageError);
    };

    const handleLoad = () => {
        setIsLoaded(true);
    };

    useEffect(() => {
        setImageSrc(src);
    }, [src]);
    console.log('src : ', src);

    return (
        <div className={`shimmer-wrapper`}>
            {!isLoaded && <div className="shimmer"></div>}
            <Image 
                src={imageSrc} 
                alt={alt} 
                loading='lazy'
                width={props.width}
                height={props.height}
                layout={props.layout} 
                objectFit={props.objectFit}
                objectPosition={props.objectPosition}
                placeholder={props.placeholder}
                blurDataURL={props.blurDataUrl}
                className={`${props.className} ${isLoaded ? '' : 'image-hidden'}`}
                onLoad={handleLoad}
                onError={handleError}
            />
        </div>
    )
});

export default Index