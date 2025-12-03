"use client";

export default function LuxuryBgPage() {
  return (
    <section
      className="relative w-full min-h-screen overflow-hidden"
      style={{ backgroundColor: "#600400" }} // your brand color
    >
      <video
        src="/sonal video 2.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="
          absolute inset-0
          w-full h-full
          object-contain       /* ✅ mobile: show entire video */
          sm:object-cover      /* ✅ tablet+ : behave like hero bg */
          object-center
        "
      />
    </section>
  );
}
