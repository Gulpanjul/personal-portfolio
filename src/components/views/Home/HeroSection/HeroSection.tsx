import HeroText from "./HeroText";
import HeroAvatar from "./HeroAvatar";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12">
      <HeroText />
      <HeroAvatar />
    </div>
  );
};

export default HeroSection;
