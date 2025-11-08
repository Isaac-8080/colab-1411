import React from "react";

const Hero = () => {
  return (
    <div>
      <section class="hero-bg">
        <div class="max-w-7xl mx-auto px-6 py-28 lg:py-36">
          <div class="max-w-2xl">
            <h1 class="text-4xl sm:text-5xl font-extrabold leading-tight">
              Lorem ipsum dolor sit amet consectetur adipiscing elit
            </h1>
            <p class="mt-4 text-lg sm:text-xl text-white/90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              volutpat, nulla in sagittis tempus, purus libero hendrerit risus.
            </p>
            <div class="mt-8 flex gap-3">
              <a
                href="#donate"
                class="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-green-600 text-white font-semibold"
              >
                Donate Now
              </a>
              <a
                href="#programs"
                class="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white/90 text-gray-900 font-medium"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
