import HeroSection from "@/components/hero-section";
import ContentSection from "@/components/content-section";
import PartnersSection from "@/components/partners-section";
import StatsSection from "@/components/stats-section";
import TestimonialsSection from "@/components/testimonials-section";
import EnterpriseSolutions from "@/components/enterprise-solutions";

export const metadata = {
  title: "About Us - ClearEdge",
  description: "Learn more about ClearEdge and our mission",
};

export default function AboutUs() {
  return (
    <>
      <HeroSection
        backgroundImage="/assets/about_clear_edge.png"
        title={
          <>
            <span className="font-normal">About </span>
            <span className="font-bold">ClearEdge</span>
          </>
        }
        imageAlt="About ClearEdge"
      />

      {/* Giving New Zealand businesses a clearer edge */}
      <ContentSection
        heading={
          <>
            Giving New Zealand businesses{" "}
            <span className="font-normal">a clearer edge.</span>
          </>
        }
        paragraphs={[
          "ClearEdge is a New Zealand-based business technology partner specialising in end-to-end workplace solutions - from managed print and communication systems to digital signage, device management, and cybersecurity.",
          "We help organisations modernise, connect, and perform at their best.",
        ]}
        image="/assets/giving_new_zealand.png"
        imageAlt="ClearEdge business technology specialist"
        imagePosition="right"
        sectionClassName="bg-gradient-brand"
      />

      {/* Our Purpose */}
      <ContentSection
        heading="Our Purpose"
        paragraphs={[
          "We believe technology should work quietly in the background - enabling people, not distracting them.",
          "Our purpose is to help New Zealand businesses feel in control of their tools, confident in their systems, and proud of the way they work.",
          "ClearEdge exists to bring calm, clarity, and connection back into the modern workplace.",
        ]}
        image="/assets/our_purpose.png"
        imageAlt="ClearEdge networking event"
        imagePosition="left"
        sectionClassName="bg-white"
      />

      {/* Our Commitment */}
      <ContentSection
        heading="Our Commitment"
        listTitle="We help businesses:"
        listItems={[
          "Operate more efficiently",
          "Communicate more effectively",
          "Protect their data and people",
          "Reduce their environmental footprint",
        ]}
        paragraphs={[
          "Every solution we design is built around clarity, transparency, and measurable results.",
        ]}
        image="/assets/our_commitment.png"
        imageAlt="Woman interacting with office technology"
        imagePosition="right"
        sectionClassName="bg-gradient-brand"
      />

      {/* Our Vision */}
      <ContentSection
        heading="Our Vision"
        paragraphs={[
          "Our vision is to be New Zealand's most trusted independent technology partner - helping organisations bring clarity, confidence, and connection to the way they work.",
          "We believe technology should be a foundation for progress, not pressure.",
          "By making it simpler, smarter, and more sustainable, we aim to empower better business, stronger teams, and a more connected future for New Zealand.",
        ]}
        image="/assets/our_vision.png"
        imageAlt="A group of people gathered under a blue ClearEdge branded canopy at an outdoor event"
        imagePosition="left"
        sectionClassName="bg-white"
      />

      {/* Our Partners */}
      <PartnersSection />

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

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Enterprise Solutions & Stats Section */}
      <EnterpriseSolutions />
    </>
  );
}

