import React from 'react'
import { Header } from '..'

interface LayoutProps {
    children: React.ReactNode;
    className?: string;
}

const Index = ({children, className}: LayoutProps) => {
    return (
        <div>
            <Header />
            <main className={className}>
                {children}
            </main>
        </div>
    )
}

export default Index