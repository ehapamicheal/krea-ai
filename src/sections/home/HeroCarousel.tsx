"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { heroProducts } from "@/Data";



const HeroCarousel = () => {    
    return (
        <section className="max-w-[1200px] mx-auto w-full px-4 py-8">
            <div className="w-full relative">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                     pagination={{
                        el: ".swiper-pagination-custom", 
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: ".swiper-button-next-custom",
                        prevEl: ".swiper-button-prev-custom",
                    }}
                    breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 16,
                    },
                    768: {
                        slidesPerView: 1.3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 1.6,
                        spaceBetween: 24,
                    },
                    }}
                    className="pb-10"
                >
                    {heroProducts.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="relative rounded-2xl overflow-hidden h-[400px] shadow-lg">
                                <Image
                                    src={slide.image}
                                    alt={slide.topTitle}
                                    fill
                                    priority
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />

                               

                                <div className="absolute inset-0 p-6 flex flex-col justify-between bg-gradient-to-t from-black/60 to-transparent">
                                    {/* Top-left Title */}
                                    <p className="text-sm md:text-base uppercase tracking-wide font-normal font-suisse text-white mb-4">
                                        {slide.topTitle}
                                    </p>

                                    {/* Bottom Subtitle + Desc + CTA */}
                                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-4">
                                        <div>
                                            <h3 className="text-white font-semibold font-suisse text-base md:text-xl mb-1">
                                                {slide.subtitle}
                                            </h3>
                                            <p className="text-white w-full text-sm md:text-base leading-tight font-suisse font-normal md:max-w-[400px]">
                                                {slide.description}
                                            </p>
                                        </div>

                                        {slide.cta && (
                                            <button className="px-4 py-3 cursor-pointer font-suisse font-normal bg-white text-black rounded-full w-fit transition-all duration-300 hover:scale-105 hover:bg-black hover:text-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black">
                                                {slide.cta}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        
                    ))}
                </Swiper>

                {/* PAGINATION AND BUTTON */}
                <div className="relative mt-5 flex flex-col md:flex-row justify-center items-center">

                    {/* PAGINATION BULLETS */}
                    <div className="flex items-center justify-center">
                        <div className="swiper-pagination-custom flex gap-2"></div>
                    </div>

                    {/* DESTOP BUTTONS */}
                    <div className="md:flex hidden gap-2 absolute -top-3 right-0">
                        <button className="swiper-button-prev-custom cursor-pointer w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 transition duration-300 hover:bg-gray-100">
                        <BsChevronLeft className="text-black" />
                        </button>
                        <button className="swiper-button-next-custom cursor-pointer w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 transition duration-300 hover:bg-gray-100">
                        <BsChevronRight className="text-black" />
                        </button>
                    </div>

                    {/* MOBILE BUTTONS */}
                    <div className="flex md:hidden justify-center items-center gap-2 mt-4">
                        <button className="swiper-button-prev-custom cursor-pointer w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-100">
                        <BsChevronLeft className="text-black" />
                        </button>
                        <button className="swiper-button-next-custom cursor-pointer w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-100">
                        <BsChevronRight className="text-black" />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HeroCarousel;