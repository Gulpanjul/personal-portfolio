import Image from "next/image";
import { Button } from "../ui/button";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-primary mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5433FF] via-[#20BDFF] to-[#A5FECB]">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={["Gulpa", 1000, "Web Developer", 1000, "3D Designer"]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl mb-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
            officia! Tempore sint maiores exercitationem aperiam!
          </p>
          <div>
            <Button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#5433FF] via-[#20BDFF] to-[#A5FECB] hover:bg-slate-200 text-white">
              Hire me
            </Button>
            <button
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#5433FF] via-[#20BDFF] to-[#A5FECB] text-primary mt-3"
            >
              <span className="block bg-background hover:bg-slate-100 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4">
          <div className="rounded-md bg-gray-500 w-[250px] h-[250px] lg:w-[320px] lg:h-[320px] relative">
            <Image
              src="/Images/Personal/avatar.png"
              alt="my image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
