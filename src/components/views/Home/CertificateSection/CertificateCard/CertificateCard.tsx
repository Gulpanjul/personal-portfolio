import { CodeBracketIcon } from "@heroicons/react/16/solid";
import { EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

interface PropTypes {
  title: string;
  link: string;
  image: string;
  organization: string;
}

const CertificateCard = (props: PropTypes) => {
  const { title, link, image, organization } = props;
  return (
    <>
      <div className="text-primary rounded-b-xl mt-3 bg-card-foreground py-6 px-4">
        <h5 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg mb-2">
          {title}
        </h5>
        <p className="text-muted-foreground">{organization}</p>
        <div
          className="h-52 md:h-72 rounded-t-xl relative group"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-card/80 bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 rounded-t-xl">
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
