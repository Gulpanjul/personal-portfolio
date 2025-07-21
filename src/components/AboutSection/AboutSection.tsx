import Image from "next/image";
import Marquee from "react-fast-marquee";
import techList from "./TechList.contants";
import TechList from "./TechList";

const AboutSection = () => {
  return (
    <section className="text-primary" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/Images/Personal/about.png"
          width={500}
          height={500}
          alt="About Image"
          className="border-8 border-gray-500 rounded-full"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-6xl font-bold mb-4">About Me</h2>
          <p className="text-base text-muted-foreground lg:text-lg">
            A graduate of the Information Systems program at Universitas
            Gunadarma (2023) with a strong interest in full-stack web
            development. Continuously building expertise in both frontend and
            backend technologies, complemented by experience in game
            development, UI/UX design, and project management. Known for a
            positive mindset, strong problem-solving skills, critical thinking,
            and a collaborative approach in team environments. Eager to
            contribute to impactful tech projects by combining technical skills
            with a user-centered perspective.
          </p>
          <div className="flex flex-row mt-10 items-center">
            <h2 className="text-lg sm:text-2xl lg:text-4xl font-bold border-r-4 pl-4 border-primary h-full flex items-center">Tech Stack</h2>
            <Marquee direction="right" loop={0} autoFill={true} speed={150}>
              {techList.map((tech, index) => (
                <div key={index} className="mx-4">
                  <TechList icon={tech.icon} title={tech.name} />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
