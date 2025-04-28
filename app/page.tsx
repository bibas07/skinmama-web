import { Footer } from './src/components/Footer/footer.component';
import HeroSection from './src/components/HeroSection/heroSection.component';
import { QuestionAnswerSection } from './src/components/QuestionAnswer/questionAnswer.component';
import { Testimonials } from './src/components/Testimonial/testimonial.component';
import { Feature } from './src/modules/Feature/feature.modules';
import SkinMamaLifeCycle from './src/modules/SectionTwo/sectionTwo.modules';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Feature />
      <SkinMamaLifeCycle />
      <QuestionAnswerSection />
      <Testimonials />
      <Footer />
    </div>
  );
}
