'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
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
    name: 'Sarah Johnson',
    role: 'Loyal Customer',
    avatar: 'https://i.pravatar.cc/150?img=1',
    initials: 'SJ',
    content:
      'SkinMama products completely transformed my skincare routine. My complexion has never looked better!',
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Beauty Enthusiast',
    avatar: 'https://i.pravatar.cc/150?img=8',
    initials: 'DC',
    content:
      'After trying countless products, SkinMama is the only brand that consistently delivers results for my sensitive skin effectively.',
  },
  {
    id: 3,
    name: 'Michelle Wong',
    role: 'Skincare Blogger',
    avatar: 'https://i.pravatar.cc/150?img=5',
    initials: 'MW',
    content:
      'As someone who reviews skincare professionally, I can confidently say SkinMama stands out for its quality and effectiveness.',
  },
  {
    id: 4,
    name: 'James Taylor',
    role: 'New Customer',
    avatar: 'https://i.pravatar.cc/150?img=3',
    initials: 'JT',
    content:
      "I was skeptical at first, but after just two weeks of using SkinMama, my friends started asking what I'd changed in my routine!",
  },
  {
    id: 5,
    name: 'Aisha Patel',
    role: 'Long-time User',
    avatar: 'https://i.pravatar.cc/150?img=10',
    initials: 'AP',
    content:
      "SkinMama products have been my secret weapon for maintaining youthful skin for over 3 years now. I'm completely hooked!",
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
                        <Avatar className="h-20 w-20 border-2 border-primary rounded-4xl">
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="rounded-4xl"
                          />
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>

                        <div className="flex space-x-1">
                          {Array.from({ length: 5 }).map((_, i) => (
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
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
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
