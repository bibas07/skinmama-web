import Image from 'next/image';

interface StepProps {
  step: number;
  image: string;
  title: string;
  description: string;
}

export function ProcessComponent({
  image,
  title,
  description,
  step,
}: Readonly<StepProps>) {
  return (
    <div className="flex-1 min-w-0 sm:min-w-[calc(50%-0.5rem)] lg:min-w-0">
      <div className="h-full flex flex-col items-center">
        <div className="w-full mb-3 relative h-150">
          <Image src={image} alt={title} fill className="object-contain" />
        </div>
        <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center text-white font-medium text-sm mb-3">
          {step}
        </div>
        <h3 className="text-lg font-bold text-center text-gray-800 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm text-center">{description}</p>
      </div>
    </div>
  );
}
