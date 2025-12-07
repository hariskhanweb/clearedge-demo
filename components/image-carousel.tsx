"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface ImageSlide {
  id: number | string;
  title?: string;
  description: string;
  image: string;
}

interface ImageCarouselProps {
  images: ImageSlide[];
  className?: string;
  autoPlayInterval?: number; // in milliseconds, default 5000
  showNavigation?: boolean; // show arrows and dots, default true
}

export default function ImageCarousel({
  images,
  className = "",
  autoPlayInterval = 5000,
  showNavigation = true,
}: ImageCarouselProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  // If only one image, just render it without carousel functionality
  if (images.length === 1) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={images[0].image}
          alt={images[0].description}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden group ${className}`}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={
          showNavigation
            ? {
                delay: autoPlayInterval,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
            : false
        }
        navigation={
          showNavigation
            ? {
                prevEl: ".swiper-button-prev-custom",
                nextEl: ".swiper-button-next-custom",
              }
            : false
        }
        pagination={
          showNavigation
            ? {
                clickable: true,
                bulletClass: "swiper-pagination-bullet-custom",
                bulletActiveClass: "swiper-pagination-bullet-active-custom",
              }
            : false
        }
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="h-full w-full"
      >
        {images.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="w-full h-full relative">
              <Image
                src={slide.image}
                alt={slide.description}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      {showNavigation && (
        <>
          <button
            className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Custom Pagination Styles */}
      {showNavigation && (
        <style jsx global>{`
          .swiper-pagination {
            bottom: 1rem !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            display: flex !important;
            gap: 0.5rem !important;
            justify-content: center !important;
            align-items: center !important;
          }
          .swiper-pagination-bullet-custom {
            width: 0.5rem !important;
            height: 0.5rem !important;
            background: rgba(255, 255, 255, 0.5) !important;
            border-radius: 9999px !important;
            transition: all 0.3s ease !important;
            cursor: pointer !important;
          }
          .swiper-pagination-bullet-custom:hover {
            background: rgba(255, 255, 255, 0.75) !important;
          }
          .swiper-pagination-bullet-active-custom {
            width: 2rem !important;
            background: white !important;
          }
        `}</style>
      )}
    </div>
  );
}

