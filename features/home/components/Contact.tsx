'use client'

import { Button, Image, Input, Textarea } from '@/components/atoms'
import { EmailContact } from '@/components/templates'
import { Airplane } from '@/public/icons'
import React, { useEffect, useState } from 'react'
import { Resend } from 'resend'

type Form = {
    name?: string;
    email?: string;
    message?: string;
}

const Contact = () => {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const [formContact, setFormContact] = useState({
        name: '',
        email: '',
        message: '',
    }),
    [errors, setErrors] = useState<Form>({});
    
    const handleFormInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormContact((prevState) => ({...prevState, [name]: value}));
    }

    useEffect(() => {
        const newErrors: Form = {};

        if(formContact.name == ''){
            newErrors.name = "Name is required!";
        }

        if(formContact.email == ''){
            newErrors.email = "Name is required!";
        }

        if(formContact.message == ''){
            newErrors.message = "Name is required!";
        }

        setErrors(newErrors);
    }, [formContact]);


    const handleSubmit = async() => {
        if (Object.keys(errors).length === 0){
            const { data, error } = await resend.emails.send({
                from: 'luthfisugara33@gmail.com',
                to: ['sugaraluthfi@gmail.com'],
                subject: 'Hello world',
                react: EmailContact(formContact.name, formContact.email, formContact.message,),
            });

            console.log('data : ', data);
            console.log('error : ', error);
        }
    }

    

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <div className="col-span-1 md:col-span-2">
                <Input 
                    name="name" 
                    value={formContact.name || ''}
                    onChange={(e) => handleFormInput(e)}
                    placeholder="Name"
                    errorMessage={errors.name}
                    className="bg-transparent border-2 border-gray-400 rounded-md p-2 text-white" 
                />
            </div>
            <div className="col-span-1 md:col-span-2">
                <Input 
                    name="email" 
                    value={formContact.email || ''}
                    onChange={(e) => handleFormInput(e)}
                    placeholder="Email"
                    errorMessage={errors.email}
                    className="bg-transparent border-2 border-gray-400 rounded-md p-2 text-white" 
                />
            </div>
            <div className="col-span-1 md:col-span-4">
                <Textarea 
                    name="message" 
                    value={formContact.message || ''}
                    onChange={(e) => handleFormInput(e)}
                    placeholder="Message"
                    errorMessage={errors.message}
                    className="h-[200px] bg-transparent border-2 border-gray-500 rounded-md text-white p-4"
                >
                </Textarea>
            </div>

            <div className="col-span-1 md:col-span-4">
                <Button 
                    type='button' 
                    onClick={() => handleSubmit()}
                    className='flex justify-center gap-2 items-center bg-white w-full p-2 rounded-md'
                >
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