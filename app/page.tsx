import FeatureSection from './src/components/Feature/features.components';
import HeroSection from './src/components/HeroSection/heroSection.compoent';
import SkinMamaLifeCycle from './src/modules/SectionTwo/sectionTwo.modules';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <SkinMamaLifeCycle />
    </div>
  );
}
