"use client"

import IntroductionLeft from "@/features/home/components/IntroductionLeft";
import IntroductionRight from "@/features/home/components/IntroductionRight";
import WorkExperience from "@/features/home/components/WorkExperience";
import LangEN from "../lang/en/en.json";
import Technologies from "@/features/home/components/Technologies";
import MyDocumentations from "@/features/home/components/MyDocumentations";

export default function Home() {

  return (
    <div className="w-[95%] max-w-[1024px] mx-auto mt-12 space-y-24 mb-10">
      {/* Hero */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-4">
        <IntroductionLeft className="order-last sm:order-first" />
        <IntroductionRight className="" />
      </div>

      {/* WorkExperience */}
      <div className="space-y-8">
        <p className="text-3xl text-center font-bold">{LangEN.home.work_experience.title}</p>
        <div className="space-y-4">
          {LangEN.home.work_experience.experiences.map((experience, index) => {
            return (
              <WorkExperience 
                key={index}
                startingHeight={162}
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
        <p className="text-3xl text-center font-bold">Technologies</p>
        
        <Technologies />
      </div>


      {/* My DOcumentations */}
      <div className="space-y-8">
        <p className="text-3xl text-center font-bold">My Documentations</p>
        <div className="flex gap-8">
          <MyDocumentations />
        </div>
      </div>
      
    </div>
  );
}
