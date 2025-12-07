"use client";

import Image from "next/image";

interface PartnersSectionProps {
  className?: string;
}

const firstRowPartners = [
  { name: "Samsung", src: "/assets/logo/Samsung.png" },
  { name: "Ricoh", src: "/assets/logo/Ricoh.png" },
  { name: "Epson", src: "/assets/logo/Epson.png" },
  { name: "Brother", src: "/assets/logo/Brother.png" },
  { name: "Fujifilm", src: "/assets/logo/Fujifilm.png" },
];

const secondRowPartners = [
  { name: "Nestlé", src: "/assets/logo/nestle.png" },
  { name: "Greenmount Interiors", src: "/assets/logo/greenmount.png" },
  { name: "Appline Print", src: "/assets/logo/Appline_Print.png" },
  { name: "Holloway", src: "/assets/logo/Holloway.png" },
];

export default function PartnersSection({ className = "" }: PartnersSectionProps) {
  return (
    <section className={`py-12 sm:py-16 md:py-20 bg-[#E1EBEC] ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold font-roboto text-text-dark text-center mb-8 sm:mb-10 md:mb-12 tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-2px]">
          Our Partners.
        </h2>
        
        {/* First Row - Top Tier Partners */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-6 sm:mb-8 md:mb-10">
          {firstRowPartners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center h-12 sm:h-16 md:h-20 lg:h-24"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={200}
                height={80}
                className="h-full w-auto object-contain max-w-[150px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[220px]"
              />
            </div>
          ))}
        </div>

        {/* Second Row - Business Partners */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {secondRowPartners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center h-10 sm:h-14 md:h-16 lg:h-20"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={200}
                height={80}
                className="h-full w-auto object-contain max-w-[120px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-[200px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
