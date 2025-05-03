'use client';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@skinmama/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@skinmama/components/ui/tabs';
import { useState } from 'react';

interface PricingProps {
  features: string[];
  pricing: {
    weekly: number;
    monthly: number;
    annual: number;
  };
}

export function PricingComponent(data: Readonly<PricingProps>) {
  const { features, pricing } = data;
  type TabValue = 'weekly' | 'monthly' | 'annual';

  const [activeTab, setActiveTab] = useState<TabValue>('weekly');

  const handleTabChange = (value: TabValue) => {
    setActiveTab(value);
  };

  const prices: Record<TabValue, number> = {
    weekly: pricing.weekly,
    monthly: pricing.monthly,
    annual: pricing.annual,
  };

  const featuresList = () => {
    const FEATURES = features;
    return (
      <div className="text-sm space-y-1 font-medium text-justify">
        {FEATURES.map((feature) => (
          <div key={feature} className="flex">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
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
            {feature}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex justify-center w-full">
      <Tabs
        value={activeTab}
        onValueChange={(value) => handleTabChange(value as TabValue)}
        className="w-full max-w-md"
      >
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="annual">Annual</TabsTrigger>
        </TabsList>

        <Card>
          <CardHeader className="bg-primary w-full h-auto p-3 text-center">
            <span className="text-2xl font-bold text-white">
              ${prices[activeTab]}
            </span>
          </CardHeader>
          <CardTitle className="text-center">Unlock All Features</CardTitle>
          <CardContent>{featuresList()}</CardContent>
          <CardFooter></CardFooter>
        </Card>
      </Tabs>
    </div>
  );
}
