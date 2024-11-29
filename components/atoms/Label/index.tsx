import React from 'react'

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    className?: string;
}

const Index = ({ className, ...rest }: LabelProps) => {
    return (
        <label className={className} {...rest}></label>
    )
}

export default Index