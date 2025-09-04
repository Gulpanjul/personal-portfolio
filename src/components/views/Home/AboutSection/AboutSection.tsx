import Image from "next/image";
import Paragraph from "@/components/ui/Paragraph";
import { socialList } from "./AboutSection.constant";
import Dock from "@/components/ui/dock";
import Heading from "@/components/ui/Heading";

const AboutSection = () => {
  return (
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/Images/Personal/about.png"
          width={500}
          height={500}
          alt="About Image"
          className="border-8 border-gray-500 rounded-full"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <Heading size="large" as={"h2"} strong>The Story Behind the Person</Heading>
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
  );
};

export default AboutSection;
