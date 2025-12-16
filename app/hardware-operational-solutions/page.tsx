import CTASection from "@/components/cta-section";
import EnterpriseSolutions from "@/components/enterprise-solutions";
import PartnerLogos from "@/components/partner-logos";
import { ProductCard } from "@/components/product-card";
import StatsSection from "@/components/stats-section";
import TestimonialsSection from "@/components/testimonials-section";
import { WorkCard } from "@/components/work-card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Hardware & Operational Solutions - ClearEdge",
  description: "Comprehensive hardware and operational solutions for your business",
};

export default function HardwareOperationalSolutions() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-brand">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[300px] sm:min-h-[400px] lg:min-h-[496.513px]">
          {/* Left side - Text content with container padding */}
          <div className="container flex items-center py-6 sm:py-8 lg:py-12">
            <div className="w-full flex flex-col items-center lg:items-end justify-center px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 lg:py-12">
              <h1 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[60.138px] font-inter leading-[1.2] sm:leading-tight lg:leading-[75.172px] text-text-dark mb-4 sm:mb-6 lg:mb-8 tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-2.5057px] w-full max-w-full lg:max-w-[685px] text-center lg:text-left">
                <span className="font-light">Better Business </span>
                <span className="font-extrabold block">Hardware & Operational Solutions</span>
              </h1>
              <p className="text-[20px] font-inter text-text-dark leading-normal mb-8 space-y-4 w-full max-w-full lg:max-w-[685px] text-center lg:text-left">
              The right devices. Properly managed. Ready for work.
              </p>
            </div>
          </div>
          {/* Right side - Hero image extends to edge */}
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-auto lg:min-h-[496.513px] bg-gray-200 order-first lg:order-last">
            <Image
              src="/assets/hardware-operational-solutions_01.webp"
              alt="Better Business Hardware & Operations, Simplified"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Partner Logos Section */}
      <PartnerLogos />

      {/* Controlling the Real Cost of Printing Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-brand">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-center">
            <div>
              <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold font-roboto text-text-dark mb-4 sm:mb-6 tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-2px]">
                When Technology Slows Operations Down
              </h2>
              <div className="text-[16px] sm:text-[18px] md:text-[20px] font-inter text-text-dark leading-normal mb-6 sm:mb-8 space-y-4">
                <p>
                  Outdated or poorly managed hardware quietly slows businesses down.
                </p>
                <p>
                  Devices fail, security risks increase, and teams waste time working around technology instead of relying on it.
                </p>
                <p className="font-bold">Common issues include:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Laptops and desktops that are difficult to manage or secure.</li>
                  <li>Devices that can&apos;t be monitored, updated, or wiped remotely.</li>
                  <li>Inconsistent setups across teams or locations.</li>
                  <li>Rising costs from inefficient or ageing equipment.</li>
                  <li>Little visibility into device lifecycle or usage.</li>
                </ul>
                <p>When hardware isn&apos;t managed properly, it becomes a bottleneck rather than a foundation.</p>
              </div>
              <div className="flex flex-row flex-wrap gap-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center h-12 sm:h-14 px-4 sm:px-8 text-base sm:text-lg bg-brand-blue hover:bg-[#023d8a] text-white rounded-none font-roboto font-normal transition-colors gap-2"
                >
                  Book an Audit
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center h-12 sm:h-14 px-4 sm:px-8 text-base sm:text-lg bg-[#767676] hover:bg-[#656565] text-white rounded-none font-roboto font-normal transition-colors gap-2"
                >
                  View Products
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="relative w-full flex items-center justify-center lg:justify-end">
              <div className="relative w-full">
                <Image
                  src="/assets/hardware-operational-solutions_02.webp"
                  alt="Hardware & Operational Tools"
                  width={1920}
                  height={1080}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Independent Print Strategy Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-center">
            <div className="relative w-full order-2 flex items-center justify-center lg:order-1">
              <Image
                src="/assets/hardware-operational-solutions_03.webp"
                alt="Independent Hardware & Operational Strategy, Setup & Support"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold font-roboto text-text-dark mb-4 sm:mb-6 tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-2px]">
                Independent Hardware & Operational Strategy
              </h2>
              <div className="text-[16px] sm:text-[18px] md:text-[20px] font-inter text-text-dark leading-normal mb-6 sm:mb-8 space-y-4">
                <p>
                  ClearEdge helps businesses select, deploy, and manage the right devices and systems - without unnecessary upsell or complexity.
                </p>
                <p>
                  We focus on what your team actually needs to work effectively, then put the right operational systems around it to keep everything secure, connected, and easy to support.
                </p>
                <p className="font-bold">We combine:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <span className="font-bold">Device Selection & Provisioning</span> – laptops, desktops, peripherals, and workplace hardware matched to real workloads
                  </li>
                  <li>
                    <span className="font-bold">Cloud-Based Device Management</span> – centralised control, updates, and security
                  </li>
                  <li>
                    <span className="font-bold">Operational Consistency</span> – standardised setups across teams and locations
                  </li>
                  <li>
                    <span className="font-bold">Lifecycle Management</span> – deployment, replacement, and retirement handled properly
                  </li>
                  <li>
                    <span className="font-bold">Ongoing Support</span> – keeping devices reliable as your business evolves
                  </li>
                </ul>
                <p>
                  The result is hardware that works quietly in the background - supporting productivity, not disrupting it.
                </p>
              </div>
              <div className="flex flex-wrap flex-row gap-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center h-12 sm:h-14 px-4 sm:px-8 text-base sm:text-lg bg-brand-blue hover:bg-[#023d8a] text-white rounded-none font-roboto font-normal transition-colors gap-2"
                >
                  Book an Audit
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center h-12 sm:h-14 px-4 sm:px-8 text-base sm:text-lg bg-[#767676] hover:bg-[#656565] text-white rounded-none font-roboto font-normal transition-colors gap-2"
                >
                  View Products
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Let&apos;s Get to Work Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[39.29px] font-roboto text-black text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <span className="font-bold">Let&apos;s </span>
            <span className="font-light">get to</span>
            <span className="font-bold"> Work</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <WorkCard
              number={1}
              title="Discovery & Audit"
              description="Review your current hardware, device usage, and operational requirements."
              showNumberPeriod={true}
              variant="outlined"
            />
            <WorkCard
              number={2}
              title="Recommendations"
              description="Receive clear guidance on the right devices and management approach."
              showNumberPeriod={true}
              variant="outlined"
            />
            <WorkCard
              number={3}
              title="Implementation & Setup"
              description="Deploy and configure devices with minimal disruption."
              showNumberPeriod={true}
              variant="outlined"
            />
            <WorkCard
              number={4}
              title="Support & Optimisation"
              description="Ongoing monitoring, updates, and lifecycle management."
              showNumberPeriod={true}
              variant="outlined"
            />
          </div>
          <div className="flex flex-wrap justify-center flex-row gap-4">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center h-12 sm:h-14 px-4 sm:px-8 text-base sm:text-lg bg-brand-blue hover:bg-[#023d8a] text-white rounded-none font-roboto font-normal transition-colors gap-2"
            >
              Book an Audit
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center h-12 sm:h-14 px-4 sm:px-8 text-base sm:text-lg bg-[#767676] hover:bg-[#656565] text-white rounded-none font-roboto font-normal transition-colors gap-2"
            >
              View Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection
        button1={{
          label: "Book an Audit",
          url: "/contact",
        }}
        button2={{
          label: "View Products",
          url: "/contact",
        }}
      />

      {/* Featured Products Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#e1ebec] hidden">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[39.29px] font-roboto text-black text-center mb-8 sm:mb-10 md:mb-12 tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-1.86px]">
            <span className="font-bold">Featured </span>
            <span className="font-light">Products</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            <ProductCard
              variant="variant2"
              title="Epson EB-685W"
              description="Delivering 3,500 lumens brightness and HD-ready resolution, the EB-685W ensures vivid, widescreen images for classrooms and meeting spaces. Its ultra short throw design allows flexible placement, while optional wireless connectivity and long lamp life make it a reliable, easy-to-use solution."
              image="/assets/epson_685_eb.png"
              imageAlt="Epson EB-685W Projector"
              bgColor="#85b4b5"
              link="/contact"
              linkText="See the Range"
            />
            <ProductCard
              variant="variant2"
              title="Epson EB-L635SU"
              description="Epson EB-L635SU is a compact, bright laser projector offering stunning WUXGA resolution and vivid colours. Its short throw lens enables flexible installation, while 20,000 hours of maintenance-free operation ensure reliable performance for any meeting or display environment."
              image="/assets/epson_635_eb.png"
              imageAlt="Epson EB-L635SU Projector"
              bgColor="#959b9e"
              link="/contact"
              linkText="See the Range"
            />
            <ProductCard
              variant="variant2"
              title="MeetingMate EB-1485Fi"
              description="The Epson MeetingMate EB-1485Fi is a short-throw interactive laser projector for business and education. It offers bright, touch-enabled projection up to 120&quot;, supports easy wireless content sharing, split-screen, and interactive meetings with direct save and print features. Its maintenance-free laser light source lasts up to 20,000 hours, making it reliable for collaborative environments."
              image="/assets/meeting_mate_eb.png"
              imageAlt="Epson MeetingMate EB-1485Fi Projector"
              bgColor="#83b6b7"
              link="/contact"
              linkText="See the Range"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Enterprise Solutions & Stats Section */}
      <EnterpriseSolutions />

      {/* Get clarity in every call and meeting Section */}
      <CTASection
        title="Upgrade your tech without the hassle."
        subtitle="Book a Free Hardware & Operations Audit"
        subtitleNormal="- no cost, no obligation."
        listTitle="You'll get:"
        listItems={[
          "A clear view of your current hardware environment",
          "Practical recommendations to improve performance and security",
          "Guidance tailored to your team and operational needs",
        ]}
        primaryButtonText="Book an Audit"
        secondaryButtonText="Talk to a Specialist"
      />
    </>
  );
}
