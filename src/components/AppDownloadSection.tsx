import React from "react";

export default function AppDownloadSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        {/* Using existing hero image - can be replaced with training-specific image */}
        <img
          src="/hero-handstand.png"
          alt="Athlete training"
          className="h-full w-full object-cover"
        />
        {/* Dark overlay to make buttons pop */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex max-w-2xl items-center justify-center gap-6 px-4 py-8 md:py-12">
        {/* Google Play button */}
        <a
          href="#" // TODO: Replace with actual Google Play Store URL
          className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-left shadow-xl transition hover:scale-[1.02] hover:shadow-2xl"
        >
          {/* Simple Google Play style icon */}
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black/5">
            <span className="inline-block border-y-[9px] border-l-[15px] border-y-transparent border-l-black" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-xs font-medium text-neutral-500">
              Get it on
            </span>
            <span className="text-base font-semibold text-black">
              Google Play
            </span>
          </span>
        </a>

        {/* App Store button */}
        <a
          href="#" // TODO: Replace with actual App Store URL
          className="inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-left shadow-xl transition hover:scale-[1.02] hover:shadow-2xl"
        >
          {/* Apple logo style icon */}
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
            <span className="text-xl leading-none text-white"></span>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-xs font-medium text-neutral-300">
              Download on the
            </span>
            <span className="text-base font-semibold text-white">
              App Store
            </span>
          </span>
        </a>
      </div>
    </section>
  );
}
