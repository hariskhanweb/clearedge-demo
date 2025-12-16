import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-blue-light text-white pt-12 sm:pt-16 md:pt-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
          {/* Solutions Column - First */}
          <div>
            <h3 className="text-[14px] sm:text-[15px] md:text-[16px] font-medium font-inter uppercase mb-3 sm:mb-4 tracking-[-0.32px]">
              Company
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/about-us"
                  className="text-[13px] sm:text-[14px] md:text-[15.1px] font-inter text-white hover:opacity-80 transition-opacity leading-[20px] sm:leading-[21.76px]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[13px] sm:text-[14px] md:text-[14.6px] font-inter text-white hover:opacity-80 transition-opacity leading-[20px] sm:leading-[21.76px]"
                >
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column - Second */}
          <div>
            <h3 className="text-[14px] sm:text-[15px] md:text-[16px] font-medium font-inter uppercase mb-3 sm:mb-4 tracking-[-0.32px]">
              Contact
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="mailto:support@clearedge.co.nz"
                  className="text-[13px] sm:text-[14px] md:text-[15.9px] font-inter text-white hover:opacity-80 transition-opacity leading-[20px] sm:leading-[21.76px]"
                >
                  Email
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+64"
                  className="text-[13px] sm:text-[14px] md:text-[15px] font-inter text-white hover:opacity-80 transition-opacity leading-[20px] sm:leading-[21.76px]"
                >
                  Phone
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[13px] sm:text-[14px] md:text-[14.1px] font-inter text-white hover:opacity-80 transition-opacity leading-[20px] sm:leading-[21.76px]"
                >
                  YouTube
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[13px] sm:text-[14px] md:text-[15.1px] font-inter text-white hover:opacity-80 transition-opacity leading-[20px] sm:leading-[21.76px]"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column - Third */}
          <div>
            <h3 className="text-[14px] sm:text-[15px] md:text-[16px] font-medium font-inter uppercase mb-3 sm:mb-4 tracking-[-0.32px]">
              Services
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/printing-solutions"
                  className="text-[13px] sm:text-[14px] md:text-[14.6px] font-inter text-white hover:opacity-80 transition-opacity leading-[20px] sm:leading-[21.76px]"
                >
                  Printing Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/communication-solutions"
                  className="text-[13px] sm:text-[14px] md:text-[14.9px] font-inter text-white hover:opacity-80 transition-opacity leading-[20px] sm:leading-[21.76px]"
                >
                  Communication Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/marketing-sales-system"
                  className="text-[13px] sm:text-[14px] md:text-[14.9px] font-inter text-white hover:opacity-80 transition-opacity leading-[20px] sm:leading-[21.76px]"
                >
                  Marketing & Sales System
                </Link>
              </li>
              <li>
                <Link
                  href="/productivity-efficiency"
                  className="text-[13px] sm:text-[14px] md:text-[14.8px] font-inter text-white hover:opacity-80 transition-opacity leading-[20px] sm:leading-[21.76px]"
                >
                  Productivity & Efficiency
                </Link>
              </li>
              <li>
                <Link
                  href="/hardware-operational-solutions"
                  className="text-[13px] sm:text-[14px] md:text-[14.5px] font-inter text-white hover:opacity-80 transition-opacity leading-[20px] sm:leading-[21.76px]"
                >
                  Hardware & Operational Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/security-privacy"
                  className="text-[13px] sm:text-[14px] md:text-[15px] font-inter text-white hover:opacity-80 transition-opacity leading-[20px] sm:leading-[21.76px]"
                >
                  Security & Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 pb-6 sm:pb-8 lg:pt-8 lg:pb-8">
          <div className="flex flex-col items-start lg:items-start justify-between gap-4 lg:gap-4">
            {/* Left side - Logo and Tagline */}
            <div className="flex flex-col w-full lg:w-auto">
              <div className="flex items-center gap-3 mb-2 w-full lg:w-auto">
                <Image
                  src="/assets/logo-lg.png"
                  alt="ClearEdge Logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto w-auto max-w-[200px] sm:max-w-none lg:max-w-none object-contain"
                  unoptimized
                />
              </div>
            </div>

            {/* Right side - Copyright, Links, Email, Location */}
            <div className="flex flex-col lg:flex-col items-end gap-2 w-full">
              <div className="flex flex-col sm:flex-row lg:flex-row items-start sm:items-center lg:items-center justify-between gap-3 sm:gap-4 lg:gap-6 w-full">                
                <div className="flex flex-wrap flex-row items-start sm:items-center lg:items-center gap-3 sm:gap-4 lg:gap-6">
                  <p className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14.9px] font-inter text-white leading-[18px] sm:leading-[20px] lg:leading-[21.76px]">
                    © 2025 ClearEdge Ltd. All Rights Reserved.
                  </p>
                  <Link
                    href="#"
                    className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14.9px] font-inter text-white hover:opacity-80 transition-opacity leading-[18px] sm:leading-[20px] lg:leading-[21.76px] whitespace-nowrap"
                  >
                    Terms & Conditions
                  </Link>
                </div>
                <div className="hidden sm:flex items-center gap-3 sm:gap-4 lg:gap-6">
                  <Image
                    src="/assets/icon.svg"
                    alt="Icon"
                    width={27}
                    height={26}
                    className="w-auto h-auto object-contain shrink-0"
                    unoptimized
                  />
                </div>
                <div className="flex flex-row flex-wrap items-start sm:items-center lg:items-center gap-3 sm:gap-4 lg:gap-6">
                  <Link
                    href="#"
                    className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14.9px] font-inter text-white hover:opacity-80 transition-opacity leading-[18px] sm:leading-[20px] lg:leading-[21.76px] whitespace-nowrap"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="mailto:support@clearedge.co.nz"
                    className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15.1px] font-inter text-white hover:opacity-80 transition-opacity leading-[18px] sm:leading-[20px] lg:leading-[21.76px] break-all sm:break-normal lg:break-normal"
                  >
                    support@clearedge.co.nz
                  </Link>
                  <p className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14.9px] font-inter text-white leading-[18px] sm:leading-[20px] lg:leading-[21.76px] whitespace-nowrap">
                    Location: NZ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

