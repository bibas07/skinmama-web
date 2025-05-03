import { CardComponents } from '../../components/FeatureCard/featureCard.component';

export default function FeatureCard() {
  const features = [
    {
      title: 'AI-Based Skin Analysis',
      description:
        'Scan your face to detect key skin issues such as acne, dryness, dark circles, uneven tone, and more - all in real time.',
    },
    {
      title: 'Personalized Routine Builder',
      description:
        'Receive a custom skin care routine based on your skin type and concerns. Morning and evening steps are tailored to suit your goals and  lifestyle.',
    },
    {
      title: 'Smart Product Recommendations',
      description:
        'Discover skincare products with high compatibility scores for your skin. View sun risk levels and effectiveness before you buy.',
    },
    {
      title: 'Weekly Progress Analytics',
      description:
        "Track skin improvements and changes over time with visual reports and health scores. Understand what's working and what needs attention.",
    },

    {
      title: 'AI Chat Support',
      description:
        "Ask skincare questions and get guidance instantly with our AI-powered virtual assistant. It's like having a skincare expert in your pocket.",
    },

    {
      title: 'Scan & Learn',
      description:
        'Scan any skincare product to get instant insights, ingredient breakdowns, and fit scores based on your skin condition.',
    },

    {
      title: 'Quick Actions & DIY Tools',
      description:
        'Access fun and effective skincare tools, including skin quizzes, DIY tips, facial massage guides, and more. SkinMama simplifies skincare using science and smart technology - helping you feel confident and in control of your skin health, every day.',
    },

    {
      title: 'Disclaimer',
      description:
        'The information provided by SkinMama is for general information purposes only and is not intended to replace professional medical advice, diagnosis, or treatment. ',
    },
  ];
  return (
    <div className="m-6">
      <div className="text-3xl font-bold sm:text-4xl w-full tracking-tight text-center m-4">
        Core <span className="text-primary text-5xl">Features</span>
      </div>
      <div className="flex w-full mx-auto gap-8">
        <div className="hover:zoom-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 m-4">
            {features.map((feature, index) => (
              <CardComponents
                key={index}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
