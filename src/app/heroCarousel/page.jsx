"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Button } from "@heroui/react";

export default function HeroSlider() {
  return (
    <div className="w-full h-[900px]  overflow-hidden ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center relative"
            style={{
              backgroundImage: "url('/tablewithcomputer.jpg')",
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                  Find Expert Tutors
                </h1>

                <p className="mt-4 text-lg text-gray-200">
                  Learn smarter with trusted tutors and interactive sessions.
                </p>


<Link href={'/tutor'}>

                <Button className="mt-6 px-6 py-5 bg-[#67C090] hover:bg-[#54a87a] transition-all duration-300 rounded-lg text-white font-semibold">
                 Get Tutor
                </Button>
</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center relative"
            style={{
              backgroundImage: "url('/library.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                  Book Sessions Easily
                </h1>

                <p className="mt-4 text-lg text-gray-200">
                  Schedule classes anytime from anywhere with ease.
                </p>
              <Link href={'/tutor'}>

                <Button className="mt-6 px-6 py-5 bg-[#67C090] hover:bg-[#54a87a] transition-all duration-300 rounded-lg text-white font-semibold">
                 Get Tutor
                </Button>
</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center relative"
            style={{
              backgroundImage: "url('/applebook.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                  Grow Your Skills Faster
                </h1>

                <p className="mt-4 text-lg text-gray-200">
                  Personalized learning paths for students and educators.
                </p>
<Link href={'/tutor'}>

                <Button className="mt-6 px-6 py-5 bg-[#67C090] hover:bg-[#54a87a] transition-all duration-300 rounded-lg text-white font-semibold">
                 Get Tutor
                </Button>
</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
  <div className="h-full flex items-center justify-center relative bg-gradient-to-r from-[#67C090] to-[#2f7a58]">

    {/* soft glow blobs */}
    <div className="absolute w-[400px] h-[400px] bg-white/20 blur-3xl rounded-full top-[-100px] left-[-100px]"></div>
    <div className="absolute w-[300px] h-[300px] bg-white/10 blur-3xl rounded-full bottom-[-80px] right-[-80px]"></div>

    {/* main card */}
    <div className="relative z-10 w-full px-6">
      <div className="max-w-4xl mx-auto rounded-2xl p-[2px] bg-white/20 shadow-2xl">
        {/* glossy inner layer */}
        <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/30 p-8 relative overflow-hidden">

          {/* light reflection effect */}
          <div className="absolute top-[-40%] left-[-20%] w-[200%] h-[200%] rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">

            {/* Left */}
            <h2 className="text-center lg:text-left text-4xl font-bold text-white leading-tight">
              Up to <br />
              <span className="text-white/90">23% Off</span>
            </h2>

            {/* Middle */}
            <div className="text-center text-white/90">
              <p className="text-sm opacity-80">Limited Time Offer</p>
              <div className="text-xl font-bold text-white">MediQueue</div>
              <p className="text-sm opacity-80">+ 1 week free access</p>
            </div>

            {/* Button */}
           
<Link href={'/tutor'}>

                <Button className="mt-6 px-6 py-5 bg-[#67C090] hover:bg-[#54a87a] transition-all duration-300 rounded-lg text-white font-semibold">
                 Get Tutor
                </Button>
</Link>
          </div>

        </div>
      </div>
    </div>
  </div>
</SwiperSlide>
      </Swiper>
      
    </div>
  );
}