import { StaticImageData } from "next/image"

export type ImageProps = {
    src: string | StaticImageData;
    alt: string;
    layout?: 'fill' | 'responsive';
    width?: number;
    height?: number;
    objectFit?: string;
    objectPosition?: string;
    placeholder?: 'blur';
    blurDataUrl?: string;
    fallbackSrc?: string;
    quality?: number;
    style?: Object;
    overrideSrc?: string;
    className?: string;
}