'use client'

import { Button, Image, Input, Textarea } from '@/components/atoms'
import { Airplane } from '@/public/icons'
import React, { useState } from 'react'

const Contact = () => {
    const [formContact, setFormContact] = useState({
        name: '',
        email: '',
        message: '',
    });
    
    const handleFormInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormContact((prevState) => ({...prevState, [name]: value}));
    }


    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <div className="col-span-1 md:col-span-2">
                <Input 
                    name="name" 
                    value={formContact.name || ''}
                    onChange={(e) => handleFormInput(e)}
                    placeholder="Name"
                    className="bg-transparent border-2 border-gray-400 rounded-md p-2 text-white" 
                />
            </div>
            <div className="col-span-1 md:col-span-2">
                <Input 
                    name="email" 
                    value={formContact.email || ''}
                    onChange={(e) => handleFormInput(e)}
                    placeholder="Email"
                    className="bg-transparent border-2 border-gray-400 rounded-md p-2 text-white" 
                />
            </div>
            <div className="col-span-1 md:col-span-4">
                <Textarea 
                    name="message" 
                    value={formContact.message || ''}
                    onChange={(e) => handleFormInput(e)}
                    placeholder="Message"
                    className="h-[200px] bg-transparent border-2 border-gray-500 rounded-md text-white p-4"
                >
                </Textarea>
            </div>

            <div className="col-span-1 md:col-span-4">
                <Button type='button' className='flex justify-center gap-2 items-center bg-white w-full p-2 rounded-md'>
                    <p className='text-black text-md font-semibold'>Send</p>
                    <div className='w-6'>
                        <Image src={Airplane} alt="send" />
                    </div>
                </Button>
            </div>
        </div>
    )
}

export default Contact