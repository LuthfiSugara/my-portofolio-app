'use client'

import React, { useRef, useState } from 'react'
import styles from "../styles/workExperience.module.css";


const WorkExperience = () => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.container}>
            <button onClick={toggleCollapse} className={styles.toggleButton}>
                {isOpen ? "Collapse" : "Expand"}
            </button>
            <div
                className={styles.contentWrapper}
                style={{
                    maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "10px",
                }}
            >
                <div className={styles.content} ref={contentRef}>
                    <p>
                        This is the collapsible content. The height adjusts dynamically
                        based on the content inside.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WorkExperience