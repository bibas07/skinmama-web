"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@skinmama/components/ui/card";
import { Button } from "@skinmama/components/ui/button";

interface PricingProps {
  features: string[];
  pricing: {
    weekly: number;
    monthly: number;
    annual: number;
  };
}

export function PricingComponent(data: Readonly<PricingProps>) {
  const { features } = data;

  const pricingTiers = [
    {
      title: "Basic",
      description: "Perfect for getting started",
      price: 2.99,
      features: features.slice(0, 3),
      buttonText: "Get Started",
      popular: false,
      duration: "week",
    },
    {
      title: "Pro",
      description: "Best for serious skincare enthusiasts",
      price: 8.99,
      features: features.slice(0, 6),
      buttonText: "Upgrade to Pro",
      popular: true,
      duration: "month",
    },
    {
      title: "Premium",
      description: "Complete skincare solution",
      price: 99.99,
      features: features,
      buttonText: "Go Premium",
      popular: false,
      duration: "year",
    },
  ];

  const featuresList = (features: string[]) => {
    return (
      <div className="text-sm space-y-2 font-medium text-justify">
        {features.map((feature) => (
          <div key={feature} className="flex items-start">
            <span className="mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check-icon lucide-check mx-1 text-primary"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>
            <span className="ml-2">{feature}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {pricingTiers.map((tier) => (
          <Card
            key={tier.title}
            className={`relative ${
              tier.popular
                ? "border-primary shadow-lg scale-105"
                : "border-border"
            }`}
          >
            {tier.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
            )}
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">{tier.title}</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">${tier.price}</span>
                <span className="text-muted-foreground">/{tier.duration}</span>
              </div>
            </CardHeader>
            <CardContent>{featuresList(tier.features)}</CardContent>
            <CardFooter className="flex justify-center">
              <Button
                variant={tier.popular ? "default" : "outline"}
                className="w-full"
              >
                {tier.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
