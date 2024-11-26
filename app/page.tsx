"use client"

import IntroductionLeft from "@/features/home/components/IntroductionLeft";
import IntroductionRight from "@/features/home/components/IntroductionRight";
import WorkExperience from "@/features/home/components/WorkExperience";

export default function Home() {

  return (
    <div className="w-[95%] max-w-[1024px] mx-auto mt-12 space-y-24">
      {/* Hero */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-4">
        <IntroductionLeft className="order-last sm:order-first" />
        <IntroductionRight className="" />
      </div>

      {/* WorkExperience */}
      <div className="">
        <p className="text-3xl text-center font-bold">Work Experience</p>

        {/* <WorkExperience /> */}
      </div>
      
    </div>
  );
}
