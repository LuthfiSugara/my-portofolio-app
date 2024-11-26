'use client'

import Image, { ImageLoader, ImageProps } from 'next/image'
import React, { memo, useEffect, useState } from 'react'
import { ImageError } from '@/public/images';
// import './index.css';

interface CustomImageProps extends ImageProps {
    className?: string
    fallbackSrc?: string;
}

const Index = memo(({className, fallbackSrc, ...props}: CustomImageProps) => {
    const [imageSrc, setImageSrc] = useState(props.src),
    [isLoading, setIsLoading] = useState<boolean>(true);

    const handleError = () => {
        setImageSrc(ImageError);
        if (fallbackSrc) {
            setImageSrc(fallbackSrc);
        }
        setIsLoading(false);
    };

    const handleLoad = () => {
        setIsLoading(false);
    };

    useEffect(() => {
        setImageSrc(props.src);
    }, [props.src]);

    return (
        <>
            {isLoading ? (
                <div className="aspect-square">
                    <div className="animate-pulse bg-gray-400 h-full w-full"></div>
                </div>
            ) : null}

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
                className={`${className} ${isLoading ? 'invisible' : 'visible'}`}
                onLoad={handleLoad}
                onError={handleError}
            />
        </>
        // <div className={`shimmer-wrapper`}>
        //     {!isLoading && <div className="shimmer"></div>}
        //     <Image 
        //         src={imageSrc} 
        //         alt={props.alt} 
        //         loading='lazy'
        //         width={props.width}
        //         height={props.height}
        //         layout={props.layout} 
        //         objectFit={props.objectFit}
        //         objectPosition={props.objectPosition}
        //         placeholder={props.placeholder}
        //         className={`${className} ${isLoading ? '' : 'image-hidden'}`}
        //         onLoad={handleLoad}
        //         onError={handleError}
        //     />
        // </div>
    )
});

export default Index