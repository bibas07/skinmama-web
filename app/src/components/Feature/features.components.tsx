'use client';
import { Icons } from '@skinmama/components/icons';
import { useEffect, useState } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function FeatureSection() {
  // Handle responsive layout for the timeline
  const [timelineLayout, setTimelineLayout] = useState<
    '1-column' | '2-columns'
  >('2-columns');

  // Update layout based on screen size
  useEffect(() => {
    const handleResize = () => {
      setTimelineLayout(window.innerWidth < 768 ? '1-column' : '2-columns');
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="w-full overflow-hidden py-6 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <VerticalTimeline
          layout={timelineLayout}
          lineColor="#fce8e3"
          className="vertical-timeline-custom-line"
          animate={true}
        >
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: 'rgb(253, 143, 108)',
              color: '#fff',
              maxWidth: '100%',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
            }}
            contentArrowStyle={{
              borderRight: '7px solid rgb(253, 143, 108)',
            }}
            iconStyle={{ background: 'rgb(253, 143, 108)', color: '#fff' }}
            icon={<Icons.dot />}
            intersectionObserverProps={{
              rootMargin: '0px 0px -40px 0px',
              triggerOnce: false,
            }}
          >
            <h3 className="vertical-timeline-element-title text-lg md:text-xl font-bold mb-1">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-sm md:text-base mb-3">
              Miami, FL
            </h4>
            <div className="max-w-full mb-3 rounded-md overflow-hidden">
              <img
                src="/phone-mockup.png"
                alt="Phone mockup showing application interface"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-sm md:text-base">
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: 'rgb(61, 166, 253)',
              color: '#fff',
              maxWidth: '100%',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
            }}
            iconStyle={{ background: 'rgb(61, 166, 253)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid rgb(61, 166, 253)' }}
            icon={<Icons.dot />}
            intersectionObserverProps={{
              rootMargin: '0px 0px -40px 0px',
              triggerOnce: false,
            }}
          >
            <h3 className="vertical-timeline-element-title text-lg md:text-xl font-bold mb-1">
              Art Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-sm md:text-base mb-3">
              San Francisco, CA
            </h4>
            <div className="max-w-full mb-3 rounded-md overflow-hidden">
              <img
                src="/skin-image-2.webp"
                alt="Skin treatment visualization"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-sm md:text-base">
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: 'rgb(61, 166, 253)', color: '#fff' }}
            contentStyle={{
              background: 'rgb(61, 166, 253)',
              color: '#fff',
              maxWidth: '100%',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
            }}
            contentArrowStyle={{ borderRight: '7px solid rgb(61, 166, 253)' }}
            icon={<Icons.dot />}
            intersectionObserverProps={{
              rootMargin: '0px 0px -40px 0px',
              triggerOnce: false,
            }}
          >
            <h3 className="vertical-timeline-element-title text-lg md:text-xl font-bold mb-1">
              Web Designer
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-sm md:text-base mb-3">
              Los Angeles, CA
            </h4>
            <div className="max-w-full mb-3 rounded-md overflow-hidden">
              <img
                src="/skin-image-4.webp"
                alt="Skin care product showcase"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-sm md:text-base">
              User Experience, Visual Design
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: 'rgb(253, 143, 108)', color: '#fff' }}
            contentStyle={{
              background: 'rgb(253, 143, 108)',
              color: '#fff',
              maxWidth: '100%',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
            }}
            contentArrowStyle={{ borderRight: '7px solid rgb(253, 143, 108)' }}
            icon={<Icons.dot />}
            intersectionObserverProps={{
              rootMargin: '0px 0px -40px 0px',
              triggerOnce: false,
            }}
          >
            <h3 className="vertical-timeline-element-title text-lg md:text-xl font-bold mb-1">
              Web Designer
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-sm md:text-base mb-3">
              San Francisco, CA
            </h4>
            <div className="max-w-full mb-3 rounded-md overflow-hidden">
              <img
                src="/skin-image-5.webp"
                alt="Skin care treatment results"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-sm md:text-base">
              User Experience, Visual Design
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: 'rgb(253, 143, 108)', color: '#fff' }}
            icon={<Icons.dot />}
            contentStyle={{
              background: 'rgb(253, 143, 108)',
              color: '#fff',
              maxWidth: '100%',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
            }}
            contentArrowStyle={{ borderRight: '7px solid rgb(253, 143, 108)' }}
            intersectionObserverProps={{
              rootMargin: '0px 0px -40px 0px',
              triggerOnce: false,
            }}
          >
            <h3 className="vertical-timeline-element-title text-lg md:text-xl font-bold mb-1">
              Content Marketing for Web, Mobile and Social Media
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-sm md:text-base mb-3">
              Online Course
            </h4>
            <div className="max-w-full mb-3 rounded-md overflow-hidden">
              <img
                src="/skin-image-1.jpg"
                alt="Marketing strategy visualization"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-sm md:text-base">Strategy, Social Media</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
}
