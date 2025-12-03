"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ConnectSection() {
  return (
    <section id="contact" className="w-full bg-[#600400] text-[#f7f3ee]">

      {/* MUCH BIGGER TOP IMAGE */}
      <div className="relative w-full 
        h-[280px] sm:h-[340px] lg:h-[420px]   /* 🔥 increased height */
        overflow-hidden"
      >
        <Image
          src="/contact.png"  // your image
          alt="Sonal Wankhede connect strip"
          fill
          className="object-cover object-center grayscale scale-[1.08]" /* slight zoom */
        />
      </div>

      {/* TALLER CONNECT BAND */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="
          w-full bg-[#600400] 
          py-16 sm:py-20 lg:py-28    /* 🔥 increased height */
          flex flex-col items-center justify-center 
          text-center px-4
        "
      >
        {/* MAIN HEADING */}
        <h2 className="font-display uppercase 
          text-[32px] sm:text-[42px] lg:text-[52px] 
          tracking-[0.15em] leading-tight mb-8"
        >
          CONNECT WITH US!
        </h2>

        {/* CONTACT DETAILS */}
        <div className="space-y-3 sm:space-y-2">
          <p className="font-display text-[15px] sm:text-[16px] lg:text-[18px] tracking-[0.25em]">
            79866-44914
          </p>
          <p className="font-display text-[14px] sm:text-[15px] lg:text-[17px] tracking-[0.25em]">
            SONALSTYLE27@GMAIL.COM
          </p>
        </div>
      </motion.div>

    </section>
  );
}
