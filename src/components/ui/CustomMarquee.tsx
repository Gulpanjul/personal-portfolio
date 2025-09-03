import { dir } from "console";
import Marquee from "react-fast-marquee";

type TypeProps = {
  children: React.ReactNode;
  direction?: "left" | "right";
};

const CustomMarquee = (props: TypeProps) => {
  const { children, direction } = props;
  return (
    <Marquee
      direction={direction || "right"}
      loop={0}
      autoFill={true}
      speed={50}
      gradient={true}
      gradientColor={`var(--background)`}
    >
      {children}
    </Marquee>
  );
};

export default CustomMarquee;
