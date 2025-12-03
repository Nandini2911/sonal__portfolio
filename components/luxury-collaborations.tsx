"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const sliderImages = [
  "/left.jpg",
  "/right.png",
  "/top.png",
  "/bottom1.png",
  "/bottom2.png",
];

export default function PoetrySliderCard() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section  id="Gallary" className="w-full bg-brand-burgundy text-brand-gold py-16 sm:py-20 overflow-hidden font-display">
      <div className="max-w-5xl mx-auto px-4">

        {/* OUTER SLIDE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-3xl shadow-[0_0_40px_rgba(214,187,151,0.25)]"
        >

          {/* INNER CARD WITH FADE */}
          <div
            className="
              relative rounded-3xl bg-brand-burgundy/95 p-5 sm:p-7 lg:p-8 font-display
              before:absolute before:inset-0 
              before:bg-[radial-gradient(circle,rgba(0,0,0,0)_55%,rgba(0,0,0,0.40)_100%)]
              before:pointer-events-none before:rounded-3xl
            ">
            {/* IMAGE SLIDER WITH INNER FADE */}
            <div className="
              rounded-2xl overflow-hidden relative w-full h-[240px] sm:h-[320px] lg:h-[400px]
              before:absolute before:inset-0 
              before:bg-[radial-gradient(circle,rgba(0,0,0,0)_40%,rgba(0,0,0,0.55)_95%)]
              before:pointer-events-none
            ">
              {sliderImages.map((src, index) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === current ? 1 : 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={src}
                    alt="Poetry Silver Slider"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.4 }}
  transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
  className="mt-12 sm:mt-14 lg:mt-16 max-w-4xl mx-auto text-center font-display px-4"
>
  <p className="text-[16px] sm:text-[18px] lg:text-[18px] leading-[1.75] text-white">
    Collaborating exclusively with the world’s most prestigious international brands —
    from couture fashion houses to global lifestyle labels, her work reflects an
    uncompromising standard of elegance and sophistication.
  </p>

  <p className="mt-6 text-[18px] sm:text-[20px] lg:text-[18px] leading-[1.75] text-white">
    Every association she takes on resonates with her refined persona, 
    making her a trusted muse in the world of luxury.
  </p>
</motion.div>
</div>
</section>
);
}
