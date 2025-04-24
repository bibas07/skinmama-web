'use client';
import { Icons } from '@skinmama/components/icons';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function FeatureSection() {
  return (
    <section className="w-full overflow-hidden">
      <div className="container mx-auto px-4">
        <VerticalTimeline
          layout="2-columns"
          lineColor="#fce8e3"
          className="vertical-timeline-custom-line"
        >
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: 'rgb(253, 143, 108 )',
              color: '#fff',
              maxWidth: '100%',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  rgb(253, 143, 108 )',
            }}
            iconStyle={{ background: 'rgb(253, 143, 108)', color: '#fff' }}
            icon={<Icons.dot />}
            intersectionObserverProps={{
              rootMargin: '0px 0px -40px 0px',
              triggerOnce: false,
            }}
          >
            <h3 className="vertical-timeline-element-title">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <div className="max-w-full">
              <img
                src={'/phone-mockup.png'}
                alt="Phone mockup"
                className="w-full h-auto object-contain"
              />
            </div>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>

          {/* Other elements with the same fixes applied */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: 'rgb(61, 166, 253)',
              color: '#fff',
              maxWidth: '100%',
            }}
            iconStyle={{ background: 'rgb(61, 166, 253)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(61, 166, 253)' }}
            icon={<Icons.dot />}
            intersectionObserverProps={{
              rootMargin: '0px 0px -40px 0px',
              triggerOnce: false,
            }}
          >
            <h3 className="vertical-timeline-element-title">Art Director</h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Francisco, CA
            </h4>
            <div className="max-w-full">
              <img
                src={'/skin-image-2.webp'}
                alt="Skin image"
                className="w-full h-auto object-contain"
              />
            </div>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: 'rgb(61, 166, 253)', color: '#fff' }}
            contentStyle={{ background: 'rgb(61, 166, 253)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(61, 166, 253)' }}
            icon={<Icons.dot />}
            intersectionObserverProps={{
              rootMargin: '0px 0px -40px 0px',
              triggerOnce: false,
            }}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Los Angeles, CA
            </h4>
            <img src={'/skin-image-4.webp'} />

            <p>User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: 'rgb(253, 143, 108)', color: '#fff' }}
            contentStyle={{ background: 'rgb(253, 143, 108)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(253, 143, 108)' }}
            icon={<Icons.dot />}
            intersectionObserverProps={{
              rootMargin: '0px 0px -40px 0px',
              triggerOnce: false,
            }}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Francisco, CA
            </h4>
            <img src={'/skin-image-5.webp'} />

            <p>User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: 'rgb(253, 143, 108)', color: '#fff' }}
            icon={<Icons.dot />}
            contentStyle={{ background: 'rgb(253, 143, 108)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(253, 143, 108)' }}
            intersectionObserverProps={{
              rootMargin: '0px 0px -40px 0px',
              triggerOnce: false,
            }}
          >
            <h3 className="vertical-timeline-element-title">
              Content Marketing for Web, Mobile and Social Media
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Online Course
            </h4>
            <img src={'/skin-image-1.jpg'} />

            <p>Strategy, Social Media</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
}
