import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    errorMessage?: string;
}


const Index = ({ className, errorMessage, ...rest }: InputProps) => {
    return (
        <>
            <input 
                className={`w-full outline-0 ${errorMessage ? "border-2 border-red-500" : ""} ${className}`} 
                {...rest}
            />
            <small className='text-red-500'>{errorMessage}</small>
        </>
    )
}

export default Index