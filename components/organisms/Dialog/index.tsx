'use client'

import React from 'react'
import styles from "./index.module.css";
import { Button, Image } from '@/components/atoms';
import { Time } from '@/public/icons';

interface ModalProps {
    title?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Index = ({title, size, isOpen, onClose, children}: ModalProps) => {

    return isOpen && (
        <div className={`${styles.overlay}`} onClick={onClose}>
            <div 
                className={`${styles.modal} ${size === 'full' ? 'w-[100vw] h-[100vh] overflow-scroll hide-scrollbar' : 'w-lg'}`} 
                onClick={(e) => e.stopPropagation()}
            >
                <div className='flex justify-between gap-4'>
                    <p className='text-lg p-3 font-semibold'>{title}</p>
                    <Button className={styles.closeBtn} onClick={onClose}>
                        <Image src={Time} alt="close" />
                    </Button>
                </div>
                <div className='p-3'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Index