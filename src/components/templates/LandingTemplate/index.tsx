import { Navbar } from '@/components/organisms/Navbar';
import { Hero } from '@/components/organisms/Hero';
import { AboutSection } from '@/components/organisms/AboutSection';
import { PortfolioSection } from '@/components/organisms/PortfolioSection';
import { PhilosophySection } from '@/components/organisms/PhilosophySection';
import { ExperienceSection } from '@/components/organisms/ExperienceSection';
import { TestimonialsSection } from '@/components/organisms/TestimonialsSection';
import { ContactSection } from '@/components/organisms/ContactSection';
import { Footer } from '@/components/organisms/Footer';

interface LandingTemplateProps {
  showTestimonials?: boolean;
}

export function LandingTemplate({ showTestimonials = true }: LandingTemplateProps) {
  return (
    <div className="bg-cream text-ink font-sans overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <PortfolioSection />
        <PhilosophySection />
        <ExperienceSection />
        <TestimonialsSection show={showTestimonials} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
