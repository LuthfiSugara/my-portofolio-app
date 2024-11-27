import React from 'react'
import { Image, Tooltip } from '@/components/atoms'
import { Bootstrap, ChakraUI, Css, ExpressJS, Git, Html, Javascript, JQuery, Laravel, MongoDB, Mongoose, MySQL, NestJS, NextJS, NodeJS, PHP, PostgreSQL, ReactJS, Saas, Swagger, TailwindCss, TypeORM, Typescript, VueJS } from '@/public/icons'
import styles from "../styles/technologies.module.css";

const techStack = [
    { icon: Git, tooltip: 'Git', alt: 'git' },
    { icon: Typescript, tooltip: 'Typescript', alt: 'typescript' },
    { icon: Javascript, tooltip: 'Javascript', alt: 'javascript' },
    { icon: JQuery, tooltip: 'JQuery', alt: 'jquery' },
    { icon: PHP, tooltip: 'PHP', alt: 'php' },
    { icon: Html, tooltip: 'Html', alt: 'html' },
    { icon: Css, tooltip: 'Css', alt: 'css' },
    { icon: ReactJS, tooltip: 'React', alt: 'react' },
    { icon: NextJS, tooltip: 'NextJS', alt: 'nextjs' },
    { icon: VueJS, tooltip: 'VueJS', alt: 'vuejs' },
    { icon: Saas, tooltip: 'Saas', alt: 'saas' },
    { icon: TailwindCss, tooltip: 'TailwindCss', alt: 'tailwindcss' },
    { icon: Bootstrap, tooltip: 'Bootstrap', alt: 'bootstrap' },
    { icon: ChakraUI, tooltip: 'ChakraUI', alt: 'chakraui' },
    { icon: ExpressJS, tooltip: 'ExpressJS', alt: 'expressjs' },
    { icon: NodeJS, tooltip: 'NodeJS', alt: 'nodejs' },
    { icon: NestJS, tooltip: 'NestJS', alt: 'nestjs' },
    { icon: Laravel, tooltip: 'Laravel', alt: 'laravel' },
    { icon: MySQL, tooltip: 'MySQL', alt: 'mysql' },
    { icon: PostgreSQL, tooltip: 'PostgreSQL', alt: 'postgresql' },
    { icon: MongoDB, tooltip: 'MongoDB', alt: 'mongodb' },
    { icon: Mongoose, tooltip: 'Mongoose', alt: 'mongoose' },
    { icon: TypeORM, tooltip: 'TypeORM', alt: 'typeorm' },
    { icon: Swagger, tooltip: 'Swagger', alt: 'swagger' },
]

const Technologies = () => {
    return (
        <div className='flex flex-wrap justify-center gap-4'>
            {techStack.map((tech, index) => {
                return (
                    <div key={index} className={`flex flex-col justify-center w-16 border-2 border-gray-400 rounded-lg p-1 mb-4 ${styles.icon}`}>
                        <Tooltip content={tech.tooltip} className='font-bold'>
                            <Image 
                                src={tech.icon}
                                alt={tech.alt}
                            />
                        </Tooltip>
                    </div>
                )
            })}
        </div>
    )
}

export default Technologies 