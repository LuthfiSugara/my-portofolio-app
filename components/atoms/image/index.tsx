'use client'

import Image, { ImageLoader, ImageProps } from 'next/image'
import React, { memo, useEffect, useState } from 'react'
import { ImageError } from '@/public/images';

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
                    <div className="animate-pulse bg-slate-100 h-full w-full"></div>
                </div>
            ) : null}

            <Image 
                src={imageSrc} 
                alt={props.alt} 
                className={`${className} ${isLoading ? 'invisible' : 'visible'}`}
                onLoad={handleLoad}
                onError={handleError}
            />
        </>
    )
});

export default Index