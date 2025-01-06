"use client"

// import IntroductionLeft from "@/features/home/components/IntroductionLeft";
import IntroductionRight from "@/features/home/components/IntroductionRight";
import WorkExperience from "@/features/home/components/WorkExperience";
import HomeContent from "../constant/content/home.json";
import Technologies from "@/features/home/components/Technologies";
import MyDocumentations from "@/features/home/components/MyDocumentations";
import Contact from "@/features/home/components/Contact";
import dynamic from "next/dynamic";

const IntroductionLeft = dynamic(() => import('../features/home/components/IntroductionLeft'));

export default function Home() {

  return (
    <div className="w-[95%] max-w-screen-xl mx-auto mt-20 md:mt-[200px] space-y-24 mb-10">
      {/* Hero */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-4">
        <IntroductionLeft className="order-last sm:order-first" />
        <IntroductionRight className="" />
      </div>

      {/* WorkExperience */}
      <div className="target-element space-y-8" id="resume">
        <p className="text-2xl md:text-3xl text-center font-bold">{HomeContent.home.work_experience.title}</p>
        <div className="space-y-4">
          {HomeContent.home.work_experience.experiences.map((experience, index) => {
            return (
              <WorkExperience 
                key={index}
                startingHeight={122}
                company={experience.company} 
                position={experience.position} 
                date_from={experience.date.from} 
                date_to={experience.date.to} 
                description={experience.description} 
                technology={experience.tech} 
                clasName="" 
              />
            )
          })}
        </div>
      </div>

      {/* Technologies */}
      <div className="space-y-8">
        <p className="text-2xl md:text-3xl text-center font-bold">Technologies</p>
        
        <Technologies />
      </div>


      {/* My Documentations */}
      <div className="target-element space-y-8" id="documentations">
        <p className="text-2xl md:text-3xl text-center font-bold">My Documentations</p>
        <MyDocumentations />
      </div>


      {/* Contact */}
      <div id="contact" className="target-element pb-24">
        <p className="text-2xl md:text-3xl text-center font-bold">{"Let's Connect"}</p>
        <Contact />
      </div>
      
    </div>
  )
}