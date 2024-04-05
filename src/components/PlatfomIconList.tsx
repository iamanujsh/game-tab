import { Platform } from "@/hooks/useGames";

import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { ReactNode } from "react";

interface Props {
  platforms: Platform[];
}

const PlatfomIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: ReactNode } = {
    pc: <FaWindows />,
    playstation: <FaPlaystation />,
    xbox: <FaXbox />,
    ios: <FaApple />,
    linux: <FaLinux />,
    android: <FaAndroid />,
    iphone: <MdPhoneIphone />,
    nintendo: <SiNintendo />,
    web: <BsGlobe />,
  };

  return (
    <div className="flex gap-3 mt-3 mb-3 text-gray-300 ">
      {platforms.map((platform) => iconMap[platform.slug])}
    </div>
  );
};

export default PlatfomIconList;
