import { Dialog, Lottie } from '@/components/organisms';
import { EmailSent } from '@/public/images';
import React from 'react'

interface ContactDialogProps {
    status: 'success' | 'error';
    isOpen: boolean;
    name: string;
    onClose: () => void;
}

const ContactDialog = ({status, isOpen, name, onClose}: ContactDialogProps) => {
    return (
        <Dialog 
            isOpen={isOpen} 
            onClose={onClose} 
            size='md'
        >
            <Lottie 
                animationData={EmailSent}
                loop={false}
                autoplay={true}
                className='w-32 mx-auto'
            />
            <div className='text-center mb-8 space-y-2'>
                {status === 'success' ? (
                    <>
                        <p className='text-xl font-bold'>Email sent successfully</p>
                        <p className='text-md font-medium'>Thank you <span className='font-semibold'>{name}</span>, I will check your email as soon as possible.</p>
                    </>
                ): (
                    <>
                        <p className='text-xl font-bold'>Failed to send email</p>
                        <p className='text-md font-medium'>Please try again, or send me email manually to <span className='font-semibold'>sugaraluthfi@gmail.com</span></p>
                    </>
                )}
            </div>
        </Dialog>
    )
}

export default ContactDialog