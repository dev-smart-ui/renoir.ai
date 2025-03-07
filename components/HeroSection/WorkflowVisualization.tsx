"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { SliderContent } from "@/components/HeroSection/SliderContent/SliderContent"

import img1 from './img/heroImg1.png'
import img2 from './img/heroImg2.png'
import img3 from './img/heroImg3.png'
import img4 from './img/heroImg4.png'
import img5 from './img/heroImg5.png'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export function WorkflowVisualization() {
  const slides = [img1, img2, img3, img4, img5]

  return (
    <div className="bg-[#0B1527] p-4 md:p-8 rounded-xl overflow-hidden lg:w-1/2 flex flex-col items-center w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom',
        }}
        pagination={{
          el: '.swiper-pagination-custom',
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          360: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <SliderContent slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center gap-5 md:gap-10 mt-8"
      >
        <button className="swiper-button-prev-custom bg-[#1F2953]/80 p-2 rounded-full hover:bg-[#1F2953] transition-colors">
          <ChevronLeft className="w-6 h-6 text-[#6D7DFF]" />
        </button>

        <div className="swiper-pagination-custom flex gap-2"></div>

        <button className="swiper-button-next-custom bg-[#1F2953]/80 p-2 rounded-full hover:bg-[#1F2953] transition-colors">
          <ChevronRight className="w-6 h-6 text-[#6D7DFF]" />
        </button>
      </motion.div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 30px;
          height: 4px;
          border-radius: 9999px;
          background-color: #1F2953;
          transition-property: all;
          transition-duration: 300ms;
          opacity: 1;
        }
        @media (min-width: 640px) {
          .swiper-pagination-bullet {
            width: 45px;
          }
        }
        .swiper-pagination-bullet-active {
          background-color: #6D7DFF;
        }
      `}</style>
    </div>
  )
}