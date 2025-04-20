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
import React, { useEffect, useRef, useState } from 'react';

type Step = {
  label: string;
  description: string;
  icon: string;
  longDescription: string;
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
}

const defaultSteps: Step[] = [
  {
    label: 'Planning',
    description: 'Define requirements and scope',
    icon: '📋',
    longDescription:
      'The planning phase establishes project requirements, objectives, timeline, and resources. This is where the team defines what needs to be built and how it will address business needs. A clear roadmap is created to guide development efforts.',
  },
  {
    label: 'Development',
    description: 'Design and build the solution',
    icon: '💻',
    longDescription:
      'The development phase encompasses both design and implementation. Engineers transform requirements into working software through coding, regular builds, and initial testing. This phase produces the functional components that will make up the final product.',
  },
  {
    label: 'Deployment',
    description: 'Test, release and maintain',
    icon: '🚀',
    longDescription:
      'The deployment phase includes final testing, user acceptance, release to production, and ongoing maintenance. After launch, the team addresses bugs, implements improvements, and ensures the system continues to meet business objectives.',
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
}) => {
  const [activeStep, setActiveStep] = useState(initialStep);
  const [displayedStep, setDisplayedStep] = useState(initialStep);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState(size);
  const [isMobile, setIsMobile] = useState(false);
  const progressIntervalRef = useRef<number | null>(null);

  useEffect(() => {
    const checkResponsive = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        setIsMobile(width < 768);
        setContainerSize(Math.min(width - 40, size));
      }
    };

    checkResponsive();
    window.addEventListener('resize', checkResponsive);
    return () => window.removeEventListener('resize', checkResponsive);
  }, [size]);

  useEffect(() => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }

    const updateProgressBar = () => {
      if (!isPaused) {
        setProgress((prev) => {
          const newProgress = prev + 100 / (autoRotateInterval / 100);
          return newProgress >= 100 ? 100 : newProgress;
        });
      }
    };

    progressIntervalRef.current = setInterval(
      updateProgressBar,
      100
    ) as unknown as number;

    return () => {
      if (progressIntervalRef.current)
        clearInterval(progressIntervalRef.current);
    };
  }, [isPaused, autoRotateInterval]);

  useEffect(() => {
    const progressPerStep = 100 / steps.length;
    const nextStepIndex = Math.floor(progress / progressPerStep);

    if (nextStepIndex !== displayedStep) {
      setDisplayedStep(nextStepIndex);
    }

    if (progress >= 100) {
      const newStep = (activeStep + 1) % steps.length;
      setActiveStep(newStep);
      setDisplayedStep(newStep);
      setProgress(0);
    }
  }, [progress, activeStep, displayedStep, steps.length]);

  useEffect(() => {
    setDisplayedStep(activeStep);
  }, [activeStep]);

  const center = containerSize / 2;
  const radius = center - 80;
  const anglePerStep = (2 * Math.PI) / steps.length;
  const circleCircumference = 2 * Math.PI * radius;

  const renderCircularStepper = () => {
    return (
      <div className="relative w-full">
        <svg
          width={containerSize}
          height={containerSize}
          className="overflow-visible"
          aria-label="SkinMama Life Cycle"
          onMouseEnter={() => pauseOnHover && setIsPaused(true)}
          onMouseLeave={() => pauseOnHover && setIsPaused(false)}
        >
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth={12}
            className="opacity-30"
          />

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
            className="transition-all duration-100"
            strokeLinecap="round"
          />

          {steps.map((step, index) => {
            const angle = index * anglePerStep - Math.PI / 2;
            const x = center + radius * Math.cos(angle);
            const y = center + radius * Math.sin(angle);

            const isActive = index === activeStep;
            const isCompleted = index < activeStep;
            const stepColor = isActive
              ? activeColor
              : isCompleted
              ? completedColor
              : inactiveColor;

            const circleSize = isActive ? 60 : 50;

            return (
              <g
                key={index}
                onClick={() => {
                  setActiveStep(index);
                  setDisplayedStep(index);
                  setProgress(0);
                }}
                className="cursor-pointer hover:opacity-90 transition-all duration-300"
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

                <text
                  x={x}
                  y={y - 10}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize={isActive ? '24' : '20'}
                  fill="#ffffff"
                  className="select-none"
                >
                  {step.icon}
                </text>

                <text
                  x={x}
                  y={y + 15}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize={isActive ? '14' : '12'}
                  fontWeight="bold"
                  fill="#ffffff"
                  className="select-none"
                >
                  {step.label}
                </text>
              </g>
            );
          })}

          <text
            x={center}
            y={center}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="20"
            fontWeight="bold"
            fill="#374151"
            className="select-none"
          >
            {progress.toFixed(0)}%
          </text>

          <text
            x={center}
            y={center + 26}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="14"
            fill="#6b7280"
            className="select-none"
          >
            {progress > 85
              ? `Next: ${steps[(activeStep + 1) % steps.length].label}`
              : ''}
          </text>
        </svg>
      </div>
    );
  };

  const renderVerticalTimeline = () => {
    return (
      <div className="flex flex-col w-full space-y-8 px-2 pb-4">
        <div className="w-full h-4 rounded-full overflow-hidden bg-gray-200">
          <div
            className="h-full bg-blue-500 transition-all duration-100 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {steps.map((step, index) => {
          const isActive = index === activeStep;
          const isCompleted = index < activeStep;
          const stepColor = isActive
            ? activeColor
            : isCompleted
            ? completedColor
            : inactiveColor;

          return (
            <div
              key={index}
              className={`flex items-start relative transition-all duration-300 ${
                isActive ? 'scale-102' : ''
              }`}
              onClick={() => {
                setActiveStep(index);
                setDisplayedStep(index);
                setProgress(0);
                setIsPaused(true);
              }}
            >
              {index < steps.length - 1 && (
                <div
                  className="absolute h-full w-3 left-8 top-16 -z-10 rounded-full"
                  style={{
                    backgroundColor:
                      index < activeStep ? completedColor : '#e5e7eb',
                    marginLeft: '0.3 rem',
                  }}
                />
              )}

              <div
                className={`flex-shrink-0 rounded-full flex flex-col items-center justify-center shadow-md transition-all duration-300 p-2
                           ${isActive ? 'w-20 h-20' : 'w-16 h-16'}`}
                style={{ backgroundColor: stepColor }}
              >
                <span
                  className={`text-white ${
                    isActive ? 'text-2xl' : 'text-xl'
                  } mb-2`}
                >
                  {step.icon}
                </span>
                <span className="text-white text-xs font-bold">
                  {step.label}
                </span>
              </div>

              <div
                className={`ml-4 p-4 rounded-lg transition-all duration-200
                              ${
                                isActive
                                  ? 'border-blue-200 border-2 shadow-md'
                                  : 'border border-gray-100'
                              } 
                              w-full`}
              >
                <h3
                  className={`font-bold ${
                    isActive ? 'text-xl text-blue-800' : 'text-lg text-gray-800'
                  }`}
                >
                  {step.label}
                </h3>
                <p className="text-base text-gray-600 mt-2">
                  {step.description}
                </p>
                {isActive && (
                  <p className="mt-3 text-gray-700">{step.longDescription}</p>
                )}
                {isActive && (
                  <Badge className="mt-3">{`Stage ${index + 1} of ${
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

  return (
    <div ref={containerRef} className="w-full">
      <Card className="w-full shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl">
            How can we process
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col lg:flex-row gap-8 items-center w-full">
            <div
              className={`w-full ${
                isMobile ? '' : 'lg:w-3/5'
              } flex justify-center`}
            >
              {isMobile ? renderVerticalTimeline() : renderCircularStepper()}
            </div>

            {!isMobile && (
              <div className="lg:w-2/5 w-full">
                <Alert className="border-0 shadow-none">
                  <AlertTitle className="text-xl font-bold flex items-center gap-2">
                    <span>{steps[displayedStep].icon}</span>
                    <span>{steps[displayedStep].label}</span>
                  </AlertTitle>
                  <AlertDescription className="mt-4 text-base">
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

export default function SDLCVisualization() {
  return (
    <div className="max-w-7xl mx-auto">
      <SDLCStepper autoRotateInterval={5000} pauseOnHover={true} />
    </div>
  );
}
