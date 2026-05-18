"use client";
import React from 'react';
import { motion } from "framer-motion";
import { Calendar, Rocket, Search, Users } from 'lucide-react';
const ExtraSectionOne = () => {
    return (



<section
  className="py-20 px-6   mt-20 bg"
>
  <div className="max-w-6xl mx-auto 
  
  ">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.3 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-bold text-[#2572bf]">
        How TutorFlow Works
      </h2>

      <p className="mt-4 text-[#475569] max-w-2xl mx-auto">
        Finding the right tutor has never been easier. Follow these simple
        steps to start your learning journey with expert tutors.
      </p>
    </motion.div>

    {/* Steps */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Step 1 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: false, amount: 0.3 }}
        whileHover={{ y: -8 }}
        className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:bg-[#AAFFC7] transition duration-300 text-center"
      >

        <motion.div
          whileHover={{ rotate: 10, scale: 1.1 }}
          className="w-16 h-16 mx-auto rounded-full bg-[#AAFFC7] flex items-center justify-center text-[#124170] text-3xl font-bold"
        >
          <Search/>
        </motion.div>

        <h3 className="mt-6 text-xl font-semibold text-[#2572bf]">
          Search Tutors
        </h3>

        <p className="mt-3 text-[#475569] text-sm">
          Explore qualified tutors by subject, experience, and availability.
        </p>
      </motion.div>

      {/* Step 2 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
        whileHover={{ y: -8 }}
        className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:bg-[#AAFFC7] transition duration-300 text-center"
      >

        <motion.div
          whileHover={{ rotate: -10, scale: 1.1 }}
          className="w-16 h-16 mx-auto rounded-full bg-[#AAFFC7] flex items-center justify-center text-[#124170] text-3xl font-bold"
        >
          <Users></Users>
        </motion.div>

        <h3 className="mt-6 text-xl font-semibold text-[#124170]">
          View Profiles
        </h3>

        <p className="mt-3 text-[#475569] text-sm">
          Check tutor profiles, ratings, teaching methods, and student reviews.
        </p>
      </motion.div>

      {/* Step 3 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: false, amount: 0.3 }}
        whileHover={{ y: -8 }}
        className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:bg-[#AAFFC7] transition duration-300 text-center"
      >

        <motion.div
          whileHover={{ rotate: 10, scale: 1.1 }}
          className="w-16 h-16 mx-auto rounded-full bg-[#AAFFC7] flex items-center justify-center text-[#124170] text-3xl font-bold"
        >
          <Calendar/>
        </motion.div>

        <h3 className="mt-6 text-xl font-semibold text-[#124170]">
          Book a Session
        </h3>

        <p className="mt-3 text-[#475569] text-sm">
          Choose your preferred schedule and instantly confirm your booking.
        </p>
      </motion.div>

      {/* Step 4 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: false, amount: 0.3 }}
        whileHover={{ y: -8 }}
        className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:bg-[#AAFFC7] transition duration-300 text-center"
      >

        <motion.div
          whileHover={{ rotate: -10, scale: 1.1 }}
          className="w-16 h-16 mx-auto rounded-full bg-[#AAFFC7] flex items-center justify-center text-[#124170] text-3xl font-bold"
        >
          <Rocket/>
        </motion.div>

        <h3 className="mt-6 text-xl font-semibold text-[#124170]">
          Start Learning
        </h3>

        <p className="mt-3 text-[#475569] text-sm">
          Join live sessions, improve your skills, and achieve your goals.
        </p>
      </motion.div>

    </div>
  </div>
</section>
       
    );
};

export default ExtraSectionOne;