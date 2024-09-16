"use client";

import React, { useState } from "react";
import Image from "next/image";
import { inter } from "@/lib/fonts";
import { ArrowRight, CircleCheckBig } from "lucide-react";
import LandingModal from "./LandingModal";

const Landing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState<number>(1);

  return (
    <div className="bg-[#1E222C] min-h-screen pb-24 flex flex-col items-center">
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <LandingModal step={step} />
        </div>
      )}
      <div className="flex flex-col items-center mt-16">
        <div className="bg-white w-[80%] py-4 px-8 text-center font-bold text-5xl text-neutral-800 rounded-tl-[2rem] rounded-br-[2rem]">
          <h1>Free CV Tracker</h1>
        </div>
        <div className="text-white text-lg mt-4">
          Increase your chances to get a job by creating a domain for your CV.
        </div>
      </div>
      <div className="flex gap-x-8 mt-16">
        <div className="w-[520px] h-[716px] rounded-2xl relative bg-gradient-to-bl from-[#80A4C1] via-[#7B8390] to-[#80A4C1] shadow-lg overflow-hidden">
          <div className="absolute inset-0.5 rounded-2xl border-transparent bg-gradient-to-br from-[#757D89] from-1% via-gray-800 via-90% to-gray-900 p-8 flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-4">
              <Image src="/world.png" alt="mycvtracker" width={80} height={0} />
              <h2
                className={`${inter.className} text-white text-2xl font-semibold`}
              >
                Upload your resume and get a free domain for your CV
              </h2>
            </div>
            <div>
              <ul className="flex flex-col gap-y-3">
                <li className="flex gap-x-3 items-center">
                  <CircleCheckBig className="text-green-500" />
                  <p className="text-white">
                    Get Your User-Friendly CV address like an email address
                  </p>
                </li>
                <li className="flex gap-x-3 items-center">
                  <CircleCheckBig className="text-green-500" />
                  <p className="text-white">
                    Option to Mask your CV Private Data email address phone
                    number
                  </p>
                </li>
                <li className="flex gap-x-3 items-center">
                  <CircleCheckBig className="text-green-500" />
                  <p className="text-white">
                    Share the link with anyone without sending your CV as
                    anattachment
                  </p>
                </li>
                <li className="flex gap-x-3 items-center">
                  <CircleCheckBig className="text-green-500" />
                  <p className="text-white">
                    Environment Friendly way of sharing your CV
                  </p>
                </li>
                <li className="flex gap-x-3 items-center">
                  <CircleCheckBig className="text-green-500" />
                  <p className="text-white">
                    Get Instant Reviews via Contact Form on your CV links
                  </p>
                </li>
                <li className="flex gap-x-3 items-center">
                  <CircleCheckBig className="text-green-500" />
                  <p className="text-white">
                    CV Notifications whenever your CV link is viewed
                  </p>
                </li>
                <li className="flex gap-x-3 items-center">
                  <CircleCheckBig className="text-green-500" />
                  <p className="text-white">
                    Option for Viewer to download pdf and docx version
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex justify-center items-center gap-x-4 w-[456px] h-[86px] border border-dashed border-gray-200 rounded-xl bg-gray-700">
                <div>
                  <Image
                    src="/upload.png"
                    alt="mycvtracker"
                    width={40}
                    height={0}
                  />
                </div>
                <div className="flex flex-col gap-y-1">
                  <p className="text-white">
                    Drop your file or{" "}
                    <a className="text-blue-500 underline font-medium cursor-pointer">
                      browse
                    </a>
                  </p>
                  <p className="text-neutral-300">DOCX or PDF • 10MB max</p>
                </div>
              </div>
              <div className="flex gap-x-4 items-center justify-center mt-6">
                <h3
                  className="text-white underline cursor-pointer"
                  onClick={() => setIsModalOpen(true)}
                >
                  See the example
                </h3>
                <ArrowRight className="text-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[520px] h-[716px] rounded-2xl relative bg-gradient-to-br from-[#80A4C1] from-10% to-[#1E6BC8] shadow-lg overflow-hidden p-8 flex flex-col justify-between">
          <div>
            <div className="flex flex-col">
              <Image
                src="/link.png"
                alt="mycvtracker"
                width={120}
                height={0}
                className="-mx-6 -mt-6"
              />
              <h2
                className={`${inter.className} text-white text-2xl font-semibold -mt-2 w-[70%]`}
              >
                A new exposure to boost the exposure of your CV
              </h2>
            </div>
            <div>
              <ul className="flex flex-col gap-y-4 mt-8">
                <li className="flex gap-x-3 items-center">
                  <span className="h-6 w-6 rounded-full border-2 border-white text-white flex items-center justify-center">
                    1
                  </span>
                  <p className="text-white">
                    You complete the audio/video interview on the platform
                  </p>
                </li>
                <li className="flex gap-x-3 items-center">
                  <span className="h-6 w-6 rounded-full border-2 border-white text-white flex items-center justify-center">
                    2
                  </span>
                  <p className="text-white">
                    The platform generates a link to your interview results
                  </p>
                </li>
                <li className="flex gap-x-3 items-center">
                  <span className="h-6 w-6 rounded-full border-2 border-white text-white flex items-center justify-center">
                    3
                  </span>
                  <p className="text-white">
                    We add tracking parameters to the interview link
                  </p>
                </li>
                <li className="flex gap-x-3 items-center">
                  <span className="h-6 w-6 rounded-full border-2 border-white text-white flex items-center justify-center">
                    4
                  </span>
                  <p className="text-white">
                    We help you add the tracking-enabled link to your CV
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center gap-x-4 w-[456px] h-[86px] border border-dashed border-gray-200 rounded-xl bg-[#327ACD]">
              <div>
                <Image
                  src="/upload.png"
                  alt="mycvtracker"
                  width={40}
                  height={0}
                />
              </div>
              <div className="flex flex-col gap-y-1">
                <p className="text-white">
                  Drop your file or{" "}
                  <a className="text-white underline font-medium cursor-pointer">
                    browse
                  </a>
                </p>
                <p className="text-neutral-300">DOCX or PDF • 10MB max</p>
              </div>
            </div>
            <div className="flex gap-x-4 items-center justify-center mt-6">
              <h3 className="text-white underline cursor-pointer">
                See the example
              </h3>
              <ArrowRight className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
