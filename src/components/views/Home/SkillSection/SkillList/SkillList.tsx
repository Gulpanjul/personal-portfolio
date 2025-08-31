import Paragraph from "@/components/ui/Paragraph";
import { SimpleIcon } from "simple-icons";

interface PropTypes {
  icon: SimpleIcon;
  title: string;
}

const SkillList = (props: PropTypes) => {
  const { icon, title } = props;
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div
        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-primary"
        dangerouslySetInnerHTML={{ __html: icon.svg }}
        style={{ fill: "currentColor" }}
      />
      <Paragraph size="small" className="text-muted-foreground">{title}</Paragraph>
    </div>
  );
};

export default SkillList;
