import { motion, useScroll } from "framer-motion";

interface PropTypes {
  reference: React.RefObject<HTMLElement>;
}

const Lilcon = ({ reference }: PropTypes) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });
  return (
    <figure className="absolute left-0 xs:left-0.5 stroke-muted-foreground">
      <svg
        className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]"
        width="75"
        height="75"
        viewBox="0 0 100 100"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5433FF" />
            <stop offset="50%" stopColor="#20BDFF" />
            <stop offset="100%" stopColor="#A5FECB" />
          </linearGradient>
        </defs>
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-primary stroke-1 fill-none"
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
          fill="url(#grad1)"
          className="animate-pulse stroke-1"
        />
      </svg>
    </figure>
  );
};

export default Lilcon;
