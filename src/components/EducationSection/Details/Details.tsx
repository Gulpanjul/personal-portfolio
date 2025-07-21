import { useRef } from "react";
import Lilcon from "./Lilcon";
import { motion } from "framer-motion";

interface PropTypes {
  type: string;
  major: string;
  time: string;
  place: string;
  info: string;
}

const Details = ({
  type,major, time, place, info
}: PropTypes) => {
    const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
      <Lilcon reference={ref}/>
      <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }}>
        <h3 className="capitalize text-2xl font-semibold sm:text-xl xs:text-lg">
          {type} {"in "}<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5433FF] via-[#20BDFF] to-[#A5FECB] capitalize hover:text-muted-foreground">{major}</span>
        </h3>
        <span className="capitalize font-medium text-muted-foreground xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

export default Details;
