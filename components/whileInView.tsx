"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const looks = [
  { src: "/look1.png", alt: "Luxury look 1" },
  { src: "/look2.png", alt: "Luxury look 2" },
  { src: "/look3.png", alt: "Luxury look 3" },
];

export default function LuxuryLooksSection() {
  return (
    <section className="w-full bg-[#600400] py-10 sm:py-14 lg:py-16">
      {/* TOP STRIP */}
      <div className="h-[6px] w-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-10 py-10 sm:py-12 lg:py-14">
        {/* 3 IMAGES */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-10 justify-items-center">
          {looks.map((look, index) => (
            <motion.div
              key={look.src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="w-full max-w-[260px] sm:max-w-[230px] lg:max-w-[260px]"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <Image
                  src={look.src}
                  alt={look.alt}
                  fill
                  className="object-cover object-center"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* BOTTOM STRIP */}
   
    </section>
  );
}
