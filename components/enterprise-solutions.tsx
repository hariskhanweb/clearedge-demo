"use client";

import Image from "next/image";

export default function EnterpriseSolutions() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-brand-blue-dark overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/30years_bg.png"
          alt="Background pattern"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay */}
      <div 
        className="absolute inset-0 z-5 opacity-95" 
        style={{
          background: 'radial-gradient(133.3% 129.52% at 67.93% 38.58%, #3264D7 0%, #08318F 86.02%)'
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
          {/* Left Column - Text Content */}
          <div className="relative z-10 flex flex-col justify-center">
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[39.286px] xl:text-[42px] font-roboto text-white mb-6 sm:mb-8 text-left">
              <span className="font-bold">Enterprise Level Solutions </span>
              <br className="hidden sm:block" />
              <span className="font-light">for New Zealand </span>
              <span className="font-bold">SME&apos;s</span>
            </h2>
            <p className="text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px] font-roboto text-white leading-[28px] sm:leading-[30px] md:leading-[32px] lg:leading-[34px] xl:leading-[36.2px] mb-6 sm:mb-8 text-center lg:text-left">
              Technology solutions to help your business run better. If you&apos;re running a business, chances are you&apos;re juggling a lot. We&apos;re here to make the tech side easier. At ClearEdge, we help Kiwi businesses like yours use the right digital tools to save time, cut costs, and work more efficiently. we have expertise in many business tech fields from printing solutions to meeting room technology.
            </p>
            <p className="text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px] font-roboto text-white leading-[28px] sm:leading-[30px] md:leading-[32px] lg:leading-[34px] xl:leading-[36.2px] tracking-[0.2px] sm:tracking-[0.3px] lg:tracking-[0.4px] text-center lg:text-left">
              You can start with our free Business Technology Audit where we&apos;ll take a look at your current setup and show you where things could be tighter, faster, or more secure - without any pressure to buy. Whether it&apos;s one system or your whole setup, we&apos;ll help you get more from your tech, so you can focus on what matters.
            </p>
          </div>

          {/* Right Column - Logo and Stats */}
          <div className="relative z-10 flex flex-col items-center justify-start gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16">
            {/* ClearEdge Logo - Top */}
            <div className="w-full flex justify-center">
              <Image
                src="/assets/logo-lg.png"
                alt="ClearEdge"
                width={400}
                height={80}
                className="h-auto w-full max-w-[180px] sm:max-w-[220px] md:max-w-[280px] lg:max-w-[320px] xl:max-w-[400px]"
              />
            </div>

            {/* 30 Years Experience SVG */}
            <div className="w-full flex justify-center">
              <div className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[380px] xl:max-w-[400px]">
                <Image
                  src="/assets/30_years.svg"
                  alt="30 Years Experience"
                  width={400}
                  height={200}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
