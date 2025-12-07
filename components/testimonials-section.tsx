"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Testimonial {
  id: number | string;
  name: string;
  title: string;
  company: string;
  companyLogo?: string;
  avatar?: string;
  quote: string;
}

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
  leftImage?: string;
  leftImageAlt?: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Steffan Hudson",
    title: "Director",
    company: "Holloway Hudson Burgess Ltd",
    companyLogo: "/assets/logo/Holloway.png",
    avatar: "/assets/logo/Holloway.png",
    quote: "The ClearEdge team helped us to set up video conferencing systems for our new offices in Tauranga. We're really pleased with the help and advice we were given as we decided what options would work best for us. It's great to finally have reliable online meeting facilities.",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    title: "IT Director",
    company: "Samsung Solutions Inc",
    companyLogo: "/assets/logo/Samsung.png",
    avatar: "/assets/logo/Samsung.png",
    quote: "ClearEdge's digital signage solutions have revolutionized how we communicate with our customers. The Samsung E-Paper displays they installed are not only energy-efficient but also provide crystal-clear visibility even in bright sunlight. Highly recommend their services!",
  },
  {
    id: 3,
    name: "Emma Wilson",
    title: "CEO",
    company: "Epson Digital Services",
    companyLogo: "/assets/logo/Epson.png",
    avatar: "/assets/logo/Epson.png",
    quote: "ClearEdge has been our trusted technology partner for over five years. Their Epson ColourWorks label printing systems have streamlined our operations and reduced waste significantly. The quality and reliability are outstanding.",
  },
  {
    id: 4,
    name: "Lisa Rodriguez",
    title: "Marketing Director",
    company: "Ricoh Business Solutions",
    companyLogo: "/assets/logo/Ricoh.png",
    avatar: "/assets/logo/Ricoh.png",
    quote: "ClearEdge helped us modernize our entire print infrastructure. The Ricoh multifunction devices they installed have improved our document workflow efficiency by 60%. Their team's attention to detail and customer service is exceptional.",
  },
  {
    id: 5,
    name: "Jennifer Lee",
    title: "IT Manager",
    company: "Brother Technologies",
    companyLogo: "/assets/logo/Brother.png",
    avatar: "/assets/logo/Brother.png",
    quote: "ClearEdge's hardware solutions have been a game-changer for our organization. The Brother printers they recommended are reliable, cost-effective, and perfectly suited to our workflow. Their technical support is always responsive and helpful.",
  },
  {
    id: 6,
    name: "Amanda White",
    title: "Production Director",
    company: "Fujifilm Imaging Solutions",
    companyLogo: "/assets/logo/Fujifilm.png",
    avatar: "/assets/logo/Fujifilm.png",
    quote: "ClearEdge's expertise in printing solutions is unmatched. The Fujifilm equipment they've provided has improved our production quality and speed. Their team is professional, knowledgeable, and always available when we need them.",
  },
  {
    id: 7,
    name: "Patricia Davis",
    title: "General Manager",
    company: "Appline Print Services",
    companyLogo: "/assets/logo/Appline_Print.png",
    avatar: "/assets/logo/Appline_Print.png",
    quote: "ClearEdge transformed our print operations with their innovative solutions. The efficiency gains and cost savings have been remarkable. Their team's dedication to customer success is evident in everything they do.",
  },
];

export default function TestimonialsSection({
  testimonials = defaultTestimonials,
  leftImage = "/assets/client_featured.png",
  leftImageAlt = "Client testimonial",
}: TestimonialsSectionProps = {}) {
  // Ensure testimonials is always an array
  const safeTestimonials = testimonials || defaultTestimonials;
  
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[39.29px] font-roboto text-black text-center mb-8 sm:mb-10 md:mb-12">
          <span className="font-light">Hear from </span>
          <span className="font-bold">our Clients</span>
        </h2>
        <div className="bg-[#8AC0BE] rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            {/* Left Side - Client Photo */}
            <div className="relative w-full lg:w-[40%] h-auto rounded-lg overflow-hidden min-w-0">
              <Image
                src={leftImage}
                alt={leftImageAlt}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto object-contain rounded-lg"
                priority
              />
            </div>

            {/* Right Side - Testimonial Carousel */}
            <div className="flex flex-col justify-center w-full lg:w-[60%] min-w-0">
              <div className="w-full">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  navigation={false}
                  pagination={{
                    clickable: true,
                    bulletClass: "swiper-pagination-bullet-custom",
                    bulletActiveClass: "swiper-pagination-bullet-active-custom",
                  }}
                  className="testimonials-swiper w-full"
                >
                {safeTestimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id} className="w-full">
                    <div className="flex flex-col w-full">
                      {/* Avatar and Client Info */}
                      <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                        <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white overflow-hidden shrink-0">
                          <Image
                            src={testimonial.avatar || testimonial.companyLogo || '/default-avatar.png'}
                            alt={testimonial.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-2">
                            <div>
                              <div className="text-[14px] sm:text-[15px] md:text-[16.912px] font-semibold font-manrope text-white mb-1">
                                {testimonial.name}
                              </div>
                              <div className="text-[12px] sm:text-[13px] md:text-[16.912px] font-normal font-manrope text-white">
                                {testimonial.title}, {testimonial.company}
                              </div>
                            </div>
                            {testimonial.companyLogo && (
                              <div className="relative w-24 sm:w-28 md:w-32 h-auto">
                                <Image
                                  src={testimonial.companyLogo}
                                  alt={testimonial.company}
                                  width={120}
                                  height={40}
                                  className="h-auto w-full object-contain"
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Quote */}
                      <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-inter text-white leading-[133%]">
                      “{testimonial.quote}”
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
