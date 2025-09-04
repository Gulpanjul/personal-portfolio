import HeroSection from "@/components/views/Home/HeroSection";
import SkillSection from "./SkillSection";
import { cn } from "@/lib/utils";
import Section from "@/components/ui/Section";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import ProjectsSection from "./ProjectsSection";
import CertificateSection from "./CertificateSection";

const Home = () => {
  return (
    <div className={cn("mt-24")}>
      <Section>
        <HeroSection />
      </Section>

        <Section>
          <SkillSection />
        </Section>

      <Section id="about">
        <AboutSection />
      </Section>

      <Section id="experience" className="py-16">
        <ExperienceSection />
      </Section>

      <Section id="education" className="py-16">
        <EducationSection />
      </Section>

      <Section id="projects" className="py-16">
        <ProjectsSection />
      </Section>

      <Section id="certificate" className="py-16">
        <CertificateSection />
      </Section>
    </div>
  );
};

export default Home;
