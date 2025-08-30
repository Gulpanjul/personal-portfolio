import { Fragment } from "react";
import PageHead from "../commons/PageHead";
import LandingPageNavbar from "./LandingPageNavbar";
import LandingPageFooter from "./LandingPageFooter";

type PropTypes = {
  title: string;
  children: React.ReactNode;
};

const LandingPageLayout = (props: PropTypes) => {
  const { title, children } = props;
  return (
    <Fragment>
      <PageHead title={title} />
      <LandingPageNavbar />
      <div>{children}</div>
      <LandingPageFooter />
    </Fragment>
  );
};

export default LandingPageLayout;
