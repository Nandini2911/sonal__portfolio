"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LuxuryTravelSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black text-black">
      {/* FULL HEIGHT WRAPPER */}
      <div className="relative min-h-[480px] sm:min-h-[540px] lg:min-h-[620px] xl:min-h-[680px]">

        {/* BACKGROUND IMAGE */}
        <Image
          src="/travel.png"
          alt="Luxury travel background"
          fill
          priority={false}
          className="object-cover object-center grayscale"
        />

        {/* CENTERED CARD */}
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="
              w-full max-w-3xl sm:max-w-4xl
              bg-white/85
              backdrop-blur-sm
              px-5 sm:px-10 lg:px-14
              py-8 sm:py-12 lg:py-14
              text-center
            "
          >
            {/* HEADING */}
            <div className="mb-5 sm:mb-7">
              <h2
                className="
                  font-display
                  text-[12px] sm:text-[14px] lg:text-[15px]
                  tracking-[0.22em] sm:tracking-[0.35em]
                  uppercase
                "
              >
                Luxury Travel
              </h2>
              <div className="mt-3 h-[2px] w-14 sm:w-20 mx-auto bg-black/70" />
            </div>

            {/* BODY TEXT */}
            <p className="
              font-sans
              text-[12px] sm:text-[14px] lg:text-[15px]
              leading-relaxed sm:leading-loose
              text-black/80
            ">
              Her travels are a masterclass in luxury—where every journey is handpicked from the
              world’s most coveted destinations. From legendary heritage palaces to ultra-modern
              private islands, she seeks experiences that blend rarity, elegance, and storytelling.
              For her, travel is not about places checked off a list, but about curating moments of
              indulgence that few will ever encounter.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
