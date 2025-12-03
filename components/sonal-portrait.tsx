"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function StyleSignatureSection() {
  return (
    <section className="w-full bg-[#600400] text-white py-10 sm:py-14 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-10">

        {/* GRID: LEFT CARD + RIGHT PORTRAIT */}
        <div className="grid grid-cols-1 md:grid-cols-[1.15fr_1fr] gap-6 md:gap-8 lg:gap-10 items-stretch">

          {/* LEFT: BURGUNDY CARD */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-[#600400] pt-8 sm:pt-10 pb-8 sm:pb-10 px-5 sm:px-8 lg:px-10 flex flex-col"
          >
            {/* Top image */}
            <div className="w-full mb-6 sm:mb-8">
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src="/style.png"
                  alt="Luxury bag"
                  fill
                  className="object-cover object-center grayscale"
                />
              </div>
            </div>

            {/* Text */}
            <div className="mt-auto">
              <p className="font-display text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed text-[#f7f3ee]">
                Sonal Wankhede’s style is defined by exclusivity and an impeccable eye for detail,
                where every choice reflects refined taste. With a deep preference for
                limited-edition fashion and rare luxury pieces, she curates a world that is
                both timeless and unattainably chic.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: PORTRAIT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative w-full min-h-[320px] sm:min-h-[380px] md:min-h-[430px] lg:min-h-[520px] overflow-hidden"
          >
            <Image
              src="/style1.png"
              alt="Sonal Wankhede"
              fill
              className="object-cover object-center grayscale"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
