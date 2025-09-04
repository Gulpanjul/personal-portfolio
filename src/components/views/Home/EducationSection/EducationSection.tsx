import EDU_ITEMS from "./EducationSection.constant";
import AnimationList from "@/components/ui/AnimationList";

const EducationSection = () => {
  return (
    <>
      <AnimationList title="The Learning Journey That Built My Foundation" constant={EDU_ITEMS} />
    </>
  );
};
export default EducationSection;
