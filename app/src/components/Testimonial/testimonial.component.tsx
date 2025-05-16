'use client';

import { Card, CardContent } from '@skinmama/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@skinmama/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { StarIcon } from 'lucide-react';
import * as React from 'react';

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Riya S.',
    rating: 5,
    content:
      'I’ve tried everything for my skin, but nothing ever felt this accurate. SkinMama scanned my face in seconds and actually understood what my skin needed. My routine has never been this consistent or effective!',
  },
  {
    id: 2,
    rating: 3,
    name: 'Kunal T.',
    content:
      'The app is smart and easy to use, but I wish it supported more local products in the recommendations. Still, the scan feature was really insightful.',
  },
  {
    id: 3,
    rating: 5,
    name: 'Anisha D.',
    content:
      'SkinMama is like having a dermatologist in my pocket. I noticed improvements in just two weeks of following the routine it gave me. It’s made skincare simple and stress-free.',
  },
  {
    id: 4,
    name: 'Mohit G.',
    rating: 2,
    content:
      'Interesting concept, but didn’t fully match my expectations. The analysis felt rushed, and I didn’t find the recommendations very helpful for my sensitive skin.',
  },
  {
    id: 5,
    rating: 4,
    name: 'Priya M.',
    content:
      'I love the clean interface and how fast it works. The ingredient suggestions really helped me find products that don’t irritate my skin. Just wish the app had more tracking options.',
  },

  {
    id: 6,
    rating: 5,
    name: 'Lina H.',
    content:
      'As someone based in Berlin with combination skin, I’ve always struggled to find the right products. SkinMama gave me a tailored plan that actually worked—finally, something that makes sense.',
  },

  {
    id: 7,
    rating: 4,
    name: 'Saugat B.',
    content:
      'I was skeptical at first, but after using SkinMama for a month, my acne has visibly reduced. The best part? It doesn’t push branded stuff—it just gives what’s right for you.',
  },
];

export function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnMouseEnter: true })
  );

  return (
    <section className="w-full flex justify-center md:py-16 lg:py-20 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground max-w-[700px]">
            Discover why thousands of customers trust SkinMama for their
            skincare needs
          </p>
        </div>

        <div className="flex w-full justify-center">
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-lg2"
            onMouseEnter={() => plugin.current.stop()}
            onMouseLeave={() => plugin.current.play()}
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="md:basis-1/2 gap-4 -ml-2 sm:-ml-0 basis-1/1"
                >
                  <div className="p-1 sm:p-2 md:p-4">
                    <Card className="border border-slate-200">
                      <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                        <div className="flex space-x-1">
                          {Array.from({
                            length: Number(testimonial.rating),
                          }).map((_, i) => (
                            <StarIcon
                              key={i}
                              className="h-5 w-5 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>

                        <blockquote className="space-y-2">
                          <p className="text-muted-foreground italic">
                            {testimonial.content}
                          </p>
                        </blockquote>

                        <div className="mt-2">
                          <p className="font-medium">{testimonial.name}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden sm:block">
              <CarouselPrevious className="left-1 lg:-left-10" />
              <CarouselNext className="right-1 lg:-right-10" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
