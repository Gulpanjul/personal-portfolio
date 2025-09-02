import CertificateCard from "./CertificateCard";
import CertificateList from "./CertificateSection.constant";

const CertificateSection = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mb-20 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        My Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {CertificateList.map((certificate, index) => (
          <CertificateCard
            key={index}
            title={certificate.title}
            link={certificate.link}
            image={certificate.image}
            organization={certificate.alt}
          />
        ))}
      </div>
    </>
  );
};

export default CertificateSection;
