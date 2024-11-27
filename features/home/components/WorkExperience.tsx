'use client'

import React, { useState } from 'react'
import { Collapse } from '@/components/organisms';

interface WorkExperienceProps {
    company: string;
    position: string;
    date_from: string;
    date_to: string;
    description: string;
    technology: string[];
    clasName: string;
    startingHeight: number;
}

const WorkExperience = ({company, position, clasName, ...props}: WorkExperienceProps) => {
    const [isShow, setIsShow] = useState(false);

    return (
        <div onClick={() => setIsShow(!isShow)} className='cursor-pointer bg-[#251d53] p-4 sm:p-8 rounded-2xl'>
            <Collapse show={isShow} startingHeight={props.startingHeight}>
                <div className='space-y-4'>
                    <p className='text-xl sm:text-2xl font-bold'>{company}</p>
                    <div className="flex flex-wrap justify-between items-end gap-1 sm:gap-4 font-semibold">
                        <p className='text-lg'>{position}</p>
                        <p className='text-sm sm:text-md italic'>{props.date_from + " - " + props.date_to}</p>
                    </div>
                    <p className='text-sm sm:text-md text-justify'>{props.description}</p>
                    <div className="flex flex-wrap justify-start gap-4 pt-6">
                        {props.technology.map((tech, index) => {
                            return (
                                <div key={index} className='border-2 border-gray-400 py-1 px-4 rounded-full text-sm text-center'>
                                    {tech}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Collapse>
        </div>
    )
}

export default WorkExperience