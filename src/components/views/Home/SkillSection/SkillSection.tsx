import CustomMarquee from "@/components/ui/CustomMarquee";
import Heading from "@/components/ui/Heading";
import SkillList from "./SkillList";
import { backendToolsTech, frontendTech } from "./SkillSection.constant";

const SkillSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="lg:border-muted-foreground lg:border rounded-md py-8 px-16 items-center justify-between text-center flex-col flex gap-5">
        <Heading as="h2" size="medium" strong>
          Tech Stack I Work With
        </Heading>
        <CustomMarquee>
          {frontendTech.map((tech, index) => (
            <div key={index} className="m-4">
              <SkillList icon={tech.icon} title={tech.name} />
            </div>
          ))}
        </CustomMarquee>
        <CustomMarquee direction="left">
          {backendToolsTech.map((tech, index) => (
            <div key={index} className="mx-4">
              <SkillList icon={tech.icon} title={tech.name} />
            </div>
          ))}
        </CustomMarquee>
      </div>
    </div>
  );
};

export default SkillSection;
