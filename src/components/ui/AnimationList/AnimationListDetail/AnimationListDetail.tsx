import { motion, useScroll } from "framer-motion";
import Paragraph from "@/components/ui/Paragraph";
import Heading from "@/components/ui/Heading";
import { RefObject, useRef } from "react";
import { IListAnimation } from "@/types/Animation";

interface propTypes {
  reference: RefObject<HTMLElement>;
}

const AnimatedBullet = (props: propTypes) => {
  const { reference } = props;
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

const AnimationListDetail = (props: IListAnimation) => {
  const { title, role, location, date, info, description } = props;
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 flex flex-col w-full justify-between"
    >
      <AnimatedBullet reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="w-full max-w-[90%] ml-auto"
      >
        <Heading as={"h3"} size={"xSmall"} className="capitalize">
          {role} {"in "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#5433FF] via-[#20BDFF] to-[#A5FECB] uppercase hover:text-muted-foreground">
            {title}
          </span>
        </Heading>
        <Paragraph className="capitalize text-muted-foreground">
          {date[0]} — {date[1]} | {location}
        </Paragraph>
        {Array.isArray(info) ? (
          <Paragraph className="capitalize text-muted-foreground">
            Highlight Skill : {info.join(" | ")}
          </Paragraph>
        ) : (
          <Paragraph className="capitalize text-muted-foreground">
            {info}
          </Paragraph>
        )}
        <ul className="w-full flex flex-col list-disc pl-6 py-2">
          {description?.map((item, index) => (
            <li key={index} className="font-medium w-full md:text-sm">
              <Paragraph>{item}</Paragraph>
            </li>
          ))}
        </ul>
      </motion.div>
    </li>
  );
};

export default AnimationListDetail;
