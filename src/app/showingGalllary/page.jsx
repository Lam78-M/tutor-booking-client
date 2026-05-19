"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/lapping.jpg",
  "/classroom.jpg",
  "/library.jpg",
  "/menstudying.jpg",
  "/explain.jpg",
  "/book.jpg",
  "/sittingand.jpg",
  "/online.jpg",
  "/math.jpg",
  "/studing.jpg",
];

const item = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function ShowingGallary() {
  return (
    <section className="py-10 ">
      <div className="max-w-7xl mx-auto p-4 grid grid-cols-2 md:grid-cols-4 gap-4">

        {/* Big top image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative col-span-2 row-span-2 aspect-square rounded-xl overflow-hidden shadow-lg md:col-start-3 md:row-start-1"
        >
          <Image
            src={images[0]}
            alt="gallery"
            fill
            className="object-cover hover:scale-110 transition duration-700"
          />
        </motion.div>

        {/* small images (1–7) */}
        {images.slice(1, 7).map((img, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative aspect-square rounded-xl overflow-hidden shadow-sm"
          >
            <Image
              src={img}
              alt={`gallery-${i}`}
              fill
              className="object-cover hover:scale-110 transition duration-500"
            />
          </motion.div>
        ))}

        {/* bottom images (8–9) */}
        {images.slice(8, 10).map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-xl overflow-hidden shadow-md"
          >
            <Image
              src={img}
              alt={`bottom-${i}`}
              fill
              className="object-cover hover:scale-110 transition duration-500"
            />
          </motion.div>
        ))}

      </div>
    </section>
  );
}