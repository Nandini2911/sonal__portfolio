"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutIntro() {
  return (
    <section id="about" className="relative w-full overflow-hidden bg-black text-white">

      <div className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] xl:min-h-[700px] 2xl:min-h-[820px]">

        {/* BACKGROUND IMAGE */}
        <Image
          src="/sonal-about.jpg"
          alt="Sonal Wankhede"
          fill
          priority={false}
          className="object-cover object-center grayscale"
        />

        {/* BLACK OVERLAY */}
        <div className="absolute inset-0 bg-black/55" />

        {/* TOP MAROON BORDER */}
        <div className="absolute top-0 left-0 h-[6px] w-full bg-brand-burgundy" />

        {/* CENTER TEXT */}
        <div className="absolute inset-0 flex items-center justify-center px-3 sm:px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}

            className="
              font-display
              max-w-xs sm:max-w-4xl    /* ⭐ Mobile wraps better */
              text-center
            
              tracking-[0.25em]

              text-[9px]              /* ⭐ Slightly smaller on very small phones */
              sm:text-[12px] 
              md:text-[13px] 
              lg:text-[14px]

              leading-relaxed sm:leading-loose
            "
          >
            SONAL WANKHEDE IS A LUXURY LIFESTYLE INFLUENCER AND ENTREPRENEUR WHO
            EMBODIES ELEGANCE ACROSS FASHION, TRAVEL, AND LIFESTYLE. AS THE
            FORCE BEHIND VENTURES LIKE BALLROOM COUTURE AND VILLA DE SKIN & MORE,
            SHE BLENDS CREATIVITY WITH BUSINESS ACUMEN. WITH HER REFINED
            AESTHETIC AND PRESENCE AT PRESTIGIOUS PLATFORMS, SHE CONTINUES TO
            REDEFINE TIMELESS LUXURY.
          </motion.p>
        </div>
      </div>

    </section>
  );
}
