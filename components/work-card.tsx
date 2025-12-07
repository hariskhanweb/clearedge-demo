"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WorkCardProps {
  number: number;
  title: string;
  subheading?: string;
  description: string;
  buttonText?: string;
  buttonUrl?: string;
  showNumberPeriod?: boolean;
  variant?: "default" | "outlined";
}

export function WorkCard({
  number,
  title,
  subheading,
  description,
  buttonText,
  buttonUrl,
  showNumberPeriod = false,
  variant = "default",
}: WorkCardProps) {
  const buttonContent = buttonText ? (
    <Button
      variant="default"
      size="lg"
      className="bg-brand-blue hover:bg-brand-blue-dark text-white rounded-none w-auto min-w-52 sm:min-w-[180px] md:min-w-52 py-2.5 sm:py-3 text-xs sm:text-sm md:text-base mt-auto flex items-center justify-center gap-2"
    >
      {buttonText}
      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
    </Button>
  ) : null;

  // Outlined variant - number on top center, title below, description, no button
  if (variant === "outlined") {
    return (
      <div className="bg-white border border-gray-300 rounded-lg p-5 sm:p-6 md:p-8 flex flex-col items-center justify-start text-center">
        <div className="flex flex-col items-center mb-4 sm:mb-5">
          <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 border-gray-600 text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 leading-none">
            {number}{showNumberPeriod ? "." : ""}
          </span>
          <h3 className="text-[20px] sm:text-[24px] md:text-[26px] lg:text-[27.753px] font-normal font-roboto text-black">
            {title}
          </h3>
        </div>
        <p className="text-xs sm:text-sm md:text-base text-gray-600">
          {description}
        </p>
      </div>
    );
  }

  // Default variant - original design
  return (
    <div className="bg-white shadow-[12px_4px_15.2px_0px_rgba(0,0,0,0.10)] rounded-lg p-5 sm:p-6 md:p-8 flex flex-col items-center justify-start text-center">
      <div className="flex items-center mb-2 sm:mb-3">
        <span className="shrink-0 inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border-2 border-black text-lg sm:text-xl font-bold mr-2 leading-none">
          {number}{showNumberPeriod ? "." : ""}
        </span>
        <h3 className="text-[20px] sm:text-[24px] md:text-[26px] lg:text-[27.753px] font-bold font-roboto text-black leading-none">
          {title}
        </h3>
      </div>
      {subheading && (
        <p className="text-lg sm:text-xl md:text-2xl font-normal text-black mb-3 sm:mb-5">
          {subheading}
        </p>
      )}
      <p className={`text-xs sm:text-sm md:text-base text-gray-600 ${buttonText ? "mb-4 sm:mb-5 md:mb-6 grow" : ""}`}>
        {description}
      </p>
      {buttonUrl && buttonContent ? (
        <Link href={buttonUrl} className="w-full">
          {buttonContent}
        </Link>
      ) : (
        buttonContent
      )}
    </div>
  );
}
