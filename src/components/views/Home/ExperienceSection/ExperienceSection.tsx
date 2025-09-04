import AnimationList from "@/components/ui/AnimationList";
import { WORK_ITEMS } from "./ExperienceSection.constant";

const ExperienceSection = () => {
  return (
    <>
      <AnimationList title="Milestones That Shaped My Path" constant={WORK_ITEMS} />
    </>
  );
};

export default ExperienceSection;
