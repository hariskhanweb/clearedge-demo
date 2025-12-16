import { ContactForm } from "@/components/contact-form";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Contact Us - ClearEdge",
  description: "Get in touch with ClearEdge for your business technology needs",
};

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-brand">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[300px] sm:min-h-[400px] lg:min-h-[496.513px]">
          {/* Left side - Text content with container padding */}
          <div className="container flex items-center py-6 sm:py-8 lg:py-12">
            <div className="w-full flex flex-col items-center lg:items-end justify-center px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 lg:py-12">
              <h1 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[60.138px] font-inter leading-[1.2] sm:leading-tight lg:leading-[75.172px] text-text-dark mb-4 sm:mb-6 lg:mb-8 tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-2.5057px] w-full max-w-full lg:max-w-[685px] text-center lg:text-left">
                <span className="font-light">Contact Us</span>
              </h1>
              <p className="text-[20px] font-inter text-text-dark leading-normal mb-8 space-y-4 w-full max-w-full lg:max-w-[685px] text-center lg:text-left">
              Let&apos;s discuss how we can help your business work better.
              </p>
            </div>
          </div>
          {/* Right side - Hero image extends to edge */}
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-auto lg:min-h-[496.513px] bg-gray-200 order-first lg:order-last">
            <Image
              src="/assets/communication_simplified.png"
              alt="Contact ClearEdge"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-start">
            {/* Left side - Contact details */}
            <div>
              <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold font-roboto text-text-dark mb-4 sm:mb-6 tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-2px]">
                Contact Information
              </h2>
              <div className="text-[16px] sm:text-[18px] md:text-[20px] font-inter text-text-dark leading-normal mb-6 sm:mb-8 space-y-4">
                <p>
                  We&apos;re here to help. Reach out to discuss your business technology needs, schedule a consultation, or learn more about our solutions.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold font-roboto text-text-dark mb-1">Email</h3>
                    <Link 
                      href="mailto:support@clearedge.co.nz"
                      className="text-[16px] font-inter text-text-dark hover:text-brand-blue transition-colors"
                    >
                      support@clearedge.co.nz
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold font-roboto text-text-dark mb-1">Phone</h3>
                    <Link 
                      href="tel:+64"
                      className="text-[16px] font-inter text-text-dark hover:text-brand-blue transition-colors"
                    >
                      +64 (Contact us for details)
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold font-roboto text-text-dark mb-1">Location</h3>
                    <p className="text-[16px] font-inter text-text-dark">
                      New Zealand
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full flex items-center justify-center lg:justify-end">
              <div className="w-full max-w-lg">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
