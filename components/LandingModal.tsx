import Image from "next/image";
import React from "react";

interface LandingModalProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const LandingModal = ({ step, setStep }: LandingModalProps) => {
  return (
    <div className="bg-white w-[600px] h-[458px] rounded-xl flex flex-col justify-between">
      <div className="flex h-full w-full">
        {step === 1 && (
          <Image
            src="/imageCv.png"
            alt="mycvtracker"
            width={300}
            height={0}
            className="self-end mx-auto h-[300px]"
          />
        )}
      </div>
      <div className="h-[300px] rounded-b-xl bg-[#2573D2] flex flex-col items-center justify-between py-4">
        <div className="flex flex-col justify-between gap-y-2">
          <h2 className="text-white text-2xl font-medium tracking-wide text-center">
            Elevate Your Professional Prescence
          </h2>
          <h3 className="text-white text-center tracking-wide">
            Stand out professionally with a personalized domain on your CV.
          </h3>
        </div>
        <div className="w-full px-6 flex justify-between items-center">
          <span className="uppercase text-white">{step} of 3</span>
          <button
            className="px-5 py-1.5 bg-white font-semibold text-lg text-[#2573D2] rounded-md"
            onClick={() => setStep(step + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingModal;
