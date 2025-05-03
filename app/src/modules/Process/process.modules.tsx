import { ProcessComponent } from '../../components/Process/process.components';

export default function StepProcess() {
  const Steps = [
    {
      title: 'Scan',
      description:
        'Our advanced technology scans your skin to identify your unique skin profile and concerns.',
      image: '/steps/1.png',
    },
    {
      title: 'Analyze',
      description:
        'AI-powered algorithms analyze your skin data to determine your skin type and condition.',
      image: '/steps/2.png',
    },
    {
      title: 'Product Recommendations',
      description:
        'Receive personalized product suggestions tailored specifically to your skin needs.',
      image: '/steps/3.png',
    },
    {
      title: 'Routine',
      description:
        'Follow your custom skincare routine for healthy, glowing skin that lasts.',
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
