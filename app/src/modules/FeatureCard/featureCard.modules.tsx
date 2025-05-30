import {
  MessageSquare,
  BarChart3,
  Calendar,
  Scan,
  ShoppingBag,
  Lightbulb,
  Search,
} from "lucide-react";
import FeatureCardItem from "../../components/FeatureCard/featureCard.component";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function FeatureCard() {
  const features: Feature[] = [
    {
      title: "AI-Based Skin Analysis",
      description:
        "Scan your face to detect key skin issues such as acne, dryness, dark circles, uneven tone, and more - all in real time.",
      icon: <Scan className="w-7 h-7" />,
    },
    {
      title: "Personalized Routine Builder",
      description:
        "Receive a custom skin care routine based on your skin type and concerns. Morning and evening steps are tailored to suit your goals and lifestyle.",
      icon: <Calendar className="w-7 h-7" />,
    },
    {
      title: "Smart Product Recommendations",
      description:
        "Discover skincare products with high compatibility scores for your skin. View sun risk levels and effectiveness before you buy.",
      icon: <ShoppingBag className="w-7 h-7" />,
    },
    {
      title: "Weekly Progress Analytics",
      description:
        "Track skin improvements and changes over time with visual reports and health scores. Understand what's working and what needs attention.",
      icon: <BarChart3 className="w-7 h-7" />,
    },
    {
      title: "AI Chat Support",
      description:
        "Ask skincare questions and get guidance instantly with our AI-powered virtual assistant. It's like having a skincare expert in your pocket.",
      icon: <MessageSquare className="w-7 h-7" />,
    },
    {
      title: "Scan & Learn",
      description:
        "Scan any skincare product to get instant insights, ingredient breakdowns, and fit scores based on your skin condition.",
      icon: <Search className="w-7 h-7" />,
    },
    {
      title: "Quick Actions & DIY Tools",
      description:
        "Access fun and effective skincare tools, including skin quizzes, DIY tips, facial massage guides, and more.",
      icon: <Lightbulb className="w-7 h-7" />,
    },
  ];
  return (
    <div className="m-6 mt-16">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h4 className="text-sm uppercase tracking-wider text-primary font-medium mb-3">
          Smart Skincare
        </h4>
        <h2 className="text-3xl md:text-4xl font-serif mb-6 font-bold">
          AI-Powered Beauty Solutions
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Experience the future of skincare with our advanced AI technology,
          delivering personalized analysis and recommendations for your unique
          skin needs.
        </p>
      </div>
      <div className="flex w-full mx-auto gap-8">
        <div className="hover:zoom-in">
          <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-6 px-4 m-4">
            {features.map((feature, index) => (
              <FeatureCardItem
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
