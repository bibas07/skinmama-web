import { ProcessComponent } from '../../components/Process/process.components';

export default function StepProcess() {
  const Steps = [
    {
      title: 'Scan',
      description:
        'Our advanced AI technology analyzes your skin to detect your unique profile and identify key concerns — all through a simple smartphone scan.',
      image: '/steps/1.png',
    },
    {
      title: 'Analyze',
      description:
        'AI-powered algorithms process your skin data to accurately determine your skin type, condition, and key concerns.',
      image: '/steps/2.png',
    },
    {
      title: 'Product Recommendations',
      description:
        'Get personalized product suggestions, carefully tailored to match your skin’s unique needs and concerns.',
      image: '/steps/3.png',
    },
    {
      title: 'Routine',
      description:
        'Stick to a routine crafted just for you—for skin that stays healthy and radiant.',
      image: '/steps/4.png',
    },
  ];

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10">
        How Does It <span className="text-primary ml-2">Work?</span>
      </h1>

      <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap gap-4">
        {Steps.map((step, index) => (
          <ProcessComponent
            key={step.title}
            image={step.image}
            title={step.title}
            description={step.description}
            step={index + 1}
          />
        ))}
      </div>
    </div>
  );
}
