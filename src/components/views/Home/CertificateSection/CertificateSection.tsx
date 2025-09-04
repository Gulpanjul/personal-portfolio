import CertificateCard from "./CertificateCard";
import CertificateList from "./CertificateSection.constant";
import Heading from "@/components/ui/Heading";

const CertificateSection = () => {
  return (
    <>
      <Heading
        as="h2"
        size={"large"}
        strong
        className="w-full text-center mb-16"
      >
        Badges of Growth & Expertise
      </Heading>
      {/* <h2 className="font-bold text-8xl mb-20 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        My Certification
      </h2> */}
      <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
        {CertificateList.map((certificate, index) => (
          <CertificateCard
            key={index}
            alt={certificate.alt}
            title={certificate.title}
            link={certificate.link}
            image={certificate.image}
            organization={certificate.organization}
          />
        ))}
      </div>
    </>
  );
};

export default CertificateSection;
