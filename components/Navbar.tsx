import React from "react";
import Image from "next/image";
import { inter } from "@/lib/fonts";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-[#1E222C] py-4 flex items-center justify-between px-24">
      <div className="cursor-pointer">
        <Image src="/logo.png" alt="log mycvtracker" width={180} height={0} />
      </div>
      <div>
        <ul className={`${inter.className} flex gap-x-6 text-white`}>
          <li className="flex items-center cursor-pointer">
            <p>CV Services</p>
            <ChevronDown />
          </li>
          <li className="flex items-center cursor-pointer">
            <p>Job Services</p>
            <ChevronDown />
          </li>
          <li className="flex items-center cursor-pointer">
            <p>High Speed Hiring</p>
          </li>
        </ul>
      </div>
      <div
        className={`${inter.className} flex items-center gap-x-8 text-white`}
      >
        <div className="cursor-pointer">Login</div>
        <div className="bg-[#3492BE] px-4 py-2 rounded-md cursor-pointer">
          Sign Up
        </div>
      </div>
    </div>
  );
};

export default Navbar;
