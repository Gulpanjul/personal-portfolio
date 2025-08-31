import Image from "next/image";
import Paragraph from "@/components/ui/Paragraph";
import Heading from "@/components/ui/Heading";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import SocialAbout from "./SocialAbout";
import { socialList } from "./AboutSection.constant";
import Dock from "@/components/ui/dock";

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
          <Heading as="h2" size="large" strong>
            About Me
          </Heading>
          <Paragraph className="mt-4 text-muted-foreground" size="medium">
            A graduate of the Information Systems program at Universitas
            Gunadarma (2023) with a strong interest in full-stack web
            development. Continuously building expertise in both frontend and
            backend technologies, complemented by experience in game
            development, UI/UX design, and project management. Known for a
            positive mindset, strong problem-solving skills, critical thinking,
            and a collaborative approach in team environments. Eager to
            contribute to impactful tech projects by combining technical skills
            with a user-centered perspective.
          </Paragraph>
          <div className="mt-10">
            {/* <ScrollArea>
              <div className="flex gap-4 mb-4">
                {socialList.map((tech, index) => (
                  <div
                    key={index}
                    className="shrink-0 bg-muted px-4 py-4 rounded-xl shadow-sm hover:shadow-md transition flex items-center justify-center"
                  >
                    <SocialAbout icon={tech.icon} link={tech.link} />
                  </div>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea> */}
            <Dock
              items={socialList.map((social) => ({
                icon: <social.icon className="w-6 h-6 text-primary" />,
                label: social.label,
                onClick: () => window.open(social.link, "_blank"),
              }))}
              panelHeight={68}
              baseItemSize={50}
              magnification={70}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
