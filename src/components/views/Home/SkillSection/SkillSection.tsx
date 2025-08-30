import TechList from "@/components/AboutSection/TechList";
import techList from "@/components/AboutSection/TechList.contants";
import CustomMarquee from "@/components/ui/CustomMarquee";

const SkillSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 items-center justify-between">
        <h3 className="text-4xl font-bold mb-4 text-center">Skills</h3>
        <div className="flex-col flex gap-5">
          <CustomMarquee>
            {techList.map((tech, index) => (
              <div key={index} className="mx-4">
                <TechList icon={tech.icon} title={tech.name} />
              </div>
            ))}
          </CustomMarquee>
          <CustomMarquee direction="left">
            {techList.map((tech, index) => (
              <div key={index} className="mx-4">
                <TechList icon={tech.icon} title={tech.name} />
              </div>
            ))}
          </CustomMarquee>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
