import { useRef } from "react";
import Details from "./Details";
import detailList from "./DetailList.constant";
import { motion, useScroll } from "framer-motion";
import Display from "@/components/ui/Display";

const ExperienceSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <>
      <Display size="md" className="font-bold mb-32 lg:mb-16 text-center">
        Experience
      </Display>
      {/* <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2> */}
      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-linear-to-b from-[#5433FF] via-[#20BDFF] to-[#A5FECB] origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {detailList.map((detail, index) => (
            <Details
              key={index}
              position={detail.position}
              company={detail.company}
              companyLink={detail.companyLink}
              time={detail.time}
              address={detail.address}
              work={detail.work}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default ExperienceSection;
