'use client';

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@skinmama/components/ui/alert';
import { Badge } from '@skinmama/components/ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@skinmama/components/ui/card';
import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import debounce from 'lodash.debounce'

type Step = {
  label: string;
  description: string;
  icon: string;
  longDescription: string;
  ariaLabel?: string;
};

interface SDLCStepperProps {
  steps?: Step[];
  initialStep?: number;
  autoRotateInterval?: number;
  size?: number;
  activeColor?: string;
  inactiveColor?: string;
  completedColor?: string;
  pauseOnHover?: boolean;
  className?: string;
  cardTitle?: string;
}

const defaultSteps: Step[] = [
  {
    label: 'Planning',
    description: 'Define requirements and scope',
    icon: '📋',
    longDescription:
      'The planning phase establishes project requirements, objectives, timeline, and resources. This is where the team defines what needs to be built and how it will address business needs. A clear roadmap is created to guide development efforts.',
    ariaLabel: 'Planning phase',
  },
  {
    label: 'Development',
    description: 'Design and build the solution',
    icon: '💻',
    longDescription:
      'The development phase encompasses both design and implementation. Engineers transform requirements into working software through coding, regular builds, and initial testing. This phase produces the functional components that will make up the final product.',
    ariaLabel: 'Development phase',
  },
  {
    label: 'Deployment',
    description: 'Test, release and maintain',
    icon: '🚀',
    longDescription:
      'The deployment phase includes final testing, user acceptance, release to production, and ongoing maintenance. After launch, the team addresses bugs, implements improvements, and ensures the system continues to meet business objectives.',
    ariaLabel: 'Deployment phase',
  },
  {
    label: 'Development',
    description: 'Design and build the solution',
    icon: '💻',
    longDescription:
      'The development phase encompasses both design and implementation. Engineers transform requirements into working software through coding, regular builds, and initial testing. This phase produces the functional components that will make up the final product.',
    ariaLabel: 'Development phase',
  },
];

