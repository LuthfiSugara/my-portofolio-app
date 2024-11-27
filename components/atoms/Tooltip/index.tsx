import React from 'react'
import styles from "./index.module.css";

interface TooltipProps {
    className?: string;
    children: React.ReactNode;
    content: React.ReactNode;
}

const Index = ({className, children, content}: TooltipProps) => {
    return (
        <div className={`${styles.tooltip}`}>
            {children}
            <div className={`${styles.tooltipText} ${className}`}>{content}</div>
        </div>
    )
}

export default Index