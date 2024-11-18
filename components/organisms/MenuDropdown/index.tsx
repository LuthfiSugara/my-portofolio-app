import React, { useState } from 'react'
import styles from './index.module.css';
// import { MenuDropdownProps } from './menu-dropdown.type';
import { Image } from '@/components/atoms';
import { Close, Menu } from '@/public/icons';

interface MenuDropdownProps {
    children?: React.ReactNode;
}

const Index = ({children}: MenuDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=''>
            <button onClick={toggleMenu} className={styles.menuIcon}>
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