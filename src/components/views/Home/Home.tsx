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

      <Section>
        <AboutSection />
      </Section>

      <Section className="mt-20">
        <ExperienceSection />
      </Section>

      <Section>
        <EducationSection />
      </Section>

      <Section>
        <ProjectsSection />
      </Section>

      <Section>
        <CertificateSection />
      </Section>
    </div>
  );
};

export default Home;
