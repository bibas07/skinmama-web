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
import * as React from 'react';

export function Testimonial() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnMouseEnter: true })
  );

  return (
    <div className="flex w-full justify-center my-10">
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-xs"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={() => {
          plugin.current.play();
        }}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
