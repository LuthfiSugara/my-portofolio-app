import React from 'react'
import styles from './index.module.css';
import { Image } from '@/components/atoms';
import { Close, Menu } from '@/public/icons';

interface MenuDropdownProps {
    isOpen: boolean;
    children?: React.ReactNode;
    onToggle: () => void;
}

const Index = ({isOpen, children, onToggle}: MenuDropdownProps) => {

    return (
        <div className=''>
            <button onClick={onToggle} className={styles.menuIcon}>
                <div className="w-6">
                    <Image
                        src={isOpen ? Close : Menu}
                        alt='menu'
                    />
                </div>
            </button>

            <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
                <div className={styles.menuHeader}>
                    <h1 className={styles.title}>LUTHFI SUGARA</h1>
                </div>
                <ul className={styles.menuItems}>
                    {children}
                </ul>
            </div>
        </div>
    )
}

export default Index