import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import { CodeBracketIcon } from "@heroicons/react/16/solid";
import { EyeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

interface PropTypes {
  alt: string;
  title: string;
  link: string;
  image: string;
  organization: string;
}

const CertificateCard = (props: PropTypes) => {
  const { alt, title, link, image, organization } = props;
  return (
    <>
      <div className="text-primary rounded-xl bg-card py-7 pl-7 justify-between flex flex-col gap-2">
        <div>
          <Heading as={"h3"} size={"small"} className="line-clamp-1">
            {title}
          </Heading>
          {/* <h5 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {title}
        </h5> */}
          <Paragraph className="text-muted-foreground">
            {organization}
          </Paragraph>
        </div>
        <div className="h-52 md:h-72 relative group overflow-hidden">
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover object-left rounded-tl-xl"
            sizes="(max-width: 1443px) 100vw, 1443px"
            priority
          />

          <div className="absolute inset-0 bg-card/80 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center">
            <Link
              href={link}
              className="h-14 w-14 border-2 relative rounded-full border-muted-foreground hover:border-primary group/link"
            >
              <EyeIcon className="h-10 w-10 text-muted-foreground absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CertificateCard;
