import Image from "next/image";

const HeroAvatar = () => {
  return (
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
  );
};

export default HeroAvatar;
