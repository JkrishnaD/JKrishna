import Image from "next/image";
import ProfilePic from "@/public/profile.jpeg";
import { HeaderButtons } from "./header-buttons";


export const Header = () => {
  return (
    <div className="flex sm:flex-row flex-col-reverse justify-between items-center lg:items-start rounded-md lg:px-0 gap-x-10 mt-5">
      <div className="flex flex-col py-4 space-y-1 px-2 lg:px-0 text-center md:text-start">
        <span className="text-2xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          Hi, I&apos;m Jayakrishna
        </span>
        <span className="font-light text-sm">
          <span className="font-semibold">
            Full-Stack Developer | Freelancer
          </span>
          <br />
          Focused on building things which can an impact
        </span>
        <div className="pt-3 flex flex-row gap-x-2 items-center justify-center sm:justify-start">
          <HeaderButtons/>
          <button className="relative overflow-hidden text-sm rounded-lg border px-3 py-1 font-medium group">
            <span className="absolute inset-0 bg-green-500 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0" />
            <span className="relative  group-hover:text-white">
              Open for work
            </span>
          </button>
        </div>
      </div>
      <div>
        <Image
          src={ProfilePic}
          width={170}
          height={70}
          alt="JK"
          className="rounded-md cursor-pointer hover:scale-100 scale-90 transition-all duration-500 ease-in-out"
        />
      </div>
    </div>
  );
};
