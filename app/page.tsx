"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SolutionCard } from "@/components/solution-card";
import { ProductCard } from "@/components/product-card";
import ImageCarousel, { ImageSlide } from "@/components/image-carousel";
import PartnerLogos from "@/components/partner-logos";
import EnterpriseSolutions from "@/components/enterprise-solutions";
import StatsSection from "@/components/stats-section";
import { WorkCard } from "@/components/work-card";
import TestimonialsSection from "@/components/testimonials-section";
import BlogSection from "@/components/blog-section";
import { getRecentBlogPosts } from "@/lib/blog-data";

export default function Home() {
  const heroImages: ImageSlide[] = [
    {
      id: 1,
      title: "Hero Image 1",
      description: "Meeting room with EPSON printer",
      image: "/assets/hero_slide_1.png",
    },
    {
      id: 2,
      title: "Hero Image 2",
      description: "Modern office technology",
      image: "/assets/hero_slide_2.png",
    },
    {
      id: 3,
      title: "Hero Image 3",
      description: "Business collaboration",
      image: "/assets/hero_slide_2.png",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-brand">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[300px] sm:min-h-[400px] lg:min-h-[496.513px]">
          {/* Left side - Text content with container padding */}
          <div className="container flex items-center py-6 sm:py-8 lg:py-12">
            <div className="w-full flex flex-col items-center lg:items-end justify-center px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 lg:py-12">
              <h1 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[60.138px] font-inter leading-[1.2] sm:leading-tight lg:leading-[75.172px] text-text-dark mb-4 sm:mb-6 lg:mb-8 tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-2.5057px] max-w-full lg:max-w-[685px] text-center lg:text-left">
                <span className="font-light">Make your </span>
                <span className="font-extrabold">business tech </span>
                <span className="font-normal">work</span>
                <span className="font-normal"> - </span>
                <span className="font-extrabold">faster, easier</span>
                <span className="font-light"> and </span>
                <span className="font-extrabold">more profitably </span>
              </h1>
            </div>
          </div>
          {/* Right side - Hero image carousel extends to edge */}
          <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-auto lg:min-h-[496.513px] bg-gray-200 order-first lg:order-last">
            <ImageCarousel
              images={heroImages}
              className="w-full h-full"
              autoPlayInterval={5000}
              showNavigation={true}
            />
          </div>
        </div>
      </section>

      {/* Partner Logos Section */}
      <PartnerLogos />

      {/* Solutions Grid Section */}
      <section className="relative py-16 sm:py-24 bg-white">
        <div className="absolute top-0 left-0 w-full h-[250px] sm:h-[300px] md:h-[350px] lg:min-h-[410px] bg-gradient-brand z-0"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[39.29px] font-roboto text-black text-center mb-8 sm:mb-10 lg:mb-12 tracking-[-1.86px]">
            One brand <span className="font-extrabold">ALL</span> the solutions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <SolutionCard
              title="Printing Solutions"
              description="Find out more about the products and services we&apos;ve launched, how our customers are using them"
              image="/assets/Printing_Solutions.png"
              imageAlt="Printing Solutions"
            />
            <SolutionCard
              title="Marketing & Sales System"
              description="Find out more about the products and services we&apos;ve launched, how our customers are using them"
              image="/assets/Marketing_Sales_System.png"
              imageAlt="Marketing & Sales System"
            />
            <SolutionCard
              title="Digital Signage Solutions"
              description="Find out more about the products and services we&apos;ve launched, how our customers are using them"
              image="/assets/Digital_Signage_Solutions.png"
              imageAlt="Digital Signage Solutions"
            />
            <SolutionCard
              title="Security & Privacy"
              description="Find out more about the products and services we&apos;ve launched, how our customers are using them"
              image="/assets/Security_Privacy.png"
              imageAlt="Security & Privacy"
            />
            <SolutionCard
              title="Communication Solutions"
              description="Find out more about the products and services we&apos;ve launched, how our customers are using them"
              image="/assets/Communication_Solutions.png"
              imageAlt="Communication Solutions"
            />
            <SolutionCard
              title="Hardware & Operational Solutions"
              description="Find out more about the products and services we&apos;ve launched, how our customers are using them"
              image="/assets/Hardware_Operational_Solutions.png"
              imageAlt="Hardware & Operational Solutions"
            />
          </div>
        </div>
      </section>

      {/* Samsung E-Paper Promo Section */}
      <section className="relative w-full pb-24 bg-white">
        <div className="container max-w-[1284px] mx-auto">
          <div className="relative w-full min-h-[600px] sm:min-h-[700px] rounded-lg overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/assets/mega_sale.png"
                alt="Samsung E-Paper in retail store"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Dark Overlay on Bottom Half */}
            <div className="absolute inset-0 z-10 bg-linear-to-b from-transparent via-black/30 to-black/90"></div>
            
            {/* Content Container */}
            <div className="relative z-20 h-full min-h-[600px] sm:min-h-[700px] flex items-end pb-8 sm:pb-12 lg:pb-16 px-4 sm:px-6 lg:px-8 xl:px-12">
              <div className="w-full">
                <p className="text-[42px] sm:text-[52px] lg:text-[58.356px] font-inter leading-[1.2] sm:leading-tight lg:leading-[73.917px] text-white mb-4 sm:mb-6 tracking-[-2px] sm:tracking-[-2.5px] lg:tracking-[-3.2494px]">
                  <span className="font-extralight">Introducing</span>
                  <span className="font-normal"> Samsung E-Paper</span>
                </p>
                <p className="text-[18px] sm:text-[20px] lg:text-[21.145px] font-light font-roboto leading-[1.3] sm:leading-tight lg:leading-[26.784px] text-white mb-6 sm:mb-8 tracking-[-0.8px] sm:tracking-[-1px] lg:tracking-[-1.1774px]">
                  Revolutionise your shop or store signage with Samsung E-Paper.
                  Low power, digital alternative to posters.
                </p>
                <Button
                  variant="default"
                  size="lg"
                  className="bg-brand-blue hover:bg-brand-blue-dark border-[1.945px] border-white text-white rounded-none flex items-center gap-2"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Solutions & Stats Section */}
      <EnterpriseSolutions />

      {/* Stats Section */}
      <StatsSection />

      {/* Let&apos;s Get to Work Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[39.29px] font-roboto text-black text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <span className="font-bold">Let&apos;s </span>
            <span className="font-light">get to</span>
            <span className="font-bold"> Work</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <WorkCard
              number={1}
              title="Tech Consult"
              subheading="Book a Free Site Visit"
              description="Find out more about the products and services we've launched, how our customers are using them"
              buttonText="Get Started"
            />
            <WorkCard
              number={2}
              title="Solutions Audit"
              subheading="Comprehensive"
              description="Find out more about the products and services we've launched, how our customers are using them"
              buttonText="Book an Audit"
            />
            <WorkCard
              number={3}
              title="Supply / Setup"
              subheading="Digital Signage Solutions"
              description="Find out more about the products and services we've launched, how our customers are using them"
              buttonText="View Products"
            />
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gray-50 bg-gradient-brand">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[39.29px] font-roboto text-black text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <span className="font-bold">Featured </span>
            <span className="font-light">Products</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            <ProductCard
              title="ePaper Display"
              description="Revolutionary ePaper displays. 90% less energy. Perfect sunlight readability. Transform your business communication with cutting-edge technology."
              image="/assets/epaper_display.png"
              bgColor="rgba(68, 146, 148, 0.6)"
            />
            <ProductCard
              title="Epson ColourWorks"
              description="Take your label printing to the next level with the Epson ColourWorks label printing"
              image="/assets/makerbot_method.png"
              bgColor="rgba(99, 102, 106, 0.6)"
            />
            <ProductCard
              title="MakerBot Method X"
              description="We bring best-in-class technology like the MakerBot Method X into your workflow - so innovation doesn&apos;t stay on the drawing board."
              image="/assets/epson_colour_works.png"
              bgColor="rgba(68, 146, 148, 0.6)"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Latest News Section */}
      <BlogSection posts={getRecentBlogPosts(3)} />
      </>
  );
}