const SDLCStepper: React.FC<SDLCStepperProps> = ({
  steps = defaultSteps,
  initialStep = 0,
  autoRotateInterval = 5000,
  size = 600,
  activeColor = '#3b82f6',
  inactiveColor = '#d1d5db',
  completedColor = '#10b981',
  pauseOnHover = true,
  className = '',
  cardTitle = 'How can we process',
}) => {
  // State
  const [activeStep, setActiveStep] = useState(initialStep);
  const [displayedStep, setDisplayedStep] = useState(initialStep);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [containerSize, setContainerSize] = useState(size);
  const [viewportSize, setViewportSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768,
  });
  const [isSSR, setIsSSR] = useState(true);
  
  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const progressIntervalRef = useRef<number | null>(null);
  const requestAnimationRef = useRef<number | null>(null);
  
  // Detect SSR vs client rendering
  useEffect(() => {
    setIsSSR(false);
  }, []);

  // Viewport and device detection
  const isMobile = useMemo(() => viewportSize.width < 768, [viewportSize.width]);
  const isTablet = useMemo(() => viewportSize.width >= 768 && viewportSize.width < 1024, [viewportSize.width]);
  const isLargeScreen = useMemo(() => viewportSize.width >= 1440, [viewportSize.width]);

  // Responsive sizing
  const getResponsiveSize = useCallback(() => {
    if (isMobile) return Math.min(viewportSize.width - 48, 350);
    if (isTablet) return Math.min(viewportSize.width * 0.6, 500);
    return isLargeScreen ? Math.min(size, 700) : Math.min(size, 600);
  }, [isMobile, isTablet, isLargeScreen, viewportSize.width, size]);

  // Calculate thresholds for steps - memoized
  const thresholds = useMemo(() => {
    const thresholds = [];
    const stepSize = 100 / steps.length;
    
    for (let i = 0; i < steps.length; i++) {
      thresholds.push(i * stepSize);
    }
    
    thresholds.push(100);
    return thresholds;
  }, [steps.length]);

  // Resize handler with debounce
  const handleResize = useCallback(
    debounce(() => {
      if (typeof window !== 'undefined') {
        setViewportSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
  
        if (containerRef.current) {
          const containerWidth = containerRef.current.clientWidth;
          setContainerSize(Math.min(containerWidth - (isMobile ? 24 : 40), getResponsiveSize()));
        }
      }
    }, 150),
    [getResponsiveSize, isMobile]
  );

  // Setup resize event listener
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize();
      
      return () => {
        window.removeEventListener('resize', handleResize);
        handleResize.cancel();
      };
    }
  }, [handleResize]);

  // Progress animation using requestAnimationFrame for better performance
  useEffect(() => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }

    const startTime = Date.now();
    const intervalDuration = 20; // Update every 20ms

    const updateProgress = () => {
      if (!isPaused) {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        
        if (elapsedTime >= intervalDuration) {
          setProgress((prev) => {
            const increment = 100 / (autoRotateInterval / intervalDuration);
            const newProgress = prev + increment;
            return newProgress >= 100 ? 100 : newProgress;
          });
        }
      }
      
      requestAnimationRef.current = requestAnimationFrame(updateProgress);
    };

    requestAnimationRef.current = requestAnimationFrame(updateProgress);

    return () => {
      if (requestAnimationRef.current) {
        cancelAnimationFrame(requestAnimationRef.current);
      }
    };
  }, [isPaused, autoRotateInterval]);

  // Handle step transitions based on progress
  useEffect(() => {
    // Find current step based on progress
    for (let i = 0; i < thresholds.length - 1; i++) {
      if (progress >= thresholds[i] && progress < thresholds[i + 1]) {
        if (displayedStep !== i) {
          setDisplayedStep(i);
          setActiveStep(i);
        }
        break;
      }
    }

    // Reset when reaching 100%
    if (progress >= 100) {
      setProgress(0);
    }
  }, [progress, thresholds, displayedStep]);

  // SVG specific calculations
  const center = containerSize / 2;
  const radius = useMemo(() => {
    const baseRadius = center - (isMobile ? 60 : 80);
    return Math.max(baseRadius, 90); // Ensure minimum radius for small screens
  }, [center, isMobile]);
  
  const anglePerStep = (2 * Math.PI) / steps.length;
  const circleCircumference = 2 * Math.PI * radius;

  // Determine if a step is completed based on current progress
  const isStepCompleted = useCallback((index: number) => {
    const stepProgress = (progress / 100) * steps.length;
    return index < Math.floor(stepProgress);
  }, [progress, steps.length]);

  // Accessibility helper for keyboard users
  const handleKeyPress = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      goToStep(index);
    }
  };

  // Function to go to a specific step
  const goToStep = useCallback((index: number) => {
    setActiveStep(index);
    setDisplayedStep(index);
    // Calculate appropriate progress for the step
    const newProgress = (index / steps.length) * 100;
    setProgress(newProgress);
  }, [steps.length]);

  const renderCircularStepper = () => {
    // Dynamic font sizing based on container size
    const iconFontSize = containerSize < 400 ? 16 : containerSize < 500 ? 20 : 24;
    const labelFontSize = containerSize < 400 ? 10 : 12;
    const circleSizeActive = containerSize < 400 ? 45 : 60;
    const circleSizeInactive = containerSize < 400 ? 40 : 50;
    
    return (
      <div className="relative w-full flex justify-center" role="region" aria-label="SDLC Process Stepper">
        <svg
          width={containerSize}
          height={containerSize}
          className="overflow-visible"
          aria-labelledby="sdlc-cycle-title"
          onMouseEnter={() => pauseOnHover && setIsPaused(true)}
          onMouseLeave={() => pauseOnHover && setIsPaused(false)}
        >
          <title id="sdlc-cycle-title">Software Development Life Cycle</title>
          <desc>Interactive visualization of the software development process</desc>
          
          {/* Background circle */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth={12}
            className="opacity-30"
          />

          {/* Progress arc */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke={activeColor}
            strokeWidth={12}
            strokeDasharray={`${
              (circleCircumference * progress) / 100
            } ${circleCircumference}`}
            strokeDashoffset={0}
            transform={`rotate(-90 ${center} ${center})`}
            className="transition-all duration-100 ease-linear"
            strokeLinecap="round"
          />

          {/* Step nodes */}
          {steps.map((step, index) => {
            const angle = index * anglePerStep - Math.PI / 2;
            const x = center + radius * Math.cos(angle);
            const y = center + radius * Math.sin(angle);

            const isActive = index === activeStep;
            const completed = isStepCompleted(index);
            const stepColor = isActive
              ? activeColor
              : completed
              ? completedColor
              : inactiveColor;

            const circleSize = isActive ? circleSizeActive : circleSizeInactive;

            return (
              <g
                key={index}
                onClick={() => goToStep(index)}
                onKeyDown={(e) => handleKeyPress(e, index)}
                tabIndex={0}
                role="button"
                aria-label={`${step.ariaLabel || step.label}${completed ? ' (completed)' : ''}${isActive ? ' (current)' : ''}`}
                aria-current={isActive ? 'step' : undefined}
                className="cursor-pointer hover:opacity-90 transition-all duration-300 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50"
              >
                <circle
                  cx={x}
                  cy={y}
                  r={circleSize}
                  fill={stepColor}
                  stroke={isActive ? '#1e40af' : '#9ca3af'}
                  strokeWidth={isActive ? 4 : 3}
                  className={`transition-all duration-300 ${
                    isActive ? 'filter drop-shadow-lg' : ''
                  }`}
                />

                {completed && (
                  <text
                    x={x}
                    y={y - (containerSize < 400 ? 20 : 30)}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={containerSize < 400 ? 14 : 18}
                    fill="#ffffff"
                    className="select-none pointer-events-none"
                  >
                    ✓
                  </text>
                )}

                <text
                  x={x}
                  y={y - 10}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize={isActive ? iconFontSize : iconFontSize * 0.9}
                  fill="#ffffff"
                  className="select-none pointer-events-none"
                  aria-hidden="true"
                >
                  {step.icon}
                </text>

                <text
                  x={x}
                  y={y + 15}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize={isActive ? labelFontSize : labelFontSize * 0.9}
                  fontWeight="bold"
                  fill="#ffffff"
                  className="select-none pointer-events-none"
                  aria-hidden="true"
                >
                  {step.label}
                </text>
              </g>
            );
          })}

          {/* Center progress display */}
          <g>
            <circle
              cx={center}
              cy={center}
              r={containerSize < 400 ? 35 : 45}
              fill="#f9fafb"
              stroke="#e5e7eb"
              strokeWidth={2}
              className="drop-shadow-sm"
            />
            
            <text
              x={center}
              y={center}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={containerSize < 400 ? 16 : 20}
              fontWeight="bold"
              fill="#374151"
              className="select-none"
              role="status"
              aria-live="polite"
            >
              {progress.toFixed(0)}%
            </text>

            
          </g>
        </svg>
      </div>
    );
  };

  const renderVerticalTimeline = () => {
    return (
      <div 
        className="flex flex-col w-full space-y-6 px-2 pb-4" 
        role="region" 
        aria-label="SDLC Process Timeline"
      >
        <div className="w-full h-4 rounded-full overflow-hidden bg-gray-200" role="progressbar" aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100}>
          <div
            className="h-full bg-blue-500 transition-all duration-100 ease-linear rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {steps.map((step, index) => {
          const isActive = index === activeStep;
          const completed = isStepCompleted(index);
          const stepColor = isActive
            ? activeColor
            : completed
            ? completedColor
            : inactiveColor;

          return (
            <div
              key={index}
              className={`flex items-start relative transition-all duration-300 ${
                isActive ? 'scale-102' : ''
              }`}
              onClick={() => goToStep(index)}
              onKeyDown={(e) => handleKeyPress(e, index)}
              tabIndex={0}
              role="button"
              aria-label={`${step.ariaLabel || step.label}${completed ? ' (completed)' : ''}${isActive ? ' (current)' : ''}`}
              aria-current={isActive ? 'step' : undefined}
            >
              {index < steps.length - 1 && (
                <div
                  className="absolute h-full w-2 md:w-3 left-6 md:left-8 top-16 -z-10 rounded-full"
                  style={{
                    backgroundColor:
                      isStepCompleted(index) ? completedColor : '#e5e7eb',
                    marginLeft: '0.3rem',
                  }}
                  aria-hidden="true"
                />
              )}

              <div
                className={`flex-shrink-0 rounded-full flex flex-col items-center justify-center shadow-md transition-all duration-300 p-2
                           ${isActive ? 'w-16 h-16 md:w-20 md:h-20' : 'w-14 h-14 md:w-16 md:h-16'}`}
                style={{ backgroundColor: stepColor }}
                aria-hidden="true"
              >
                {completed && !isActive ? (
                  <span className="text-white text-lg md:text-xl font-bold">✓</span>
                ) : (
                  <span
                    className={`text-white ${
                      isActive ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'
                    } mb-1 md:mb-2`}
                  >
                    {step.icon}
                  </span>
                )}
                <span className="text-white text-xs font-bold line-clamp-1">
                  {step.label}
                </span>
              </div>

              <div
                className={`ml-3 md:ml-4 p-3 md:p-4 rounded-lg transition-all duration-200
                              ${
                                isActive
                                  ? 'border-blue-200 border-2 shadow-md'
                                  : 'border border-gray-100'
                              } 
                              w-full`}
              >
                <h3
                  className={`font-bold ${
                    isActive ? 'text-lg md:text-xl text-blue-800' : 'text-base md:text-lg text-gray-800'
                  } flex items-center`}
                >
                  {step.label}
                  {completed && !isActive && (
                    <span className="ml-2 text-green-500" aria-label="Completed">✓</span>
                  )}
                </h3>
                <p className="text-sm md:text-base text-gray-600 mt-1 md:mt-2">
                  {step.description}
                </p>
                {isActive && (
                  <p className="mt-2 md:mt-3 text-sm md:text-base text-gray-700">{step.longDescription}</p>
                )}
                {isActive && (
                  <Badge className="mt-2 md:mt-3">{`Stage ${index + 1} of ${
                    steps.length
                  }`}</Badge>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // Don't render until client-side hydration is complete
  if (isSSR) {
    return <div className="w-full h-56 bg-gray-100 animate-pulse rounded-xl"></div>;
  }

  return (
    <div ref={containerRef} className={`w-full ${className}`}>
      <Card className="w-full shadow-lg border border-gray-100">
        <CardHeader className="pb-2 md:pb-4">
          <CardTitle className="text-center text-xl md:text-2xl text-gray-800">
            {cardTitle}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-center w-full">
            <div
              className={`w-full ${
                isMobile ? '' : 'lg:w-3/5'
              } flex justify-center`}
            >
              {isMobile ? renderVerticalTimeline() : renderCircularStepper()}
            </div>

            {!isMobile && (
              <div className="lg:w-2/5 w-full">
                <Alert className="border-0 shadow-md bg-blue-50/50">
                  <AlertTitle className="text-lg md:text-xl font-bold flex items-center gap-2 text-gray-900">
                    <span aria-hidden="true">{steps[displayedStep].icon}</span>
                    <span>{steps[displayedStep].label}</span>
                    {isStepCompleted(displayedStep) && (
                      <span className="text-green-500" aria-label="Completed">✓</span>
                    )}
                  </AlertTitle>
                  <AlertDescription className="mt-3 md:mt-4 text-sm md:text-base text-gray-700">
                    {steps[displayedStep].longDescription}
                  </AlertDescription>
                </Alert>
                
      
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Export with React.memo for performance optimization
const MemoizedSDLCStepper = React.memo(SDLCStepper);

export default function SDLCVisualization() {
  return (
    <div className="max-w-7xl mx-auto p-2 md:p-4">
      <MemoizedSDLCStepper 
        autoRotateInterval={5000} 
        pauseOnHover={true}
        cardTitle="Software Development Life Cycle"
      />
    </div>
  );
}