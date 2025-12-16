"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
  isVisible: boolean;
}

function Counter({ target, suffix = "", duration = 2000, isVisible }: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!isVisible || !hasMounted) return;

    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(startValue + (target - startValue) * easeOutQuart);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration, isVisible, hasMounted]);

  // Ensure consistent initial render
  if (!hasMounted) {
    return (
      <span>
        0{suffix}
      </span>
    );
  }

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

interface ButtonConfig {
  label?: string;
  url?: string;
}

interface StatsSectionProps {
  button1?: ButtonConfig;
  button2?: ButtonConfig;
}

export default function StatsSection({ button1, button2 }: StatsSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="pt-5 sm:pt-8 md:pt-10 pb-10 sm:pb-0 bg-brand-bg">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 items-center">
          {/* Left Column - Heading, Stats, and Buttons */}
          <div className="order-2 lg:order-1">
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[39.29px] xl:text-[42px] font-roboto text-black mb-6 sm:mb-8 md:mb-10 lg:mb-12 tracking-[-1.2px] sm:tracking-[-1.4px] md:tracking-[-1.6px] lg:tracking-[-1.7px] xl:tracking-[-1.86px]">
              <span className="font-bold">Expect More</span>{" "}
              <span className="font-light">from your</span>{" "}
              <span className="font-bold">Tech</span>
            </h2>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
              <div className="text-center sm:text-left">
                <div className="text-[36px] sm:text-[42px] md:text-[46px] lg:text-[50px] xl:text-[54.834px] font-manrope text-[#050505] leading-[44px] sm:leading-[52px] md:leading-[58px] lg:leading-[64px] xl:leading-[74.236px] tracking-[-1.2px] sm:tracking-[-1.5px] md:tracking-[-1.7px] lg:tracking-[-1.9px] xl:tracking-[-2.0246px] mb-1 sm:mb-2">
                  <Counter target={1200} suffix="+" isVisible={isVisible} />
                </div>
                <div className="text-[11px] sm:text-[11.5px] md:text-[12px] lg:text-[12.5px] xl:text-[13.498px] font-roboto text-text-light uppercase leading-[14px] sm:leading-[15px] md:leading-[16px] lg:leading-[16.5px] xl:leading-[17.547px] tracking-[-0.15px] sm:tracking-[-0.2px] md:tracking-[-0.23px] lg:tracking-[-0.25px] xl:tracking-[-0.27px]">
                  KIWI businesses SUPPORTED
                </div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-[36px] sm:text-[42px] md:text-[46px] lg:text-[50px] xl:text-[54.834px] font-manrope text-[#050505] leading-[44px] sm:leading-[52px] md:leading-[58px] lg:leading-[64px] xl:leading-[74.236px] tracking-[-1.2px] sm:tracking-[-1.5px] md:tracking-[-1.7px] lg:tracking-[-1.9px] xl:tracking-[-2.0246px] mb-1 sm:mb-2">
                  <Counter target={15000} suffix="+" isVisible={isVisible} />
                </div>
                <div className="text-[11px] sm:text-[11.5px] md:text-[12px] lg:text-[12.5px] xl:text-[13.498px] font-roboto text-text-light uppercase leading-[14px] sm:leading-[15px] md:leading-[16px] lg:leading-[16.5px] xl:leading-[17.547px] tracking-[-0.15px] sm:tracking-[-0.2px] md:tracking-[-0.23px] lg:tracking-[-0.25px] xl:tracking-[-0.27px]">
                  DEVICES AND SYSTEMS MANAGED
                </div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-[36px] sm:text-[42px] md:text-[46px] lg:text-[50px] xl:text-[54.834px] font-manrope text-[#050505] leading-[44px] sm:leading-[52px] md:leading-[58px] lg:leading-[64px] xl:leading-[74.236px] tracking-[-1.2px] sm:tracking-[-1.5px] md:tracking-[-1.7px] lg:tracking-[-1.9px] xl:tracking-[-2.0246px] mb-1 sm:mb-2">
                  <Counter target={100} suffix="%" isVisible={isVisible} />
                </div>
                <div className="text-[11px] sm:text-[11.5px] md:text-[12px] lg:text-[12.5px] xl:text-[13.498px] font-roboto text-text-light uppercase leading-[14px] sm:leading-[15px] md:leading-[16px] lg:leading-[16.5px] xl:leading-[17.547px] tracking-[-0.15px] sm:tracking-[-0.2px] md:tracking-[-0.23px] lg:tracking-[-0.25px] xl:tracking-[-0.27px]">
                  SATISFACTION GUARANTEED
                </div>
              </div>
            </div>

            {/* Buttons */}
            {(button1?.url && button1?.label) || (button2?.url && button2?.label) ? (
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5">
                {button1?.url && button1?.label && (
                  <Link 
                    href={button1.url}
                    className="inline-flex items-center justify-center h-12 sm:h-14 px-4 sm:px-8 text-sm sm:text-base md:text-lg bg-brand-blue hover:bg-brand-blue-dark text-white rounded-none font-roboto font-normal transition-colors gap-2 w-full sm:w-auto"
                  >
                    {button1.label}
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                )}
                {button2?.url && button2?.label && (
                  <Link 
                    href={button2.url}
                    className="inline-flex items-center justify-center h-12 sm:h-14 px-4 sm:px-8 text-sm sm:text-base md:text-lg bg-brand-blue hover:bg-brand-blue-dark text-white rounded-none font-roboto font-normal transition-colors gap-2 w-full sm:w-auto"
                  >
                    {button2.label}
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                )}
              </div>
            ) : null}
          </div>

          {/* Right Column - Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px] 2xl:max-w-[550px] aspect-square">
              <Image
                src="/assets/pngtree-sales-rep.png"
                alt="Sales representative"
                fill
                className="object-contain object-center md:object-bottom"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
