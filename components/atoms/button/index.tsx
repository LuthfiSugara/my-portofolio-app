import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
}

const Index = ({children, className, ...props}: ButtonProps) => {
  return (
    <button
      className={className}
      {...props}
    >
        {children}
    </button>
  )
}

export default Index