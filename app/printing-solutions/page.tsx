import Image from "next/image";
import Link from "next/link";
import PartnerLogos from "@/components/partner-logos";
import { ArrowRight } from "lucide-react";
import { WorkCard } from "@/components/work-card";
import StatsSection from "@/components/stats-section";
import { ProductCard } from "@/components/product-card";
import TestimonialsSection from "@/components/testimonials-section";
import EnterpriseSolutions from "@/components/enterprise-solutions";
import CTASection from "@/components/cta-section";

export const metadata = {
  title: "Printing Solutions - ClearEdge",
  description: "Professional printing solutions for your business",
};

export default function PrintingSolutions() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-brand">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[300px] sm:min-h-[400px] lg:min-h-[496.513px]">
          {/* Left side - Text content with container padding */}
          <div className="container flex items-center py-6 sm:py-8 lg:py-12">
            <div className="w-full flex flex-col items-center lg:items-end justify-center px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 lg:py-12">
              <h1 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[60.138px] font-inter leading-[1.2] sm:leading-tight lg:leading-[75.172px] text-text-dark mb-4 sm:mb-6 lg:mb-8 tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-2.5057px] w-full max-w-full lg:max-w-[685px] text-center lg:text-left">
                <span className="font-light">The Right </span>
                <span className="font-extrabold">Print Solution </span>
                <span className="font-light">for the Way You Work.</span>
              </h1>
              <p className="text-[20px] font-inter text-text-dark leading-normal mb-8 space-y-4 w-full max-w-full lg:max-w-[685px] text-center lg:text-left">
                Independent print advice from experts who understand the entire print landscape - from office MFDs to specialty label makers.
              </p>
            </div>
          </div>
          {/* Right side - Hero image extends to edge */}
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-auto lg:min-h-[496.513px] bg-gray-200 order-first lg:order-last">
            <Image
              src="/assets/Service_printing_solutions.png"
              alt="Printing Solutions"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-start">
            <div>
              <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold font-roboto text-text-dark mb-4 sm:mb-6 tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-2px]">
                Controlling the Real Cost of Printing
              </h2>
              <div className="text-[16px] sm:text-[18px] md:text-[20px] font-inter text-text-dark leading-normal mb-6 sm:mb-8 space-y-4">
                <p>
                  Many organisations outgrow their print setups without realising it. Old devices, unmanaged leases, and rising consumable costs quietly erode productivity and profit.
                </p>
                <p className="font-bold">Typical pain points include:</p>
                <ul className="list-disc space-y-2 pl-6 italic">
                  <li>Equipment that doesn&#39;t match current workloads</li>
                  <li>Complex vendor contracts and unclear billing</li>
                  <li>Untracked usage and wasted supplies</li>
                  <li>Security gaps in networked printers</li>
                </ul>
                <p>These issues add up - not just in dollars, but in downtime.</p>
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
            <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] flex items-center justify-center lg:justify-end">
              <div className="relative w-full h-full">
                <Image
                  src="/assets/business-inkjet-signpost.png"
                  alt="Business Inkjet Printers"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Independent Print Strategy Section */}
      <section className="pt-12 sm:pt-16 md:pt-20 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-end">
            <div className="relative w-full order-2 flex items-end justify-center lg:order-1">
              <Image
                src="/assets/print_strategy.png"
                alt="Independent Print Strategy"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto object-contain max-w-md sm:w-auto"
                unoptimized
              />
            </div>
            <div className="order-1 lg:order-2 pb-12 sm:pb-16 md:pb-20">
              <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold font-roboto text-text-dark mb-4 sm:mb-6 tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-2px]">
                Independent Print Strategy, Setup & Support
              </h2>
              <div className="text-[16px] sm:text-[18px] md:text-[20px] font-inter text-text-dark leading-normal mb-6 sm:mb-8 space-y-4">
                <p>
                  ClearEdge provides vendor-neutral guidance to help you
                  implement smarter, scalable print solutions.
                </p>
                <p>
                  We&apos;re not tied to any one manufacturer - which means every
                  recommendation is made purely in your best interest.
                </p>
                <p className="font-bold">We combine:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li className="italic">
                    <span className="font-bold">Expert technical analysis –</span>{" "}
                    from desktop printers to production systems
                  </li>
                  <li className="italic">
                    <span className="font-bold">Transparent cost reporting –</span>{" "}
                    showing true cost-per-page and wastage
                  </li>
                  <li className="italic">
                    <span className="font-bold">Security and compliance –</span>{" "}
                    including access control and audit trails
                  </li>
                  <li className="italic">
                    <span className="font-bold">Eco-conscious recommendations –</span>{" "}
                    for lower energy use and waste
                  </li>
                </ul>
                <p>
                  Our goal is simple to make your print environment work harder
                  and cost less.
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
              description="We begin with a no-obligation print audit to assess your current setup, usage, and expenses."
              showNumberPeriod={true}
              variant="outlined"
            />
            <WorkCard
              number={2}
              title="Insight & Reporting"
              description="You'll receive a clear, data-backed report highlighting where savings and efficiency gains can be made."
              showNumberPeriod={true}
              variant="outlined"
            />
            <WorkCard
              number={3}
              title="Recommendations"
              description="We present tailored options - from right-sizing your fleet to introducing automation or cloud print management."
              showNumberPeriod={true}
              variant="outlined"
            />
            <WorkCard
              number={4}
              title="Implementation & Support"
              description="Our team manages deployment, configuration, and ongoing maintenance for a seamless transition."
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
              title="Department"
              subtitle="WorkForce"
              version="Enterprise"
              description="High-performance colour and monochrome multifunction devices built for consistency, speed, and image precision. Ideal for large departments needing reliable uptime and fast throughput."
              image="/assets/Department.png"
              imageAlt="Department WorkForce Enterprise"
              bgColor="#85b4b5"
              link="/contact"
              linkText="See the Range"
            />
            <ProductCard
              variant="variant2"
              title="Workgroup"
              subtitle="WorkForce"
              version="Pro"
              description="Single and multifunction models designed to handle high-volume document printing in managed network environments. Reliable, efficient, and easy to integrate."
              image="/assets/Workgroup.png"
              imageAlt="Workgroup WorkForce Pro"
              bgColor="#959b9e"
              link="/contact"
              linkText="See the Range"
            />
            <ProductCard
              variant="variant2"
              title="Desktop"
              subtitle="WorkForce"
              version="Pro"
              description="Compact yet powerful printers for small teams or satellite offices. Optimised for managed environments and consistent high-quality output."
              image="/assets/Desktop.png"
              imageAlt="Desktop WorkForce Pro"
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

      {/* Stop letting your printer slow you down Section */}
      <CTASection />
    </>
  );
}
