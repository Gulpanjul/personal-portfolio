import { Button } from "@/components/ui/button";
import Display from "@/components/ui/Display";
import Label from "@/components/ui/Label";
import Paragraph from "@/components/ui/Paragraph";
import { TypeAnimation } from "react-type-animation";

const colorGradient = "from-[#5433FF] via-[#20BDFF] to-[#A5FECB]";
const buttonClassName = `p-[3px] w-full lg:w-fit rounded-full bg-linear-to-br ${colorGradient}`;
const spanClassName = "block rounded-full w-full sm:px-5 py-0.5 text-xl";

const NameAnimation = () => {
  return (
    <>
      <span
        className={`text-transparent bg-clip-text bg-linear-to-r ${colorGradient}`}
      >
        Hello, I&apos;m{" "}
      </span>
      <br />
      <TypeAnimation
        sequence={[
          "Gulpa",
          1000,
          "Web Developer",
          1000,
          "3D Designer",
          1000,
          "Graphic Designer",
          1000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
    </>
  );
};

const HeroText = () => {
  return (
    <div className="col-span-7 place-self-center text-center lg:text-left">
      <Display size="lg">
        <NameAnimation />
      </Display>
      <Paragraph size="large" className="text-muted-foreground my-4">
        Information Systems graduate blending digital marketing, web
        development, and creative design into impactful solutions.
      </Paragraph>
      <div className="mt-4 flex flex-col lg:flex-row gap-5 ">
        <Button className={`${buttonClassName}`}>
          <Label
            className={`bg-transparent hover:bg-background text-secondary hover:text-primary ${spanClassName}`}
            size={"small"}
            weight={"strong"}
          >
            Hire me
          </Label>
        </Button>
        <Button className={`${buttonClassName}`}>
          <Label
            className={`bg-background hover:bg-transparent text-primary hover:text-secondary ${spanClassName}`}
            size={"xSmall"}
            weight={"strong"}
          >
            Download CV
          </Label>
        </Button>
      </div>
    </div>
  );
};

export default HeroText;
