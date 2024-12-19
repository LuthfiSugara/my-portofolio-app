'use client'

import { Button, Image, Input, Spinner, Textarea } from '@/components/atoms'
import { Dialog } from '@/components/organisms'
import useDisclosure from '@/hooks/useDisclosure'
import { Airplane } from '@/public/icons'
import { EmailSent } from '@/public/images'
import { emailSentTemplate, sendEmail } from '@/utils/send-mail'
import Lottie from 'lottie-react'
import React, { useEffect, useState } from 'react'

type Form = {
    name?: string;
    email?: string;
    message?: string;
}

const Contact = () => {

    const {isOpen, onOpen, onClose} = useDisclosure();

    const [triggerValidate, setTriggerValidate] = useState<boolean>(false),
    [loading, setLoading] = useState<boolean>(false),
    [formContact, setFormContact] = useState({
        name: '',
        email: '',
        message: '',
    }),
    [errors, setErrors] = useState<Form>({
        name: '',
        email: '',
        message: '',
    });
    
    const handleFormInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormContact((prevState) => ({...prevState, [name]: value}));
        setTriggerValidate(true);
    }

    const handleValidation = () => {
        const newErrors: Form = {};
        
        if(!formContact.name.trim()){
            newErrors.name = "Name is required!";
        }

        if(!formContact.email.trim()){
            newErrors.email = "Email is required!";
        }else if(!formContact.email.match(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)){
            newErrors.email = "Invalid email!";
        }

        if(!formContact.message.trim()){
            newErrors.message = "Message is required!";
        }

        setErrors(newErrors);
    }

    useEffect(() => {
        if(triggerValidate){
            handleValidation();
        }
    }, [formContact]);

    const handleSubmit = async() => {
        const isFormValid = Object.values(errors).every((error) => error === ' ');
        setLoading(true);
        
        if (isFormValid && triggerValidate){
            formContact.message = emailSentTemplate(formContact.name);
            const result = await sendEmail(formContact);
            console.log('send email : ', result);
            setFormContact({name: '', email: '', message: ''});
            setErrors({name: '', email: '', message: ''});
            onOpen();
        }

        setLoading(false);
        setTriggerValidate(false);
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <div className="col-span-1 md:col-span-2">
                <Input 
                    name="name" 
                    value={formContact.name || ''}
                    onChange={(e) => {
                        handleFormInput(e);
                        
                    }}
                    placeholder="Name"
                    errorMessage={errors.name}
                    className="bg-transparent border-2 border-gray-400 rounded-md p-2 text-white" 
                />
            </div>
            <div className="col-span-1 md:col-span-2">
                <Input 
                    name="email" 
                    value={formContact.email || ''}
                    onChange={(e) => {
                        handleFormInput(e);
                        
                    }}
                    placeholder="Email"
                    errorMessage={errors.email}
                    autoComplete='off'
                    className="bg-transparent border-2 border-gray-400 rounded-md p-2 text-white" 
                />
            </div>
            <div className="col-span-1 md:col-span-4">
                <Textarea 
                    name="message" 
                    value={formContact.message || ''}
                    onChange={(e) => {
                        handleFormInput(e);
                        
                    }}
                    placeholder="Message"
                    errorMessage={errors.message}
                    className="h-[200px] bg-transparent border-2 border-gray-500 rounded-md text-white p-4"
                >
                </Textarea>
            </div>

            <div className="col-span-1 md:col-span-4">
                <Button 
                    type='button' 
                    onClick={() => {
                        handleSubmit();
                    }}
                    isLoading={loading}
                    spinner={<Spinner />}
                    className='flex justify-center gap-2 items-center bg-white w-full p-2 rounded-md'
                >
                    <p className='text-black text-md font-semibold'>Send</p>
                    <div className='w-6'>
                        <Image src={Airplane} alt="send" />
                    </div>
                </Button>
            </div>

            <Dialog isOpen={isOpen} onClose={onClose} size='md'>
                <Lottie 
                    animationData={EmailSent}
                    loop={false}
                    autoplay={true}
                    className='w-32 mx-auto'
                />
                <div className='text-center mb-8 space-y-2'>
                    <p className='text-xl font-bold'>Email sent successfully</p>
                    <p className='text-md font-medium'>Thank you {formContact.name}, I will check your email as soon as possible.</p>
                </div>
            </Dialog>
        </div>
    )
}

export default Contact