'use client';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

interface Slide {
  id: number;
  src: string;
  alt: string;
}

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const slideTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Define slides with proper public paths
  const slides: Slide[] = [
    {
      id: 1,
      src: '/phone-mockup.png',
      alt: 'Image 1',
    },
    { id: 2, src: '/skin-image-1.jpg', alt: 'Image 2' },
    { id: 3, src: '/skin-image-3.jpg', alt: 'Image 3' },
  ];

  const nextSlide = (): void => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

    // Reset animation lock after transition completes
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = (): void => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    // Reset animation lock after transition completes
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number): void => {
    if (isAnimating || currentSlide === index) return;

    setIsAnimating(true);
    setCurrentSlide(index);

    // Reset animation lock after transition completes
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-slide effect with pause on hover
  useEffect(() => {
    startSlideTimer();

    return () => {
      if (slideTimerRef.current) {
        clearInterval(slideTimerRef.current);
      }
    };
  }, [currentSlide]);

  const startSlideTimer = (): void => {
    if (slideTimerRef.current) {
      clearInterval(slideTimerRef.current);
    }

    slideTimerRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  const pauseSlideTimer = (): void => {
    if (slideTimerRef.current) {
      clearInterval(slideTimerRef.current);
      slideTimerRef.current = null;
    }
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden min-h-screen">
      <div className="max-w-screen-xl px-4 py-12 mx-auto lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          {/* Content Column */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                New Feature
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl dark:text-white">
                Streamlined Payments
                <span className="block text-blue-600 dark:text-blue-400">
                  for Software Companies
                </span>
              </h1>
              <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                From seamless checkout experiences to global tax compliance,
                companies worldwide choose our platform to simplify their
                payment infrastructure.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#"
                className="flex items-center justify-center px-6 py-4 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                Start free trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center px-6 py-4 font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors focus:ring-4 focus:ring-gray-100 dark:text-white dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Talk to an expert
              </Link>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((num) => (
                    <div
                      key={num}
                      className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden shadow-md"
                    >
                      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-300 dark:from-blue-800 dark:to-blue-600" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    <span className="font-bold text-blue-600 dark:text-blue-400">
                      2,500+
                    </span>{' '}
                    companies trust our platform
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Carousel Column */}
          <div className="lg:col-span-6 relative">
            <div
              className="relative aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900"
              onMouseEnter={pauseSlideTimer}
              onMouseLeave={startSlideTimer}
              onTouchStart={pauseSlideTimer}
              onTouchEnd={startSlideTimer}
            >
              {/* Device frame */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none z-10"></div>

              {/* Slides */}
              <div className="relative h-full w-full">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
                      currentSlide === index
                        ? 'opacity-100 translate-x-0 scale-100'
                        : index < currentSlide
                        ? 'opacity-0 -translate-x-full scale-95'
                        : 'opacity-0 translate-x-full scale-95'
                    }`}
                  >
                    <div className="relative w-full h-full p-4">
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        layout="fill"
                        objectFit="contain"
                        priority={index === 0}
                        className="drop-shadow-2xl"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute inset-x-0 bottom-0 flex justify-between items-center px-4 py-3 bg-gradient-to-t from-black/40 to-transparent z-20">
                <div className="flex gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        currentSlide === index
                          ? 'bg-white w-6'
                          : 'bg-white/40 w-2 hover:bg-white/60'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={prevSlide}
                    className="p-2 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm transition-colors"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-2 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm transition-colors"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Subtle spotlight effect */}
              <div className="absolute -inset-[100px] bg-gradient-radial from-blue-400/10 to-transparent opacity-70 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
