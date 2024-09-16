import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface LandingModalProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LandingModal = ({ step, setStep, setIsModalOpen }: LandingModalProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, x: "-50%", y: "50%" }}
      animate={{ opacity: 1, scale: 1, x: "0%", y: "0%" }}
      exit={{ opacity: 0, scale: 0.5, x: "-50%", y: "50%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="bg-white w-[600px] h-[458px] rounded-xl flex flex-col justify-between shadow-lg z-20"
    >
      <div className="flex h-full w-full relative">
        <div
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => {
            setIsModalOpen(false);
            setStep(1);
          }}
        >
          <X />
        </div>
        {step === 1 && (
          <Image
            src="/imageCv.png"
            alt="mycvtracker"
            width={350}
            height={0}
            className="self-end mx-auto h-auto"
          />
        )}
        {step === 2 && (
          <Image
            src="/previewplayers.png"
            alt="mycvtracker"
            width={400}
            height={0}
            className="self-end mx-auto mb-4 h-auto"
          />
        )}
      </div>
      <div className="h-[280px] rounded-b-xl bg-[#2573D2] flex flex-col items-center justify-between py-4">
        <div className="flex flex-col justify-between gap-y-2">
          <h2 className="text-white text-2xl font-medium tracking-wide text-center">
            {step === 1 && <p>Elevate Your Professional Prescence</p>}
            {step === 2 && <p>CV Upgrade: Add Media Links!</p>}
            {step === 3 && <p>Free Analytics of Domain Link Views</p>}
          </h2>
          <h3 className="text-white text-center tracking-wide">
            {step === 1 && (
              <p>
                Stand out professionally with a personalized domain on your CV.
              </p>
            )}
            {step === 2 && <p>Enhance your CV by adding audio/video links.</p>}
            {step === 3 && (
              <p>
                Get Free Analytics when someone view your Domain Address Link.
              </p>
            )}
          </h3>
        </div>
        <div className="w-full px-6 flex justify-between items-center">
          <span className="uppercase text-white">{step} of 3</span>
          <div className="flex gap-x-4">
            {step !== 1 && (
              <button
                className="text-white text-lg"
                onClick={() => setStep(step - 1)}
              >
                Back
              </button>
            )}
            <button
              className="px-5 py-1.5 bg-white font-semibold text-lg text-[#2573D2] rounded-md"
              onClick={() => {
                if (step !== 3) {
                  setStep(step + 1);
                } else {
                  setIsModalOpen(false);
                  setStep(1);
                }
              }}
            >
              {step !== 3 ? <p>Next</p> : <p>Got it!</p>}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LandingModal;
