import { Inter } from "next/font/google";
import PageHead from "@/components/commons/PageHead";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col ${inter.className}`}>
      <PageHead title="Gulfa Portfolio" />
      <Navbar />
      <div className="container xs:px-4 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />

        <ExperienceSection />
        <EducationSection />

        <ProjectsSection />
      </div>
    </main>
  );
}
