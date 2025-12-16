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
  title: "Productivity & Efficiency - ClearEdge",
  description: "Innovative productivity and efficiency solutions for your business",
};

export default function ProductivityEfficiency() {
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
                <span className="font-extrabold block">Productivity & Efficiency</span>
              </h1>
              <p className="text-[20px] font-inter text-text-dark leading-normal mb-8 space-y-4 w-full max-w-full lg:max-w-[685px] text-center lg:text-left">
              Do more. With less effort.
              </p>
            </div>
          </div>
          {/* Right side - Hero image extends to edge */}
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-auto lg:min-h-[496.513px] bg-gray-200 order-first lg:order-last">
            <Image
              src="/assets/productivity-efficiency_01.webp"
              alt="Better Business Productivity & Efficiency, Simplified"
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
                When Workflows Slow Your Business Down
              </h2>
              <div className="text-[16px] sm:text-[18px] md:text-[20px] font-inter text-text-dark leading-normal mb-6 sm:mb-8 space-y-4">
                <p>
                  Manual data entry, disconnected apps, and duplicated effort quietly drain time and energy from teams.
                </p>
                <p>
                  Information gets lost between systems, reporting becomes unreliable, and simple tasks take longer than they should.
                </p>
                <p className="font-bold">Common challenges include:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Re-entering data across multiple tools.</li>
                  <li>Spreadsheets used as systems of record.</li>
                  <li>Disconnected CRM, invoicing, and job tracking.</li>
                  <li>Limited visibility across teams and processes.</li>
                  <li>Workflows that rely on individuals rather than systems.</li>
                </ul>
                <p>Over time, this creates inefficiency, frustration, and unnecessary cost</p>
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
                  src="/assets/productivity-efficiency_02.webp"
                  alt="Productivity & Efficiency Tools"
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
            <div className="relative w-full order-2 flex items-end justify-center lg:order-1">
              <Image
                src="/assets/productivity-efficiency_03.webp"
                alt="Independent Productivity & Efficiency Strategy, Setup & Support"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto object-contain"
                unoptimized
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold font-roboto text-text-dark mb-4 sm:mb-6 tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-2px]">
                Independent Productivity & Workflow Design
              </h2>
              <div className="text-[16px] sm:text-[18px] md:text-[20px] font-inter text-text-dark leading-normal mb-6 sm:mb-8 space-y-4">
                <p>
                  ClearEdge helps businesses streamline how work gets done - by designing systems that connect processes, reduce manual effort, and improve visibility.
                </p>
                <p>
                  We don&apos;t sell software for the sake of it.
                </p>
                <p>
                  We focus on understanding how your business operates, then implement tools and workflows that actually solve problems.
                </p>
                <p className="font-bold">We combine:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <span className="font-bold">Workflow & Systems Design</span> – mapping processes to remove duplication and bottlenecks
                  </li>
                  <li>
                    <span className="font-bold">System Integration</span> – connecting CRM, job tracking, invoicing, and reporting
                  </li>
                  <li>
                    <span className="font-bold">Automation & Efficiency Tools</span> – reducing manual steps where it makes sense
                  </li>
                  <li>
                    <span className="font-bold">Clear Implementation Support</span> – hands-on setup and practical guidance
                  </li>
                  <li>
                    <span className="font-bold">Ongoing Optimisation</span> – refining workflows as your business evolves
                  </li>
                </ul>
                <p>
                  Our goal is to help your systems work together - so your team can focus on higher-value work.
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
              description="Review your current workflows, systems, and operational pain points."
              showNumberPeriod={true}
              variant="outlined"
            />
            <WorkCard
              number={2}
              title="Recommendations"
              description="Receive a clear, practical plan to improve efficiency and visibility."
              showNumberPeriod={true}
              variant="outlined"
            />
            <WorkCard
              number={3}
              title="Implementation & Setup"
              description="Configure systems and workflows with minimal disruption."
              showNumberPeriod={true}
              variant="outlined"
            />
            <WorkCard
              number={4}
              title="Support & Optimisation"
              description="Refine and improve processes as your business grows."
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
        title="Make your workflows work harder."
        subtitle="Book a Free Productivity & Efficiency Audit"
        subtitleNormal="- no cost, no obligation."
        listTitle="You'll get:"
        listItems={[
          "A clear view of workflow and system inefficiencies",
          "Practical steps to reduce manual effort",
          "Recommendations tailored to your team and processes",
        ]}
        primaryButtonText="Book an Audit"
        secondaryButtonText="Talk to a Specialist"
      />
    </>
  );
}
