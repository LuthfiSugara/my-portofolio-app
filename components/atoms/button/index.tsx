import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  isLoading?: boolean;
  spinner?: React.ReactNode;
}

const Index = ({children, className, isLoading, spinner, ...props}: ButtonProps) => {
  return (
    <button
      className={className}
      {...props}
    >
      {isLoading ? spinner : children}
    </button>
  )
}

export default Index