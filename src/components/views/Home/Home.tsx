import HeroSection from "@/components/views/Home/HeroSection";
import SkillSection from "./SkillSection";
import { cn } from "@/lib/utils";
import Section from "@/components/ui/Section";
import AboutSection from "./AboutSection";

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
      {/* 

        <ExperienceSection />
        <EducationSection />

        <ProjectsSection /> */}
    </div>
  );
};

export default Home;
