"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  bgColor?: string;
  link?: string;
  subtitle?: string;
  version?: string;
  linkText?: string;
  variant?: "default" | "variant2";
}

export function ProductCard({
  title,
  description,
  image,
  imageAlt,
  bgColor = "rgba(68,146,148,0.6)",
  link = "#",
  subtitle,
  version,
  linkText = "See the Range",
  variant = "default",
}: ProductCardProps) {
  // Variant 2 - Image on top, title, subtitle, description, custom link
  if (variant === "variant2") {
    return (
      <div
        className="rounded-lg overflow-hidden border border-neutral-200 p-6 flex flex-col"
        style={{ backgroundColor: bgColor }}
      >
        <div className="relative h-[242.342px]">
          {image && (
            <Image
              src={image}
              alt={imageAlt || title}
              fill
              className="object-contain"
            />
          )}
        </div>
        <div className="pt-4 flex flex-col grow">
          <h3 className="text-[30.85px] font-bold font-roboto text-text-gray mb-2 leading-[46.275px]">
            {title}
          </h3>
          {subtitle && (
            <p className="text-[23.138px] font-roboto text-text-gray leading-[34.706px]">
              {subtitle}
            </p>
          )}
          {version && (
            <p className="text-[23.138px] font-roboto text-text-gray mb-4 leading-[34.706px]">
              {version}
            </p>
          )}
          <p className="text-[14px] font-roboto text-text-gray mb-6 leading-[20.824px] grow">
            {description}
          </p>
          <Link
            href={link}
            className="text-[16px] font-bold font-roboto text-[#10218b] inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            {linkText}
            <span className="w-0 h-0 border-l-[7.713px] border-l-[#10218b] border-t-[4.628px] border-t-transparent border-b-[4.628px] border-b-transparent"></span>
          </Link>
        </div>
      </div>
    );
  }

  // Default variant - original design
  return (
    <div
      className="rounded-lg overflow-hidden h-full min-h-[380px] sm:min-h-[420px] md:min-h-[450px] lg:min-h-[500px]"
      style={{ backgroundColor: bgColor }}
    >
      <div className="p-4 sm:p-5 md:p-6 lg:p-8 h-full flex flex-col">
        <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[21.152px] font-bold font-roboto text-black mb-2 sm:mb-3 md:mb-4">
          {title}
        </h3>
        <p className="text-xs sm:text-sm md:text-base font-normal font-roboto text-black mb-3 sm:mb-4 md:mb-6 leading-relaxed">
          {description}
        </p>
        {image && (
          <div className="mb-3 sm:mb-4 md:mb-6 flex-1 flex items-end justify-center sm:justify-start">
            <div className="relative w-full h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px]">
              <Image
                src={image}
                alt={imageAlt || title}
                fill
                className="object-contain object-center"
              />
            </div>
          </div>
        )}
        <Link href={link} className="mt-auto">
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border border-black text-black hover:bg-brand-blue hover:text-white hover:border-brand-blue rounded-md flex items-center gap-2 min-w-52 w-auto"
          >
            Learn more
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

