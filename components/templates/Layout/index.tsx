import React from 'react'
import { Header } from '..'
import { LayoutProps } from './index.type'

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