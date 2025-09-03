import Image from "next/image";
import Link from "next/link";
import { NAV_ITEMS, SOCIAL_ITEMS } from "../LandingPageLayout.constant";
import Paragraph from "@/components/ui/Paragraph";
import Heading from "@/components/ui/Heading";
import Label from "@/components/ui/Label";

const LandingPageFooter = () => {
  return (
    <div className="flex flex-col items-center justify-around bg-card px-6 py-10 text-center lg:flex-row lg:text-left xl:p-20">
      <Image
        src={"/images/general/logo.svg"}
        alt="logo"
        className="mb-4 w-40 lg:mb-0 lg:w-60"
        width={200}
        height={100}
      />
      <div className="mb-4 flex flex-col gap-4 lg:mb-0">
        <Heading as={"h4"} size={"small"} className="text-primary">
          Contact
        </Heading>
        <div>
          <Label weight={"strong"} className="text-muted-foreground">
            Andhika Chandra Gulpa
          </Label>
        </div>
        <div>
          <Paragraph className="text-muted-foreground">
            Instagram -{" "}
            <Link href="twitter.com" className="hover:text-primary">
              @gulpanjul
            </Link>
          </Paragraph>
        </div>
        <div>
          <Paragraph className="text-muted-foreground">
            Email -{" "}
            <Link
              href="mailto:gulpa.andhikac@gmail.com"
              className="hover:text-primary"
            >
              gulpa.andhikac@gmail.com
            </Link>
          </Paragraph>
        </div>
      </div>

      <div className="lg:mb-0 mb-10 flex flex-col gap-2">
        <Heading as={"h2"} size={"small"} className="text-primary lg:mb-2">Menu</Heading>
        {NAV_ITEMS.map((item) => (
          <Link
            key={`footer-nav-${item.label}`}
            href={item.href}
            className="cursor-pointer text-muted-foreground hover:text-primary"
          >
            <Label>{item.label}</Label>
          </Link>
        ))}
      </div>

      <div className="flex flex-col items-center gap-8">
        <div className="flex items-center justify-between gap-8 text-muted-foreground">
          {SOCIAL_ITEMS.map((item) => (
            <Link
              href={item.href}
              className="text-3xl hover:text-primary"
              key={`footer-social-${item.label}`}
            >
              {item.icon}
            </Link>
          ))}
        </div>
        <p className="w-full text-center text-muted-foreground">
          Copyright © 2025 gulpa-portfolio. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default LandingPageFooter;
