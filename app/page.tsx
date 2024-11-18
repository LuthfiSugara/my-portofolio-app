"use client"

import { Button, Image } from "@/components/atoms";
import { Download } from "@/public/icons";

export default function Home() {
    return (
        <div className="w-[95%] max-w-[1024px] mx-auto mt-12">
          <div className="grid grid-cols-2">
            <div>
              <h1 className="text-[3rem] font-bold">Hello I'm</h1>
              <h1 className="text-[3rem] font-bold text-[#A49DED]">Luthfi Sugara</h1>
              <p className="text-justify">Software Developer with 5 years Structuring, Develop and Implementing interactive applications. I have focused on developing scalable and well-documented code. I enjoy working collaboratively but can also run with projects independently. Motivated to advance and expand my skill set through targeted mentorship and challenging projects.</p>

              <div className="flex gap-4">
                <Button type="button" onClick={() => console.log('click')} className="flex gap-8" disabled>
                  <p>Download CV</p>
                  <div className="w-5">
                    <Image src={Download} alt="download cv" />
                  </div>
                </Button>
              </div>
            </div>
            <div>2</div>
          </div>
        </div>
    );
}
