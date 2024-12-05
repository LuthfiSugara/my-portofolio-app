import React from 'react'

interface EmailContactProps {
    name: string;
    email: string;
    message: string;
}
  

const Index = (name: string, email: string, message: string) => {
    return (
        <div>
            <p>{name}</p>
            <p>{email}</p>
            <p>{message}</p>

        </div>
    )
}

export default Index