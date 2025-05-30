import { ProcessComponent } from "../../components/Process/process.components";

export default function StepProcess() {
  const Steps = [
    {
      title: "Scan",
      description:
        "Our advanced AI technology analyzes your skin to detect your unique profile and identify key concerns — all through a simple smartphone scan.",
      image: "/steps/1.png",
    },
    {
      title: "Analyze",
      description:
        "AI-powered algorithms process your skin data to accurately determine your skin type, condition, and key concerns.",
      image: "/steps/2.png",
    },
    {
      title: "Product Recommendations",
      description:
        "Get personalized product suggestions, carefully tailored to match your skin’s unique needs and concerns.",
      image: "/steps/3.png",
    },
    {
      title: "Routine",
      description:
        "Stick to a routine crafted just for you—for skin that stays healthy and radiant.",
      image: "/steps/4.png",
    },
  ];

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto ">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h4 className="text-sm uppercase tracking-wider text-primary font-medium mb-3">
          Simple Process
        </h4>
        <h2 className="text-3xl md:text-4xl font-serif mb-6 font-bold">
          How It Works
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Get personalized skincare recommendations in three easy steps. Our AI
          analyzes your skin condition and creates a customized routine tailored
          specifically to your unique needs and goals.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap gap-4  ">
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
