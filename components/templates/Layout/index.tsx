import React from 'react'
import { Footer, Header } from '..'

interface LayoutProps {
    children: React.ReactNode;
    className?: string;
}

const Index = ({children, className}: LayoutProps) => {
    return (
        <div className='m-0 p-0'>
            <Header />
            <main className={className}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Index