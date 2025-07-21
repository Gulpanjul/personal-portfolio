

import { motion, useScroll} from "framer-motion";

interface PropTypes {
  reference: React.RefObject<HTMLElement>;
}

const Lilcon = ({ reference }: PropTypes) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["start end", "end end"],
  });
  return (
    <figure className="absolute left-0 stroke-muted-foreground">
      <svg className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]" width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-muted-foreground stroke-1 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px] fill-background"
          style={{ pathLength: scrollYProgress }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="animate-pulse stroke-1 fill-muted-foreground"
        />
      </svg>
    </figure>
  );
};

export default Lilcon;
