'use client';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';

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
    { id: 1, src: '/slider/scan_face2.jpg', alt: 'Image 1' },
    { id: 2, src: '/slider/scan_face3.jpg', alt: 'Image 2' },
    { id: 3, src: '/slider/scan_face.jpg', alt: 'Image 3' },
    { id: 4, src: '/slider/scan_face4.jpg', alt: 'Image 4' },
  ];

  const nextSlide = useCallback((): void => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

    // Reset animation lock after transition completes
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, slides.length]);

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

  const startSlideTimer = useCallback((): void => {
    if (slideTimerRef.current) {
      clearInterval(slideTimerRef.current);
    }

    slideTimerRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  }, [nextSlide]);

  // Auto-slide effect with pause on hover
  useEffect(() => {
    startSlideTimer();

    return () => {
      if (slideTimerRef.current) {
        clearInterval(slideTimerRef.current);
      }
    };
  }, [currentSlide, startSlideTimer]);

  const pauseSlideTimer = (): void => {
    if (slideTimerRef.current) {
      clearInterval(slideTimerRef.current);
      slideTimerRef.current = null;
    }
  };

  const IMAGES = [
    '/users/user.jpg',
    '/users/user6.jpg',
    '/users/user5.jpg',
    '/users/user4.jpg',
    '/users/user8.jpg',
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden min-h-screen">
      <div className="max-w-screen-xl px-4 py-12 mx-auto lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center px-3 py-1 text-sm rounded-full bg-secondary text-white font-bold dark:bg-blue-900/30 dark:text-blue-300">
                AI Powered
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl dark:text-white">
                Unlock Skin Insights Instantly with
                <span className="block text-primary dark:text-blue-400">
                  Just a Smartphone
                </span>
              </h1>
              <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                Empower your customers with personalized skincare solutions
                through our advanced, white-label AI face scan technology.
                Trained on a database of over 50,000 real images, our system
                delivers highly accurate, real-time skin analysis directly from
                any smartphone. Seamlessly integrate this cutting-edge solution
                into your brand to offer precise product recommendations,
                enhance customer trust, and drive engagement like never before.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#"
                className="flex items-center justify-center px-6 py-4 font-medium text-white bg-primary rounded-lg hover:bg-blue-700 transition-colors focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                About Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center px-6 py-4 font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors focus:ring-4 focus:ring-gray-100 dark:text-white dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Contact Us
              </Link>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {IMAGES.map((img) => (
                    <div
                      key={img}
                      className="w-10 h-10 rounded-full border-2 border-secondary dark:border-gray-800 overflow-hidden shadow-md"
                    >
                      <Image
                        src={img}
                        alt={img}
                        className="object-cover w-full h-full"
                        width={80}
                        height={80}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    <span className="font-bold text-blue-600 dark:text-blue-400">
                      2,500+
                    </span>{' '}
                    user trust our platform
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
                        fill
                        className="object-cover w-full h-full drop-shadow-2xl"
                        priority={index === 0}
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
