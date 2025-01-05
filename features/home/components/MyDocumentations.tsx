'use client'

import React, { useRef } from 'react'
import { Button, Image } from '@/components/atoms';
import { ChevronLeft, ChevronRight } from '@/public/icons';
import HomeContent from "../../../constant/content/home.json";
import { DocumentationCaard } from '@/components/templates';

const MyDocumentations = () => {

    const containerDocs = useRef<HTMLDivElement | null>(null);
    
      const handleScrollDocs = (offset: number) => {
        if(containerDocs.current){
          containerDocs.current.scrollLeft += offset;
        }
      }

    return (
        <div className="flex gap-4">
          <Button 
            className="bg-[#1c1b42] rounded-l-full hidden sm:block"
            onClick={() => {
              handleScrollDocs(-400);
            }}
          >
            <div className="w-12">
              <Image src={ChevronLeft} alt="backward" />
            </div>
          </Button>
          <div ref={containerDocs} className="grid grid-flow-col auto-cols-max gap-4 overflow-x-scroll" style={{scrollBehavior: 'smooth'}}>
            {HomeContent.home.documentaions.docs.map((documentation, index) => (
              <DocumentationCaard
                key={index}
                number={documentation.number}
                tech={documentation.tech}
                description={documentation.description}
              />
            ))}
          </div>
          <Button 
            className="bg-[#1c1b42] rounded-r-full hidden sm:block"
            onClick={() => {
              handleScrollDocs(+400);
            }}
          >
            <div className="w-12">
              <Image src={ChevronRight} alt="forward" />
            </div>
          </Button>
        </div>
    )
}

export default MyDocumentations