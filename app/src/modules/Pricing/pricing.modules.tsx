import { PricingComponent } from '../../components/Pricing/pricing.component';

export default function Pricing() {
  const FEATURES = [
    'AI-Based Skin Analysis',
    'Unlimited Product Scan',
    'Personalized Routine Builder',
    'Smart Product Recommendations',
    'Weekly Progress Analytics',
    'AI Chat Support',
    'Scan & Learn',
    'Quick Actions & DIY Tools',
  ];
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-primary text-3xl font-bold tracking-tight sm:text-4xl">
          Our Plans
        </h1>
      </div>
      <div className="mt-8">
        <PricingComponent
          features={FEATURES}
          pricing={{ weekly: 3.38, monthly: 10.16, annual: 112.99 }}
        />
      </div>
    </div>
  );
}
