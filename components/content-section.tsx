"use client";

import React from "react";
import Image from "next/image";

interface ContentSectionProps {
  heading?: string | React.ReactNode;
  paragraphs?: string[];
  listTitle?: string;
  listItems?: string[];
  image?: string;
  imageAlt?: string;
  bgColor?: string;
  imagePosition?: "left" | "right";
  className?: string;
  sectionClassName?: string;
}

export default function ContentSection({
  heading,
  paragraphs = [],
  listTitle,
  listItems = [],
  image,
  imageAlt,
  bgColor = "",
  imagePosition = "right",
  className = "",
  sectionClassName = "",
}: ContentSectionProps) {
  const textContent = (
    <div className={`p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-center ${bgColor} ${className}`}>
      {heading && (
        <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-bold font-roboto text-text-dark mb-3 sm:mb-4 md:mb-5 lg:mb-6 tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-2px]">
          {heading}
        </h2>
      )}
      {paragraphs.map((paragraph, index) => {
        // If there's a list, render all paragraphs except the last one before the list
        // The last paragraph will be rendered after the list
        if (listItems.length > 0 && index === paragraphs.length - 1) {
          return null;
        }
        return (
          <p
            key={index}
            className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-inter text-text-dark leading-normal sm:leading-relaxed mb-3 sm:mb-4 md:mb-5 lg:mb-6"
          >
            {paragraph}
          </p>
        );
      })}
      {listTitle && (
        <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-inter text-text-dark font-bold mb-2 sm:mb-3 md:mb-4">
          {listTitle}
        </p>
      )}
      {listItems.length > 0 && (
        <ul className="list-disc space-y-1.5 sm:space-y-2 pl-5 sm:pl-6 mb-3 sm:mb-4 md:mb-5 lg:mb-6">
          {listItems.map((item, index) => (
            <li
              key={index}
              className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-inter text-text-dark leading-normal sm:leading-relaxed"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
      {listItems.length > 0 && paragraphs.length > 0 && (
        <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-inter text-text-dark leading-normal sm:leading-relaxed">
          {paragraphs[paragraphs.length - 1]}
        </p>
      )}
    </div>
  );

  const imageContent = image && (
    <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] order-first lg:order-0">
      <Image
        src={image}
        alt={imageAlt || ""}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
      />
    </div>
  );

  if (!image) {
    return (
      <section className={sectionClassName}>
        <div className="container mx-auto">
          {textContent}
        </div>
      </section>
    );
  }

  return (
    <section className={sectionClassName}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {imagePosition === "left" ? (
            <>
              {imageContent}
              {textContent}
            </>
          ) : (
            <>
              {textContent}
              {imageContent}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
