"use client";

import React from "react";
import Image from "next/image";

interface HeroSectionProps {
  backgroundImage?: string;
  title?: string | React.ReactNode;
  imageAlt?: string;
  className?: string;
}

const defaultProps: HeroSectionProps = {
  backgroundImage: "/assets/about_clear_edge.png",
  title: "About ClearEdge",
  imageAlt: "About ClearEdge",
};

export default function HeroSection({
  backgroundImage = defaultProps.backgroundImage,
  title = defaultProps.title,
  imageAlt = defaultProps.imageAlt,
  className = "",
}: HeroSectionProps = {}) {
  return (
    <section className={`relative w-full ${className}`}>
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px]">
        <Image
          src={backgroundImage || defaultProps.backgroundImage!}
          alt={imageAlt || defaultProps.imageAlt!}
          fill
          className="object-cover"
          priority
        />
        {/* Black overlay with 80% opacity */}
        <div className="absolute inset-0 bg-black/80"></div>
        {title && (
          <div className="absolute inset-0 flex items-center justify-start z-10">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
              <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-inter text-white leading-tight">
                {title}
              </h1>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
