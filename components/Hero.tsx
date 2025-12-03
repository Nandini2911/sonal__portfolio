"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-brand-burgundy text-brand-gold w-full overflow-hidden">
      <div
        className="
          grid w-full h-auto grid-cols-1
          md:grid-cols-[45%_55%] md:h-[520px]
          lg:h-[620px]
          xl:grid-cols-[40%_60%] xl:h-[700px]
        "
      >
        {/* LEFT — TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="
            flex flex-col justify-center
            px-4 sm:px-6 lg:px-12 xl:px-16   /* ⭐ LEFT SHIFT — tighter padding */
            py-10 sm:py-12 lg:py-16 xl:py-20
          "
        >
          <h1
            className="
              font-display uppercase leading-[0.9]
              text-[34px]
              sm:text-[46px]
              md:text-[54px]
              lg:text-[68px]
              xl:text-[68px]
              tracking-[0.06em]
            "
          >
            <span className="block">Sonal</span>
            <span className="block mt-3"></span>
          </h1>

          <div className="mt-6 h-[1.5px] w-[120px] bg-brand-gold/80" />

          <p className="mt-6 text-[10px] sm:text-[11px] leading-relaxed tracking-[0.28em] sm:tracking-[0.32em] uppercase text-brand-gold/90 max-w-sm">
            Real time luxury lifestyle influencer & entrepreneur
          </p>
        </motion.div>

        {/* RIGHT — IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative h-[420px] sm:h-[460px] md:h-full w-full overflow-hidden"
        >
          <Image
            src="/sonal final.jpg"
            alt="Sonal Wankhede"
            fill
            priority
            className="
              object-cover
              object-[50%_18%]
              md:object-[60%_24%]
              lg:object-[100%_22%]
              xl:object-[100%_15%]
              2xl:object-[100%_32%]
            "
          />

          <div className="pointer-events-none hidden md:block absolute inset-y-0 left-0 w-[26%] bg-gradient-to-l from-transparent via-brand-burgundy/70 to-brand-burgundy" />
        </motion.div>
      </div>
    </section>
  );
}
