'use client';
import { Icons } from '@skinmama/components/icons';
import { useEffect, useState } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const INITIAL_TIMELINE_ITEMS = [
  {
    id: 1,
    title: 'AI Based Skin Analysis',
    description:
      'Snap a selfie and let our AI deeply analyze your skin — from dryness to pores — in seconds.',
    backgroundColor: 'rgb(253, 143, 108)',
    iconColor: 'rgb(253, 143, 108)',
    arrowColor: 'rgb(253, 143, 108)',
  },
  {
    id: 2,
    title: 'Ultimate Product Scan',
    description:
      'Point your camera at any skincare product and instantly see if it’s a good fit for your skin.',
    backgroundColor: 'rgb(61, 166, 253)',
    iconColor: 'rgb(61, 166, 253)',
    arrowColor: 'rgb(61, 166, 253)',
  },
  {
    id: 3,
    title: 'Personalized Routine Builder',
    description:
      'Not sure what to use? We’ll build a complete morning and night routine just for you.',
    backgroundColor: 'rgb(61, 166, 253)',
    iconColor: 'rgb(61, 166, 253)',
    arrowColor: 'rgb(61, 166, 253)',
  },
  {
    id: 4,
    title: 'Smart Product Recommendations',
    description:
      'Find products that truly match your skin’s needs — no more endless guessing or wasting money.',
    backgroundColor: 'rgb(253, 143, 108)',
    iconColor: 'rgb(253, 143, 108)',
    arrowColor: 'rgb(253, 143, 108)',
  },
  {
    id: 5,
    title: 'Weekly Progress Analytics',
    description:
      'See real changes week by week with simple skin reports you can actually understand.',
    backgroundColor: 'rgb(253, 143, 108)',
    iconColor: 'rgb(253, 143, 108)',
    arrowColor: 'rgb(253, 143, 108)',
  },
];

const NEW_TIMELINE_ITEMS = [
  {
    id: 6,
    title: 'AI Chat Support',
    description:
      'Got questions? Our AI skin coach is here 24/7 to help you pick products or tweak your routine.',
    backgroundColor: 'rgb(61, 166, 253)',
    iconColor: 'rgb(61, 166, 253)',
    arrowColor: 'rgb(61, 166, 253)',
  },
  {
    id: 7,
    title: 'Scan and Learn',
    description:
      'Just scan any skincare product and instantly learn what’s inside and if it’s right for you.',
    backgroundColor: 'rgb(61, 166, 253)',
    iconColor: 'rgb(61, 166, 253)',
    arrowColor: 'rgb(61, 166, 253)',
  },
  {
    id: 8,
    title: 'Quick Actions and DIY Tools',
    description:
      'Get easy DIY skincare tips and quick fixes you can actually trust — straight from your phone.',
    backgroundColor: 'rgb(253, 143, 108)',
    iconColor: 'rgb(253, 143, 108)',
    arrowColor: 'rgb(253, 143, 108)',
  },
];

export default function FeatureSection() {
  const [timelineItems, setTimelineItems] = useState(INITIAL_TIMELINE_ITEMS);
  const [layout, setLayout] = useState<'1-column' | '2-columns'>('2-columns');
  const [loadMoreIndex, setLoadMoreIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setLayout(window.innerWidth < 768 ? '1-column' : '2-columns');
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const lazyLoadItems = () => {
    const newItems = NEW_TIMELINE_ITEMS.slice(loadMoreIndex, loadMoreIndex + 1);
    setTimelineItems((prev) => [...prev, ...newItems]);
    setLoadMoreIndex((prev) => prev + 1);
  };

  return (
    <section className="w-full overflow-hidden py-6 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <VerticalTimeline
          layout={layout}
          lineColor="#fce8e3"
          className="vertical-timeline-custom-line"
          animate={true}
        >
          {timelineItems.map((item) => (
            <VerticalTimelineElement
              key={item.id}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: item.backgroundColor,
                color: '#fff',
                maxWidth: '100%',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
              }}
              contentArrowStyle={{
                borderRight: '7px solid ' + item.arrowColor,
              }}
              iconStyle={{ background: item.iconColor, color: '#fff' }}
              icon={<Icons.Dot />}
              intersectionObserverProps={{
                rootMargin: '0px 0px -40px 0px',
              }}
            >
              <h3 className="vertical-timeline-element-title text-lg md:text-xl font-bold mb-1">
                {item.title}
              </h3>
              <p className="text-sm md:text-base">{item.description}</p>
            </VerticalTimelineElement>
          ))}

          {loadMoreIndex < NEW_TIMELINE_ITEMS.length && (
            <VerticalTimelineElement
              className="vertical-timeline-element--work cursor-pointer"
              iconStyle={{ background: '#11ABB0', color: '#fff' }}
              icon={<Icons.Plus />}
              iconOnClick={lazyLoadItems}
            />
          )}
        </VerticalTimeline>
      </div>
    </section>
  );
}
