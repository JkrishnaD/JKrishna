import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { DATA } from "@/data/data";

export const HeaderButtons = () => {
  return (
    <TooltipProvider>
      {DATA.socialButtons.map((button, key) => (
        <Tooltip key={key}>
          <span>
            <TooltipTrigger key={key} asChild>
              <a href={button.link}>
                <button.icon className="border size-7 p-1 rounded-md group" />
              </a>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="bg-black text-white">
              <p>{button.message}</p>
            </TooltipContent>
          </span>
        </Tooltip>
      ))}
    </TooltipProvider>
  );
};
