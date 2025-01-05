'use client'

import { Button, Image } from "@/components/atoms";
import { Lottie } from "@/components/molecules";
import { Clock } from "@/public/images"
import Link from "next/link";


export default function NotFound() {
  return (
    <div className="h-[80vh] flex flex-col justify-center">
      <div className="mx-auto text-center">
        <div className="flex justify-center items-center">
          <p className="text-[6rem] sm:text-[8rem] font-bold">4</p>
          <div className="w-[8rem] sm:w-[10rem]">
            <Lottie
              loop={true}
              autoplay={true}
              animationData={Clock}
            />
          </div>
          <p className="text-[6rem] sm:text-[8rem] font-bold">4</p>
        </div>
        <p className="text-xl sm:text-3xl font-bold">This Page is lost.</p>
        <p className="text-lg sm:text-xl text-gray-400 font-semibold mb-6">Can't find the page you were looking for.</p>
        <Link href="/" className="bg-[#7c72e8] hover:bg-[#6052f0] p-3 rounded-md font-bold text-white">
          Back to home
        </Link>
      </div>
    </div>
  )
} 