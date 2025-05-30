import { PricingComponent } from "../../components/Pricing/pricing.component";

export default function Pricing() {
  const FEATURES = [
    "AI-Based Skin Analysis",
    "Unlimited Product Scan",
    "Personalized Routine Builder",
    "Smart Product Recommendations",
    "Weekly Progress Analytics",
    "AI Chat Support",
    "Scan & Learn",
    "Quick Actions & DIY Tools",
  ];
  return (
    <div className=" mx-auto py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 to-white ">
      <div className="text-center">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-sm uppercase tracking-wider text-primary font-medium mb-3">
            Pricing Plans
          </h4>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 font-bold">
            Choose Your Perfect Plan
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Start with our free plan or unlock advanced features with our
            premium options. All plans include our core AI-powered skin analysis
            technology with flexible pricing to match your skincare journey.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <PricingComponent
          features={FEATURES}
          pricing={{ weekly: 2.99, monthly: 8.99, annual: 99.99 }}
        />
      </div>
    </div>
  );
}
