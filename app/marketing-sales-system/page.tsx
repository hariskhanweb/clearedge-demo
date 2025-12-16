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
  title: "Marketing & Sales System - ClearEdge",
  description: "Innovative marketing and sales solutions for your business",
};

export default function MarketingSalesSystem() {
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
                <span className="font-extrabold">Marketing & Sales Systems</span>
              </h1>
              <p className="text-[20px] font-inter text-text-dark leading-normal mb-8 space-y-4 w-full max-w-full lg:max-w-[685px] text-center lg:text-left">
              Consistent messaging. Smarter engagement. Better outcomes.
              </p>
            </div>
          </div>
          {/* Right side - Hero image extends to edge */}
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-auto lg:min-h-[496.513px] bg-gray-200 order-first lg:order-last">
            <Image
              src="/assets/marketing-sales-system_01.webp"
              alt="Better Business Marketing & Sales, Simplified"
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
                When Marketing Systems Don&#39;t Support Sales
              </h2>
              <div className="text-[16px] sm:text-[18px] md:text-[20px] font-inter text-text-dark leading-normal mb-6 sm:mb-8 space-y-4">
                <p>
                  Many businesses invest in marketing tools, displays, or campaigns - but without a clear system behind them.
                </p>
                <p>Content becomes outdated.</p>
                <p>Messaging is inconsistent across locations.</p>
                <p>Updates take too long or rely on manual workarounds.</p>
                <p className="font-bold">Common challenges include:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Static or disconnected in-store messaging.</li>
                  <li>Multiple tools with no central control.</li>
                  <li>Promotions that are hard to update or measure.</li>
                  <li>Inconsistent branding across sites.</li>
                  <li>Marketing technology that operates in isolation from sales activity.</li>
                </ul>
                <p>The result is lost attention, missed opportunities, and marketing effort that doesn&#39;t translate into results.</p>
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
                  src="/assets/marketing-sales-system_02.webp"
                  alt="Marketing & Sales Tools"
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
                src="/assets/marketing-sales-system_03.webp"
                alt="Independent Marketing & Sales Strategy, Setup & Support"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto object-contain"
                unoptimized
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold font-roboto text-text-dark mb-4 sm:mb-6 tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-2px]">
                Independent Marketing & Sales Strategy, Setup & Support
              </h2>
              <div className="text-[16px] sm:text-[18px] md:text-[20px] font-inter text-text-dark leading-normal mb-6 sm:mb-8 space-y-4">
                <p>
                  At ClearEdge, we design and deliver sales and marketing systems that support customer engagement and sales conversations in physical spaces.
                </p>
                <p>
                  We&apos;re not tied to a single platform or vendor - we focus on solutions that fit your environment, your locations, and your objectives.
                </p>
                <p className="font-bold">We combine:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <span className="font-bold">Digital Display & Signage Systems</span> – centrally managed messaging across one or many sites
                  </li>
                  <li>
                    <span className="font-bold">Content Management Platforms</span> – simple tools for scheduling and updating promotions in real time
                  </li>
                  <li>
                    <span className="font-bold">Sales Enablement Messaging</span> – supporting offers, product information, and customer decision-making
                  </li>
                  <li>
                    <span className="font-bold">Professional Hardware Setup</span> – commercial-grade screens, media players, and infrastructure
                  </li>
                  <li>
                    <span className="font-bold">Ongoing Support & Training</span> – ensuring your team stays confident and in control
                  </li>
                </ul>
                <p>
                  Our goal is to help your sales and marketing technology work together - without adding complexity.
                </p>
              </div>
              <div className="flex flex-wrap flex-row gap-4">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-brand-blue hover:bg-[#023d8a] text-white rounded-none flex items-center gap-2"
                >
                  Book an Audit
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button
                  variant="default"
                  size="lg"
                  className="bg-[#767676] hover:bg-[#656565] text-white rounded-none flex items-center gap-2"
                >
                  View Products
                  <ArrowRight className="w-5 h-5" />
                </Button>
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
              description="Review your sales messaging, displays, and customer touch points."
              showNumberPeriod={true}
              variant="outlined"
            />
            <WorkCard
              number={2}
              title="Recommendations"
              description="Get clear guidance to improve consistency and sales impact."
              showNumberPeriod={true}
              variant="outlined"
            />
            <WorkCard
              number={3}
              title="Implementation & Setup"
              description="Deploy displays and content systems with minimal disruption."
              showNumberPeriod={true}
              variant="outlined"
            />
            <WorkCard
              number={4}
              title="Support & Optimisation"
              description="Ongoing support to keep messaging effective and up to date."
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
      <section className="py-12 sm:py-16 md:py-20 bg-[#e1ebec]">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[39.29px] font-roboto text-black text-center mb-8 sm:mb-10 md:mb-12 tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-1.86px]">
            <span className="font-bold">Featured </span>
            <span className="font-light">Products</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            <ProductCard
              variant="variant2"
              title="Samsung E-Paper"
              description="Introducing the Color E-Paper EMDX series, Samsung&apos;s next-generation product featuring ultra-light and ultra-thin displays with low power consumption. It delivers paper-like picture quality without additional infrastructure, digitising the traditional paper experience."
              image="/assets/Samsung_E-Paper.webp"
              imageAlt="Samsung E-Paper"
              bgColor="#85b4b5"
              link="/contact"
              linkText="See the Range"
            />
            <ProductCard
              variant="variant2"
              title="Epson EB-805F"
              description="The Epson EB-805F is a 5,000-lumen Full HD laser projector for digital signage, offering large, bright images with ultra-short throw and long-life, low-maintenance performance."
              image="/assets/Epson_EB-805F.webp"
              imageAlt="Epson EB-805F Projector"
              bgColor="#959b9e"
              link="/contact"
              linkText="See the Range"
            />
            <ProductCard
              variant="variant2"
              title="Epson EB-L210SF"
              description="The EB-L210SF can technically scale down to about a 55-inch diagonal image; that is effectively the smallest practical screen size Epson specifies for this projector."
              image="/assets/Epson_EB-L210SF.webp"
              imageAlt="Epson EB-L210SF Projector"
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
        title="Keep your message clear where sales happen."
        subtitle="Book a Free Sales & Marketing Systems Audit"
        subtitleNormal="- no cost, no obligation."
        listTitle="You'll get:"
        listItems={[
          "A clear review of your current sales and marketing systems",
          "Practical ways to improve consistency and engagement",
          "Recommendations tailored to your locations, team size, and workflow",
        ]}
        primaryButtonText="Book an Audit"
        secondaryButtonText="Talk to a Specialist"
      />
    </>
  );
}
