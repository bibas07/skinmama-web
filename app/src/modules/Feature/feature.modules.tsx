import FeatureSection from '../../components/Feature/features.components';

export function Feature() {
  return (
    <div className="mt-6">
      <div className="flex w-full justify-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          What Does We <span className="text-primary text-5xl">Offer ?</span>
        </h1>
      </div>
      <FeatureSection />
    </div>
  );
}
