"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const partnerLogos = [
  { name: "Appline Print", src: "/assets/logo/Appline_Print.png" },
  { name: "Brother", src: "/assets/logo/Brother.png" },
  { name: "Epson", src: "/assets/logo/Epson.png" },
  { name: "Fujifilm", src: "/assets/logo/Fujifilm.png" },
  { name: "Holloway", src: "/assets/logo/Holloway.png" },
  { name: "Ricoh", src: "/assets/logo/Ricoh.png" },
  { name: "Samsung", src: "/assets/logo/Samsung.png" },
];

export default function PartnerLogos() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Duplicate logos 3 times for seamless infinite scroll (33.333% = 1/3)
  const duplicatedLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos];

  return (
    <section className="py-8 sm:py-12 bg-white overflow-hidden w-full">
      <div className="relative w-full">
        {/* Continuous scrolling container */}
        <div className={`flex items-center w-max ${isMounted ? 'animate-scroll' : ''}`}>
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="shrink-0 flex items-center justify-center h-12 sm:h-16 md:h-20 px-4"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={200}
                height={80}
                className="h-full w-auto object-contain max-w-[200px] sm:max-w-[250px] md:max-w-[300px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

