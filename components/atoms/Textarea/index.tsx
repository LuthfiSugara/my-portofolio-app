import React from 'react'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
    errorMessage?: string;
}

const Index = ({className, errorMessage, ...rest}: TextareaProps) => {
    return (
        <>
            <textarea 
                className={`w-full outline-0 ${className} ${errorMessage ? "border-2 border-red-500" : ""}`} 
                {...rest}
            >
            </textarea>
            <small className='text-red-500'>{errorMessage}</small>
        </>
    )
}

export default Index