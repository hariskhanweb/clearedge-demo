"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  subtitleNormal?: string;
  listTitle?: string;
  listItems?: string[];
  primaryButtonText?: string;
  primaryButtonUrl?: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
  image?: string;
  imageAlt?: string;
  bgColor?: string;
}

const defaultProps: CTASectionProps = {
  title: "Stop letting your printer slow you down.",
  subtitle: "Book a Free Print Audit",
  subtitleNormal: "- no cost, no obligation.",
  listTitle: "You'll get:",
  listItems: [
    "A custom report outlining where your money is going",
    "Actionable ways to save",
    "Recommendations tailored to your team size and print volume",
  ],
  primaryButtonText: "Book an Audit",
  primaryButtonUrl: "#",
  secondaryButtonText: "Talk to a Specialist",
  secondaryButtonUrl: "#",
  image: "/assets/customer-service-operator.png",
  imageAlt: "Customer service operator",
  bgColor: "#E1EBEC",
};

export default function CTASection({
  title = defaultProps.title,
  subtitle = defaultProps.subtitle,
  subtitleNormal = defaultProps.subtitleNormal,
  listTitle = defaultProps.listTitle,
  listItems = defaultProps.listItems,
  primaryButtonText = defaultProps.primaryButtonText,
  primaryButtonUrl = defaultProps.primaryButtonUrl,
  secondaryButtonText = defaultProps.secondaryButtonText,
  secondaryButtonUrl = defaultProps.secondaryButtonUrl,
  image = defaultProps.image,
  imageAlt = defaultProps.imageAlt,
  bgColor = defaultProps.bgColor,
}: CTASectionProps = {}) {
  const primaryUrl: string = primaryButtonUrl || defaultProps.primaryButtonUrl || "#";
  const secondaryUrl: string = secondaryButtonUrl || defaultProps.secondaryButtonUrl || "#";
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div
          className="rounded-lg flex flex-col"
          style={{ backgroundColor: bgColor }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="p-6 sm:p-8 md:p-10 lg:p-12">
              <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold font-roboto text-text-gray mb-4 sm:mb-6 leading-[1.1] sm:leading-[44.8px]">
                {title}
              </h2>
              <p className="text-[14px] sm:text-[15px] md:text-[16px] font-bold font-roboto text-text-gray mb-4 sm:mb-6 leading-[24px]">
                <span>{subtitle} </span>
                {subtitleNormal && (
                  <span className="font-normal">{subtitleNormal}</span>
                )}
              </p>
              <div className="text-[14px] sm:text-[15px] md:text-[16px] font-roboto text-text-gray mb-6 sm:mb-8">
                <p className="font-bold mb-2 sm:mb-3">{listTitle}</p>
                <ul className="list-disc space-y-2 sm:space-y-3 pl-5 sm:pl-6 font-normal">
                  {listItems?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={primaryUrl}>
                  <Button
                    variant="default"
                    size="lg"
                    className="bg-brand-blue hover:bg-[#023d8a] text-white rounded-none flex items-center gap-2"
                  >
                    {primaryButtonText}
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link href={secondaryUrl}>
                  <Button
                    variant="default"
                    size="lg"
                    className="bg-[#767676] hover:bg-[#656565] text-white rounded-none flex items-center gap-2"
                  >
                    {secondaryButtonText}
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[543px] order-last lg:order-last">
              <Image
                src={image || defaultProps.image!}
                alt={imageAlt || defaultProps.imageAlt!}
                fill
                className="object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
