import { useRef } from "react";
import Details from "./Details";
import detailList from "./DetailList.constant";
import { motion, useScroll } from "framer-motion";

const ExperienceSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <section className="p-8">
      <h2 className="font-bold text-8xl mb-20 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative min-h-screen lg:w-[90&] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-gradient-to-b from-[#5433FF] via-[#20BDFF] to-[#A5FECB] origin-top"
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
    </section>
  );
};

export default ExperienceSection;
