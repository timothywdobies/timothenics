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
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
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
