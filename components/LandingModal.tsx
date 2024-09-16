import Image from "next/image";
import React from "react";

interface LandingModalProps {
  step: number;
}

const LandingModal = ({ step }: LandingModalProps) => {
  return (
    <div className="bg-white w-[600px] h-[458px] rounded-xl relative">
      {step === 1 && (
        <Image src="/imageCv.png" alt="mycvtracker" width={300} height={0} />
      )}
      <div className="h-[178px] rounded-b-xl bg-[#2573D2] absolute bottom-0 left-0 right-0"></div>
    </div>
  );
};

export default LandingModal;
