import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import AnimationListDetail from "./AnimationListDetail";
import { IListAnimation } from "@/types/Animation";
import Heading from "../Heading";

interface PropTypes {
  title: string;
  constant: IListAnimation[];
}

const AnimationList = (props: PropTypes) => {
  const { title, constant } = props;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <>
      <Heading as={"h2"} size={"medium"} strong className="w-full text-center mb-16">
        {title}
      </Heading>
      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-linear-to-b from-[#5433FF] via-[#20BDFF] to-[#A5FECB] origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {constant.map((item, index) => (
            <AnimationListDetail
              key={index}
              {...item}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default AnimationList;
