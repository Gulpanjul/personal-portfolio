import { Fragment, ReactNode } from "react";
import PageHead from "../../commons/PageHead";
import LandingPageLayoutNavbar from "./LandingPageLayoutNavbar";
import LandingPageLayoutFooter from "./LandingPageLayoutFooter";

type PropTypes = {
  title: string;
  children: ReactNode;
};

const LandingPageLayout = (props: PropTypes) => {
  const { title, children } = props;
  return (
    <Fragment>
      <PageHead title={title} />
      <LandingPageLayoutNavbar />
      <div className="py-10 md:p-6">{children}</div>
      <LandingPageLayoutFooter />
    </Fragment>
  );
};

export default LandingPageLayout;
