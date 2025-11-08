import React from "react";

const Navbar = () => {
  return (
    <div>
      <header class="bg-white/90 backdrop-blur sticky top-0 z-50 border-b">
        <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" class="flex items-center gap-3 font-semibold text-lg">
            <svg
              class="w-8 h-8 text-green-600"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L15 8H9L12 2Z" fill="currentColor" />
              <path d="M12 22L9 16H15L12 22Z" fill="currentColor" />
            </svg>
            Lorem Ipsum
          </a>
          <nav class="hidden md:flex items-center gap-6">
            <a href="#about" class="hover:underline">
              About
            </a>
            <a href="#programs" class="hover:underline">
              Programs
            </a>
            <a href="#impact" class="hover:underline">
              Impact
            </a>
            <a href="#contact" class="hover:underline">
              Contact
            </a>
            <a
              href="#donate"
              class="ml-2 inline-flex items-center px-4 py-2 rounded-md bg-green-600 text-white"
            >
              Donate
            </a>
          </nav>
          <button id="navToggle" class="md:hidden p-2 rounded-md border">
            <svg
              id="navOpen"
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              id="navClose"
              class="w-6 h-6 hidden"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div id="mobileMenu" class="md:hidden hidden border-t">
          <div class="px-6 py-4 flex flex-col gap-3">
            <a href="#about" class="block">
              About
            </a>
            <a href="#programs" class="block">
              Programs
            </a>
            <a href="#impact" class="block">
              Impact
            </a>
            <a href="#contact" class="block">
              Contact
            </a>
            <a
              href="#donate"
              class="mt-2 inline-block px-4 py-2 rounded-md bg-green-600 text-white"
            >
              Donate
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
